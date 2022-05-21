import { AxiosInstance, AxiosResponse } from 'axios';
import { BlizzardType, WoWMediaSearch } from '../../types/blizzard.type';
import { handleApiCall } from '../../utils/blizzard.utils';
import { WowMedia, WowTokenIndex } from '../../types/wow.types';

export class GameData {
    private readonly gameBaseUrlPath: string = '/hearthstone';
    private readonly staticNamespace: string;

    constructor(private readonly axios: AxiosInstance, private defaultAxiosParams: BlizzardType) {
        this.staticNamespace = `static-${defaultAxiosParams.locale}`;
        this.axios.defaults.params.namespace = this.staticNamespace;
    }

    // Azerite Essences Index API {GET}
    async getAzeriteEssencesIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/azerite-essence/index`,
            'Error fetching',
            this.axios
        );
    }

    // Azerite Essences API {GET}
    async getAzeriteEssence(id : number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/azerite-essence/${id}`,
            'Error fetching',
            this.axios
        );
    }

    // Azerite Essence Media API {GET}
    async azeriteEssenceMedia(id: number): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/media/azerite-essence/${id}`,
            'Error fetching',
            this.axios
        );
    }

    // Connected Realm API {GET}
    async getConnectedRealm(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/connected-realm/${id}`,
            'Error fetching',
            this.axios
        );
    }


    // Connected Realms Index API {GET}
    async getConnectedRealmsIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/covenant/index`,
            'Error fetching',
            this.axios
        );
    }

    // Achievement API {GET}
    async getAchievement(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/achievement/${id}`,
            'Error fetching',
            this.axios
        );
    }

    // Achievement Media API {GET}
    async getAchievementMedia(id: number): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/media/achievement/${id}`,
            'Error fetching',
            this.axios
        );
    }

    // AchievementIndex API {GET}
    async getAchievementIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/achievement/index`,
            'Error fetching',
            this.axios
        );
    }

    // Achievement Category API {GET}
    async getAchievementCategory(id : number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/achievement-category/${id}`,
            'Error fetching',
            this.axios
        );
    }

    // Achievement Category Index API {GET}
    async getAchievementCategoryIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/achievement-category/index`,
            'Error fetching',
            this.axios
        );
    }

    // Auction API {GET}
    async getAuctions(connectedRealmId: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/connected-realm/${connectedRealmId}/auction`,
            'Error fetching',
            this.axios
        );
    }

    // Creature Families Index API {GET}
    async getCreatureFamiliesIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/index`,
            'Error fetching',
            this.axios
        );
    }

    async getCreatureFamily(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/creature-family/${id}`,
            'Error fetching',
            this.axios
        );
    }

    async getCreatureTypeIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/index`,
            'Error fetching',
            this.axios
        );
    }

    async getCreatureType(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/creature-type/${id}`,
            'Error fetching',
            this.axios
        );
    }

    async getCreature(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/creature/${id}`,
            'Error fetching',
            this.axios
        );
    }

    async getCreatureDisplayMedia(id: number): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-display/${id}`,
            'Error fetching',
            this.axios
        );
    }

    async getCreatureFamilyMedia(id: number): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/media/creature-family/${id}`,
            'Error fetching',
            this.axios
        );
    }

    async getGuildCrestComponentIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/guild-crest/index`,
            'Error fetching',
            this.axios,
        );
    }

    async getGuildCrestBorderMedia(id: number): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/media/guild-crest/border/${id}`,
            'Error fetching',
            this.axios
        );
    }

    async getGuildCrestEmblemMedia(id: number): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/media/guild-crest/emblem/${id}`,
            'Error fetching',
            this.axios
        );
    }


    // Playable Class API {GET}
    async getPlayableClassesIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/index`,
            'Error fetching.',
            this.axios
        );
    }

    async getPlayableClassMedia(id: number): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/media/playable-class/${id}`,
            'Error fetching.',
            this.axios
        );
    }

    async getPlayableClass(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/playable-class/${id}`,
            'Error fetching.',
            this.axios
        );
    }

    // Mythic+ API {GET}
    async getMythicAffix(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/keystone-affix/${id}`,
            'Error fetching',
            this.axios
        );
    }

    async getMythicAffixIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/keystone-affix/index`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getMythicAffixMedia(id: number): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/media/keystone-affix/${id}`,
            'Error fetching',
            this.axios
        );
    }


    // Covenant Api //
    async getCovenantsIndex() {
        console.log("convenant index")
        return await handleApiCall(
            `${this.gameBaseUrlPath}/covenant/index`,
            'Error fetching',
            this.axios
        );
    }

    async getCovenant(id : number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/covenant/${id}`,
            'Error fetching',
            this.axios
        );
    }

    async getCovenantMedia(id : number): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/media/covenant/${id}`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getSoulbindsIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/covenant/soulbind/index`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getSoulbind(id : number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/covenant/soulbind/${id}`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getConduitsIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/covenant/conduit/index`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getConduit(id : number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/covenant/conduit/${id}`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getItemClassesIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/item-class/index`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getItemClass(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${id}`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getItemSetsIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/item-set/index`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getItemSet(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/item-set/${id}`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getItemSubclass(classId: number, subClassId: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/item-class/${classId}/item-subclass/${subClassId}`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getItem(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/item/${id}`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getItemMedia(id: number): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/media/item/${id}`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getMountIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/mount/index`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async getMount(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/mount/${id}`,
            'Error fetching connected realm index.',
            this.axios
        );
    }

    async mediaSearch(search: WoWMediaSearch): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/search/media`,
            'Error fetching connected realm index.',
            this.axios,
            search
        );
    }

    async getPlayableRacesIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/index`,
            'Error fetching.',
            this.axios
        );
    }

    async getPlayableRace(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/playable-race/${id}`,
            'Error fetching.',
            this.axios
        );
    }

    async getPlayableSpecializationIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/playable-specialization/index`,
            'Error fetching.',
            this.axios
        );
    }

    async getPlayableSpecialization(id: number): Promise<AxiosResponse> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/playable-specialization/${id}`,
            'Error fetching.',
            this.axios
        );
    }

    async getPlayableSpecializationMedia(id: number): Promise<AxiosResponse<WowMedia>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/media/playable-specialization/${id}`,
            'Error fetching.',
            this.axios
        );
    }

    async getPowerTypeIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/power-type/index`,
            'Error fetching.',
            this.axios
        );
    }

    async getPowerType(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/power-type/${id}`,
            'Error fetching.',
            this.axios
        );
    }

    async getWoWTokenIndex(): Promise<AxiosResponse<WowTokenIndex>> {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/token/index`,
            'Error fetching.',
            this.axios
        );
    }

    async getTitleIndex() {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/title/index`,
            'Error fetching.',
            this.axios
        );
    }

    async getTitle(id: number) {
        return await handleApiCall(
            `${this.gameBaseUrlPath}/title/${id}`,
            'Error fetching.',
            this.axios
        );
    }

    async getQuestType() {}
    async getQuestCategory() {}
    async getQuest() {}
    async getReputationFactionsIndex() {}
    async getReputationTiersIndex() {}
    async getReputationFaction() {}
    async getReputationTier() {}
    async getSpell() {}
    async getSpellMedia() {}
    async searchSpell() {}
    async getTalent() {}
    async getTalentsIndex() {}
    async getPvPTalent() {}
    async getPvPTalentsIndex(){}
    async getTechTalent() {}
    async getTechTalentsIndex(){}
    async getTechTalentMedia() {}
    async getTechTalentTree() {}
    async getTechTalentTreeIndex() {}
}