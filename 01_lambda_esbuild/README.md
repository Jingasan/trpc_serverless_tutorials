tRPC + lambda による API のサンプルです。
コードのビルドには esbuild を用い、バンドルとMinifyを行います。

## ビルド・デプロイ方法

```
$ npm install
$ npm build
$ npm deploy
```

## API 実行方法

API URL (API Gateway v2):

```
https://<randam>.execute-api.ap-northeast-1.amazonaws.com/greet
```

API URL (API Gateway v1):

```
https://<randam>.execute-api.ap-northeast-1.amazonaws.com/dev/greet
```
