import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const RootLayout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/_next/static/style.css" />
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
    {children}
  </div>
);

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
