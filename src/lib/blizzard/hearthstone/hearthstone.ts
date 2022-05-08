// @ts-ignore
import {AxiosInstance} from "axios";
import {handleApiCall} from "../../utils/blizzard.utils.js";

type SearchCard = {
    page?: number,
    pageSize?: number,
    sort?: string,
    order?: string
    attack?: string,
    health?: string,
    set?: string,
    classSlug?: string,
    manaCost?: string,
    collectible?: string,
    rarity?: string,
    type?: string,
    minionType?: string,
    keyword?: string,
    textFilter?: string,
}

export default class HearthstoneGameData {
    private readonly gameBaseUrlPath: string = '/hearthstone';

    constructor(private readonly axios: AxiosInstance, private readonly defaultAxiosParams: object) {}

    async searchBackCards() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/metadata`,
            'Error fetching the metadata.',
            this.axios
        );
    }

    async getMetadata() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/metadata`,
            'Error fetching the metadata.',
            this.axios
        );
    }

    async getCard(cardSlug: string) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/cards/${cardSlug}`,
            'Error fetching the specified card.',
            this.axios
        );
    }

    async searchCards(searchParams: SearchCard) {
        try {
            const response = await this.axios.get(`${this.gameBaseUrlPath}/cards`, {
                params: {
                    ...searchParams,
                    ...this.defaultAxiosParams,
                }});
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error('Error fetching cards that matched the passed parameters.');
        }
    }
}