export interface WowAchievementCategory {
    id: number;
    name: string;
    key: {
        href: string;
    };
}

export interface WowAchievement {
    id: number;
    name: string;
    key?: Key
    category?: WowAchievementCategory;
    point?: number;
    is_account_wide: boolean;
    display_order: number;
    next_achievement?: {
        id: number;
        key: Key;
        name: string;
    };
    criteria?: {
        id: number;
        key: Key;
        description: string;
    };
    media?: {
        id: number;
        key: Key;
    };
}
export interface WowMedia {
    id: number;
    assets: WowAsset[];
}

export interface WowAsset {
    key: string;
    value: string;
    file_data_id?: number;
}

export interface Key {
    href: string;
}

export interface WowTokenIndex {
    last_updated_timestamp  : number;
    price: number;
}

export interface WowPlayableClass {
    id: number;
    name: string;
    gender_name: WowGenderName;
    specialization: [];
}

export interface WowPlayableSpecialization {}

export interface WowQuest {
    id: number;
    name: number;
    description: string;
}

export interface WowQuestCategory {}

export interface WowGenderName {
    male: string;
    female: string;
}

export interface WowAzeriteEssence {
    id: number;
    name: string;
    allowed_specializations: [];
    powers: {
        id: number;
        rank: number;
        name: string;
        main_power_spell: {
            key: Key;
        }
    }[];
}