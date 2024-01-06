import { http, HttpResponse } from 'msw';
import { DEFAULT_URL } from './model/queries';
import { DOCS_TEST_DATA } from './model/testDocsData';

const AUTH_URL_PATTERN = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup*';

export interface IRequest {
  query: string;
  variables?: string;
}

const AUTH_DATA = {
  "kind": "identitytoolkit#GetAccountInfoResponse",
  "users": [
    {
      "localId": "PVnzKLi9i5YzgepeI0MnayGVQWF2",
      "email": "test_user111@gmail.com",
      "passwordHash": "UkVEQUNURUQ=",
      "emailVerified": false,
      "passwordUpdatedAt": 1702681388013,
      "providerUserInfo": [
        {
          "providerId": "password",
          "federatedId": "test_user111@gmail.com",
          "email": "test_user111@gmail.com",
          "rawId": "test_user111@gmail.com"
        }
      ],
      "validSince": new Date().getTime(),
      "lastLoginAt": "1704548172470",
      "createdAt": "1702681388013",
      "lastRefreshAt": "2024-01-06T13:36:12.470Z"
    }
  ]
};

export const SEND_QUERY = http.post(DEFAULT_URL, async ({ request }) => {
  const data: IRequest = (await request.json()) as IRequest;
  return HttpResponse.json({
    data: { query: data.query, variables: data.variables },
  });
});

export const GET_DOCS = http.post(DEFAULT_URL, async () => {
  return HttpResponse.json(DOCS_TEST_DATA);
});

export const MOCK_AUTH = http.post(AUTH_URL_PATTERN, async () => {
  return HttpResponse.json(AUTH_DATA);
});
