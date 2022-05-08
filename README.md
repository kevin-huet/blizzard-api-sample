# Blizzard API Sample

a small library facilitating requests to the Blizzard API.
Currently, only Hearthstone game requests are usable but other games will be added over time
## Installation


```bash
npm i blizzard-api-sample
```

## Usage

```typescript
import BlizzardApi from "blizzard-api-sample";

//create new instance
let blizzardApi = new BlizzardApi();

//init api requests
blizzardApi.init('your api key', 'your api secret');


//get hearthstone metadata
blizzardApi.hearthstone.getMetadata();

```

all Hearthstone requests :
```typescript
//search back card
blizzardApi.hearthstone.searchBackCards();

//get all metadata
blizzardApi.hearthstone.getMetadata();

//get card by slug
blizzardApi.hearthstone.getCard(cardSlug: string);

//search cards
blizzardApi.hearthstone.searchCards(searchParams: SearchCard);
```

Search cards params :
```typescript
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
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)