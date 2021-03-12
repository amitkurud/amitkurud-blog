import React from 'react';
import styled from 'styled-components/macro';

export function BlogList() {
  return (
    <>
      <Center>Coming Soon</Center>
      <List></List>
    </>
  );
}


const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;
const Center = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: ${p => p.theme.text};
  margin: 1rem 0;
  text-align: center;
`;
