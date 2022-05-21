import { BlizzardApi } from '../../build/main';

test('test init', () => {
    expect(new BlizzardApi() !== null)
})

test('Blizzard init - if clientID / secret not defined', () => {
    try {
        const blizzardApi = new BlizzardApi();
        blizzardApi.init('', '').then().catch(err => {
            expect(err).toBeInstanceOf(Error)
        });
    } catch (err) {
        expect(err).toBeInstanceOf(Error)
    }
})

test('Blizzard init - if clientID / secret not defined', () => {
    try {
        const blizzardApi = new BlizzardApi();
        blizzardApi.init('aa', 'aa').then().catch(err => {
            expect(err).toBeInstanceOf(Error)
        });
    } catch (err) {
        expect(err).toBeInstanceOf(Error)
    }
})
test('Hearthstone API Request - get Hearthstone Metadata', () => {
    const blizzardApi = new BlizzardApi();
    blizzardApi.init(process.env.BLIZZARD_API_KEY, process.env.BLIZZARD_API_SECRET).then(() => {
        blizzardApi.hearthstone.getMetadata().then().catch(err => {
            expect(err).toBeInstanceOf(TypeError);
        });
    }
    ).catch(err => {
        expect(err).toBeInstanceOf(TypeError);
    });
})
