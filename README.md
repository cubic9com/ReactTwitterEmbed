# Overview

A simple React component for embedding a post from **X (formerly known as Twitter)** into a [Docusaurus](https://docusaurus.io/) site using [`postscribe`](https://github.com/krux/postscribe).  

\[日本語\]

[`postscribe`](https://github.com/krux/postscribe)を使用して、X（旧称Twitter）の投稿を [Docusaurus](https://docusaurus.io/)サイトに埋め込むためのシンプルなReactコンポーネントです。


## Installation

1. install [`postscribe`](https://github.com/krux/postscribe) by npm.
    ```bash
    npm install postscribe
    ```
2. Create the following directory in your Docusaurus project. And copy the source code from this repository to the directory.
    ```
    src/
    └── components/
        └── ReactTwitterEmbed/
            ├── ReactTwitterEmbed.js
            └── index.js
    ```

\[日本語\]

1. npm [`postscribe`](https://github.com/krux/postscribe) をインストールする。
    ```bash
    npm install postscribe
    ```
2. Docusaurus プロジェクト内に以下のディレクトリを作成して、このリポジトリのソースコードをコピーする。
    ```
    src/
    └── components/
        └── ReactTwitterEmbed/
            ├── ReactTwitterEmbed.js
            └── index.js
    ```

## Usage

1. Import and use the component.

```jsx
import ReactTwitterEmbed from '@site/src/components/ReactTwitterEmbed';

<ReactTwitterEmbed url="https://twitter.com/cubic9com/status/1588353378098483202" />
```

\[日本語\]

1. コンポーネントをインポートして、使う。

````jsx
```mdx
import ReactTwitterEmbed from '@site/src/components/ReactTwitterEmbed';

<ReactTwitterEmbed url="https://twitter.com/cubic9com/status/1588353378098483202" />
```
````

## Props

|Prop|Type|Required|Description|
|---|---|---|---|
|url|string|✅|The URL of the X post|

\[日本語\]

|プロパティ|型|必須か否か|説明|
|---|---|---|---|
|url|string|✅|Xの投稿のURL|

## Notes

- This component uses `useEffect` and dynamic import to ensure that Twitter's embedding script (`widgets.js`) is only loaded and executed on the client side.  

- In Docusaurus, which uses React and supports server-side rendering (SSR) during static site generation, any code that relies on browser-specific objects (like `window`, `document`, or dynamic `<script>` injection) must not be executed on the server.  

- Attempting to embed Twitter content directly during SSR will result in errors or missing content in the generated HTML. Using `useEffect` ensures the embedding happens only after the page has been rendered in the browser.  

\[日本語\]

- このコンポーネントは`useEffect`と動的インポートを使用しており、Twitterの埋め込みスクリプト（`widgets.js`）がクライアントサイドでのみ読み込まれ実行されるようにしています。
- DocusaurusはReactベースであり、静的サイト生成時にサーバーサイドレンダリング（SSR）を行います。そのため、`window`や`document`のようなブラウザ固有のオブジェクトを利用するコードや、動的な`<script>`の挿入などはサーバーでは実行できません。
- SSRの段階でTwitterのコンテンツを直接埋め込もうとすると、エラーが発生したり、生成されたHTMLに埋め込み内容が反映されなかったりします。`useEffect`を使うことで、ページがブラウザ上でレンダリングされた後に埋め込み処理が行われるようになります。
