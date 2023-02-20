import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { z } from "zod";

// created for each request
const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();
export const appRouter = t.router({
  greet: t.procedure.input(z.void()).query(() => {
    return `Hello world!`;
  }),
});

export type AppRouter = typeof appRouter;
