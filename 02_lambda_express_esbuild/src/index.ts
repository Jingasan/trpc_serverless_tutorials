import * as trpcExpress from "@trpc/server/adapters/express";
import serverlessExpress from "@vendia/serverless-express";
import express from "express";
import cors from "cors";
import { appRouter } from "./router";

// created for each request
const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({}); // no context

// Expressのインスタンス作成
const app = express();

// リクエストボディのJSONをパースするための設定
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// CORSの設定
const corsOptions = {
  origin: "*",
  methods: "GET, POST",
  allowedHeaders:
    "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
};
app.use(cors(corsOptions));

// ルーティング設定
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export const handler = serverlessExpress({ app });
