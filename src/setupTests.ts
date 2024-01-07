import { expect } from 'vitest';
import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { setupServer } from 'msw/node';

expect.extend(matchers);

export const mswServer = setupServer();

beforeAll(() => {
  mswServer.listen();
});

afterEach(() => {
  mswServer.resetHandlers();
});

afterAll(() => mswServer.close());
