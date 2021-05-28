import { getDrinkData } from './api.js'

import { enableFetchMocks } from 'jest-fetch-mock';

test("getting drink data", async () => {
    enableFetchMocks()
    fetch.mockResponseOnce(
        JSON.stringify(["Margarita", "Screwdriver", "Rum and Coke"])
    );
    const data = await getDrinkData();
    expect(data).toContain("Margarita")
});

