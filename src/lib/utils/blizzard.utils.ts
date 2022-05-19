// @ts-ignore
import { AxiosInstance, AxiosResponse } from "axios";

export async function handleApiCall(apiUrl: string, errorMessage: string, axios: AxiosInstance, params?: object): Promise<AxiosResponse> {
    try {
        const response = await axios.get(encodeURI(apiUrl), (params) ? {
            params: params
        } : axios.defaults.params);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(`Blizzard API, HS Game Data error :: ${errorMessage}`);
    }
}

export const origin = {
    us:  {
        hostname: 'https://us.api.blizzard.com',
        defaultLocale: 'en_US',
        locales: ['en_US', 'es_MX', 'pt_BR', 'multi'],
    },
    eu: {
        hostname: 'https://eu.api.blizzard.com',
        defaultLocale: 'en_GB',
        locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT', 'multi'],
    },
    sea: {
        hostname: 'https://sea.api.blizzard.com',
        defaultLocale: 'en_US',
        locales: ['en_US', 'multi'],
    },
    kr: {
        hostname: 'https://kr.api.blizzard.com',
        defaultLocale: 'ko_KR',
        locales: ['ko_KR', 'en_GB', 'en_US', 'multi'],
    },
    tw: {
        hostname: 'https://tw.api.blizzard.com',
        defaultLocale: 'zh_TW',
        locales: ['zh_TW', 'en_GB', 'en_US', 'multi'],
    },
    cn: {
        hostname: 'https://gateway.battlenet.com.cn',
        defaultLocale: 'zh_CN',
        locales: ['zh_CN', 'en_GB', 'en_US', 'multi'],
    }
};