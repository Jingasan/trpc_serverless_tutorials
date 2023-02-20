"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const server_1 = require("@trpc/server");
const aws_lambda_1 = require("@trpc/server/adapters/aws-lambda");
const zod_1 = require("zod");
function createContext({ event, context, }) {
    return {
        event: event,
        apiVersion: event.version || "1.0",
        user: event.headers["x-user"],
    };
}
const t = server_1.initTRPC.context().create();
const publicProcedure = t.procedure;
const router = t.router;
const appRouter = router({
    greet: publicProcedure.input(zod_1.z.void()).query(() => {
        return `Hello world!`;
    }),
});
exports.handler = (0, aws_lambda_1.awsLambdaRequestHandler)({
    router: appRouter,
    createContext,
});
