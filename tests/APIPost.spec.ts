import { expect, test } from '@playwright/test';

test('Basic POST call', async ({ request }) => {
    const postRes = await request.post('/booking', {
        data: {
            "firstname": "Tanmay",
            "lastname": "Mohapatra",
            "totalprice": 17,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2026-01-01",
                "checkout": "2027-01-01"
            },
            "additionalneeds": "Breakfast"
        }
    });
    const jsonPostRes = await postRes.json();
    console.log(jsonPostRes);

    expect(postRes.status()).toBe(200);
    expect(jsonPostRes.booking).toMatchObject({
        "firstname": "Tanmay",
        "lastname": "Mohapatra",
        "totalprice": 17,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2026-01-01",
            "checkout": "2027-01-01"
        },
        "additionalneeds": "Breakfast"
    });

    expect(jsonPostRes.booking.additionalneeds).toEqual("Breakfast");
});