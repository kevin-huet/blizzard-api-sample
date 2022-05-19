import { AxiosInstance } from 'axios';

export class PlayerData {
    constructor(private readonly axios: AxiosInstance, private readonly defaultAxiosParams: object) {}

    async getAchievement() {}
}