import { http, HttpResponse, delay } from 'msw';
import { DEFAULT_URL } from './model/queries';
import { DOCS_TEST_DATA } from './model/testDocsData';

const AUTH_URL_PATTERN = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword*';

export interface IRequest {
  query: string;
  variables?: string;
}

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
  await delay(2000);
  return HttpResponse.json({'status': 'ok'});
});
