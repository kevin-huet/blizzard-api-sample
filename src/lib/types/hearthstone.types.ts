export interface HearthstoneKeyword  {
    id: number;
    name: string;
    slug: string;
    refText: string;
    text: string;
    gameModes: number[];
}

export interface HearthstoneClass  {
    id: number;
    name: string;
    slug: string;
    cardId: number;
    heroPowerCard: number;
    alternateHeroCardIds: number[];
}

export interface HearthstoneCardType  {
    id: number;
    name: string;
    slug: string;
    gameModes?: number[];
}

export interface HearthstoneRarity {
    id: number;
    name: string;
    slug: string;
    craftingCost: number[]|any[];
    dustValue: number[]|any[];
}

export interface HearthstoneSet {
    id: number;
    name: string;
    slug: string;
    interface: string;
    collectibleCount: number;
    collectibleRevealedCount: number;
    nonCollectibleCount: number;
    nonCollectibleRevealedCount: number;
    aliasSetIds?: number[];
}

export interface HearthstoneGameMode {
    id: number;
    name: string;
    slug: string;
}

export interface MercenaryRole  {
    id: number;
    name: string;
    slug: string;
}

export interface HearthstoneMinionType  {
    id: number;
    name: string;
    slug: string;
    gameModes?: number[];
}

export interface HearthstoneSetGroup  {
    name: string;
    slug: string;
    year: number;
    svg?: string;
    cardSets?: string[];
    standard: boolean;
    icon?: string;
}


export interface HearthstoneMetadata  {
    filterableField: string[];
    numericFields: string[];
    classes: HearthstoneClass[];
    setGroups: HearthstoneSetGroup[];
    keywords: HearthstoneKeyword[];
    cardBackCategories: any[];
}

export interface HearthstoneCard  {
    id: number;
    slug: string;
    name: string;
    setId?: number;
    health?: number;
    attack?: number;
    manaCost?: number;
    minionTyId?: number;
    rarityId?: number;
    keywordIds?: number[];
    artist?: string;
    classId?: number;
    gameModeIds?: number[];
}

export interface HearthstoneBackCard  {

}


export interface HearthstoneSearchCard  {
    page?: number;
    pageSize?: number;
    sort?: string;
    order?: string
    attack?: number;
    health?: number;
    set?: string;
    classSlug?: string;
    manaCost?:  number;
    collectible?: string;
    rarity?: string;
    type?: string;
    minionType?: string;
    keyword?: string;
    textFilter?: string;
}

export interface HearthstoneCardSearchResult  {
    cards?: HearthstoneCard[];
    page?: number;
    cardCount?: number;
    pageCount?: number;
}