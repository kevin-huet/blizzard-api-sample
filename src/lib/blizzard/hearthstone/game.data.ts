// @ts-ignore
import { AxiosInstance, AxiosResponse } from "axios";
import { handleApiCall } from "../../utils/blizzard.utils.js";
import {
    HearthstoneBackCard,
    HearthstoneCard,
    HearthstoneCardSearchResult,
    HearthstoneMetadata,
    HearthstoneSearchCard
} from '../../../types/hearthstone.types';

export default class HearthstoneGameData {
    private readonly gameBaseUrlPath: string = '/hearthstone';

    constructor(private readonly axios: AxiosInstance, private readonly defaultAxiosParams: object) {
    }

    async searchBackCards():Promise<AxiosResponse<HearthstoneBackCard>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/metadata`,
            'Error fetching the metadata.',
            this.axios
        );
    }

    async getMetadata(): Promise<AxiosResponse<HearthstoneMetadata>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/metadata`,
            'Error fetching the metadata.',
            this.axios
        );
    }

    async getCard(cardSlug: string): Promise<AxiosResponse<HearthstoneCard>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/cards/${cardSlug}`,
            'Error fetching the specified card.',
            this.axios
        );
    }

    async searchCards(searchParams: HearthstoneSearchCard): Promise<AxiosResponse<HearthstoneCardSearchResult>> {
        return await handleApiCall(`${this.gameBaseUrlPath}/cards`,
            'Error fetching cards that matched the passed parameters.',
            this.axios,
            {
                ...searchParams,
                ...this.defaultAxiosParams,
            });
    }
}