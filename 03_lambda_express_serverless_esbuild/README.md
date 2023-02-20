# 03_lambda_express_serverless_esbuild

serverless-esbuild という Serverless Framework のプラグインを用い、
npx sls deploy コマンドによるデプロイ実行時に
一緒に esbuild によるビルドを行ってしまうサンプルです。

## ビルド・デプロイ方法

```
$ npm install
$ npx sls deploy
```

## API 実行方法

API URL (API Gateway v2):

```
https://<randam>.execute-api.ap-northeast-1.amazonaws.com/trpc/greet
```

API URL (API Gateway v1):

```
https://<randam>.execute-api.ap-northeast-1.amazonaws.com/dev/trpc/greet
```
