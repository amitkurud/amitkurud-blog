import React from 'react';
import styled from 'styled-components/macro';
import { Title } from 'app/containers/HomePage/components/Title';
import { Lead } from './components/Lead';
import { SubTitle } from 'app/containers/HomePage/components/SubTitle';
import { P } from './components/P';
import { ReactComponent as CodeAnalysisIcon } from './assets/code-analysis.svg';

export function Features() {
  return (
    <>
      <Title as="h2">Features</Title>
      <Lead>
        Crafted for <strong>highly scalable</strong>,{' '}
        <strong>easily maintainable</strong> and{' '}
        <strong>highly performant</strong> React.js applications with a focus on{' '}
        <strong>best DX</strong> and <strong>best practices</strong>.
      </Lead>
      <List>
        <Feature>
          <CodeAnalysisIcon className="feature-icon" />
          <Content>
            <SubTitle>Static Code Analysis</SubTitle>
            <P>
              Focus on writing new features without worrying about formatting or
              code quality. With the right editor setup, your code will
              automatically be formatted and linted as you work.
            </P>
          </Content>
        </Feature>
      </List>
    </>
  );
}

const Feature = styled.li`
  display: flex;
  margin: 6.25rem 0 6.25rem 2.25rem;

  .feature-icon {
    width: 6.25rem;
    height: 6.25rem;
    margin-right: 2.25rem;
    flex-shrink: 0;
  }
`;
const Content = styled.div`
  flex: 1;
`;

const List = styled.ul`
  padding: 0;
  margin: 6.25rem 0 0 0;
`;
