# monorepo-web-iac-example

このリポジトリは、複数のパッケージを monorepo 形式で管理するサンプルプロジェクトです。

## 概要
- **web**: Next.js を用いたフロントエンドアプリケーション
- **infra**: AWS CDK によるインフラストラクチャ管理、Lambda 関数などを含む
- **shared**: 各パッケージで共通利用する TypeScript ライブラリ

## ディレクトリ構成
```
monorepo-web-iac-example/
├── package.json
└── packages/
    ├── web/
    ├── infra/
    └── shared/
```

## セットアップ
1. リポジトリをクローン
2. ルートディレクトリで依存関係をインストール
   ```sh
   npm install
   ```
3. 各パッケージごとに必要なセットアップを実施

## 各パッケージの概要
- **web**: ユーザー向けの Web UI を提供
- **infra**: AWS リソースのデプロイや Lambda の管理
- **shared**: 共通ロジックや型定義を提供
