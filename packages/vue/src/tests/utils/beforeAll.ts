import { beforeAll } from "vitest";
(global as any).CSS = { supports: () => false };

beforeAll(() => {
  // @ts-ignore
  global.CSS = {
    supports: (str: string) => false,
    escape: (str: string) => str,
  };
});
