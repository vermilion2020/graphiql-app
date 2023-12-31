import { http, HttpResponse } from 'msw';
import { DEFAULT_URL } from './model/queries';
import { DOCS_TEST_DATA } from './model/testDocsData';

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
