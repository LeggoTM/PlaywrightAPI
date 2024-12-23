import { test, request, APIRequestContext } from '@playwright/test';

let globalReqContext: APIRequestContext;

test.beforeAll('Initialize BaseURL', async() => {
    globalReqContext = await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com'
    })
});

test('API Testing GET', async ({ request }) => {
   const bookingResponse = await request.get('https://restful-booker.herokuapp.com/booking');
   
   console.log(await bookingResponse.json());
});

test('API Testing baseURL', async () => {
    const apiReqContext = await request.newContext({
        baseURL: 'https://restful-booker.herokuapp.com'
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