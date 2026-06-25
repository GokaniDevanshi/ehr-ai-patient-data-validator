import { test, expect } from '@playwright/test';

test('Get patient', async ({ request }) => {

 const response = await request.get(
  'https://hapi.fhir.org/baseR4/Patient?_count=1',
  {
    timeout: 30000
  }
);

  expect(response.ok()).toBeTruthy();

  const body = await response.json();

  console.log(body.entry[0].resource);
});