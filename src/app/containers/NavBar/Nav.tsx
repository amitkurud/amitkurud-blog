import React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';
import { ReactComponent as BlogIcon } from './assets/blog-icon.svg';
import { ReactComponent as HomeIcon } from './assets/home-button.svg';
import { ThemeSwitch } from '../ThemeSwitch';
import tw from 'twin.macro';

export function Nav() {
  return (
    <Wrapper>
      <Item href="/" title="Blog" rel="noopener noreferrer">
        <HomeIcon />
        <TextP>Home</TextP>
      </Item>
      <Item href="blog" title="Blog" rel="noopener noreferrer">
        <BlogIcon />
        Blog
      </Item>
      <Item
        href="https://github.com/amitkurud"
        target="_blank"
        title="Github Page"
        rel="noopener noreferrer"
      >
        <GithubIcon />
        Github
      </Item>
      <Item>
        <ThemeSwitch />
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const TextP = styled.p`
  ${tw`font-sans`}
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
