import React from 'react';
import styled from 'styled-components/macro';
import tw from 'twin.macro';

export function Logo() {
  return (
    <Wrapper>
      <Title>Amit Kurud's Blog</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
  ${tw`font-sans`}
`;
