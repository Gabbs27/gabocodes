import Head from 'next/head';
import React, { ReactNode } from 'react';
import Header from './header';
import './globals.css';

type LayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({ children, title = 'Default Title', description = 'Default description' }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        {/* Other tags for the HTML <head> go here */}
      </Head>
      <Header />
      <main role="main">{children}</main>
      <footer>
        {/* Footer content */}
      </footer>
    </>
  );
};

export default Layout;

