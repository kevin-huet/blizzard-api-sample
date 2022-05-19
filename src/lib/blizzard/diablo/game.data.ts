import { AxiosInstance } from 'axios';

export class GameData {
    constructor(private readonly axios: AxiosInstance, private readonly defaultAxiosParams: object) {}
}