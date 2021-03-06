import React from 'react';
import styled from 'styled-components/macro';

export function Logos() {
  return (
    <Wrapper>
      <img className="logo" src="/my-avatar.png" alt="avatar" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.border};

  .logo {
    width: 8.5rem;
    height: 8.5rem;
  }

  .sign {
    width: 2rem;
    height: 2rem;
    margin: 0 2rem;
  }
`;
