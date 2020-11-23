import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from '../NavBar';
import { Masthead } from './Masthead';
import { PageWrapper } from 'app/components/PageWrapper';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Amit Kurud's Blog" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Masthead />
        {/*<Features />*/}
      </PageWrapper>
    </>
  );
}
