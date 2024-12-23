import { test, request, APIRequestContext } from '@playwright/test';

let globalReqContext: APIRequestContext;

test.beforeAll('Initialize BaseURL', async () => {
    globalReqContext = await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com',
        extraHTTPHeaders: {
            Accept: 'application/json'
        }
    })
});

test('API Testing GET', async ({ request }) => {
    const bookingResponse = await request.get('https://restful-booker.herokuapp.com/booking', {
        headers: {
            Accept: 'application/json'
        }
    });

    console.log(await bookingResponse.json());
});

test('API Testing baseURL', async () => {
    const apiReqContext = await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com',
        extraHTTPHeaders: {
            Accept: 'application/json'
        }
    });

    const bookingResponse = await apiReqContext.get('/booking');
    console.log(await bookingResponse.json());
});

test('BaseURL from beforeAll', async () => {
    const bookingResponse = await globalReqContext.get('/booking');
    console.log(await bookingResponse.json());
});

test('API Testing GET config file', async ({ request }) => {
    const bookingResponse = await request.get('/booking');
    console.log(await bookingResponse.json());
});

test('Get a specific booking with path', async ({ request }) => {
    const bookingResponse = await request.get('/booking/1387');
    console.log(await bookingResponse.json());
});

test('Get a specific booking with query in url', async ({ request }) => {
    const bookingResponse = await request.get('/booking?firstname=John&lastname=Smith');
    console.log(await bookingResponse.json());
});

test('Get a specific booking with query as params', async ({ request }) => {
    const bookingResponse = await request.get('/booking', {
        params: {
            firstname: 'John',
            lastname: 'Smith'
        }
    });
    console.log(await bookingResponse.json());
});