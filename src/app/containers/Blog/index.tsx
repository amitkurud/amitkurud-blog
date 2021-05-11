import { Helmet } from 'react-helmet-async';
import React from 'react';
import { NavBar } from '../NavBar';
import { PageWrapper } from '../../components/PageWrapper';
import { BlogList } from './BlogList';

export function Blog() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Amit Kurud's Blog" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <BlogList />
      </PageWrapper>
    </>
  );
}
