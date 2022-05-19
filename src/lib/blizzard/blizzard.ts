import * as qs from 'querystring';
import axios, {AxiosInstance} from "axios";
import {origin} from "../utils/blizzard.utils.js";
import HearthstoneGameData from "./hearthstone/game.data.js";


export class BlizzardApi {

    public hearthstone?: HearthstoneGameData
    private _clientId?: string;
    private _clientSecret?: string;
    private _oauthToken?: string;
    private _axios: AxiosInstance;
    private _defaultAxiosParams?: object;
    private _originObject: object;

    // Unused constructor as we needed the ability to async the initialization
    // and await all of the underlying promises.
    constructor(private _origin: string = 'us', private _locale: string = 'en_US') {
        this._originObject = origin;
    }

    async init(clientId: string, clientSecret: string): Promise<void> {
        if (!clientId) throw new Error('You are missing your Client ID in the passed parameters. This parameter is required.');
        if (!clientSecret) throw new Error('You are missing your Client Secret in the passed parameters. This parameter is required.');

        this._clientId = clientId;
        this._clientSecret = clientSecret;

        this._defaultAxiosParams = {
            locale: this._locale
        };

        // Handles the fetching of a new OAuth token from the Battle.net API
        // and then creates a reusable instance of axios for all subsequent API requests.
        try {
            const url = this._originObject[this._origin].hostname;
            this._axios = axios.create({
                baseURL: url,
                params: this._defaultAxiosParams
            });

            await this.setOAuthToken();
            this._axios.defaults.headers.common['Authorization'] = `Bearer ${this._oauthToken}`;
        } catch (error) {
            console.log(error);
        }

        this.hearthstone = new HearthstoneGameData(this._axios, this._defaultAxiosParams);
    }

    // Sets a new access token for all of the subsequent API requests.
    // Every invocation of this method will create a new access token,
    // so you should never have to worry about the token ever expiring.
    async setOAuthToken(): Promise<void> {
        const data = { 'grant_type': 'client_credentials'}
        try {
            const response = await axios.request({
                url: `https://${this._origin}.battle.net/oauth/token`,
                method: 'POST',
                auth: {
                    username: this._clientId,
                    password: this._clientSecret,
                },
                data: qs.stringify(data)
        });

            this._oauthToken = response.data.access_token;
        } catch (error) {
            console.log(error);
            throw new Error(`Problem getting the OAuth token from the Blizzard API.
                            Please check that your Client ID and Secret are correct.`);
        }
    }
}
