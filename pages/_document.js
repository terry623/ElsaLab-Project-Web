import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Elsa Lab</title>
          {this.props.styleTags}
        </Head>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
          }
        `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
