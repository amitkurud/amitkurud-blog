import { Helmet } from 'react-helmet-async';
import React from 'react';
import { NavBar } from '../NavBar';
import { Features } from '../HomePage/Features';
import { PageWrapper } from '../../components/PageWrapper';

export function Blog() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Amit Kurud's Blog" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Features />
      </PageWrapper>
    </>
  );
}
