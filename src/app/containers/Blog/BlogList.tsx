import { Title } from '../HomePage/components/Title';
import React from 'react';
import styled from 'styled-components/macro';

export function BlogList() {
  return (
    <>
      <Title>Coming Soon</Title>
      <List></List>
    </>
  );
}
const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;
