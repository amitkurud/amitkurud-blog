import React from 'react';
import styled from 'styled-components/macro';
import { Logos } from './Logos';
import { Lead } from 'app/containers/HomePage/components/Lead';
import tw from 'twin.macro';

export function Masthead() {
  return (
    <Wrapper>
      <Logos />
      {/*
      <Title>Amit Kurud</Title>
*/}
      <Lead>
        Hello there
        <span role="img" aria-label="hand-wave">
          👋
        </span>
        , my name is <strong> Amit Kurud</strong>. I am a Software Engineer
        located in
        <strong> Hyderabad, India</strong>. I work as a{' '}
        <strong> Fullstack Software Engineer</strong>. I program in a variety of
        languages but most of the time I use
        <strong> Java</strong> to accomplish my task. I also work with{' '}
        <strong>
          {' '}
          Typescript, Kotlin, NodeJS, ReactJS, NestJS Framework, Spring-Boot
          Framework
        </strong>
        . My focus is on writing clean and maintainable software. I'm very eager
        to learn, in my free time I read about various topics ranging from
        writing clean code to specific frameworks/programming languages. I also
        contribute to the opensource community in our organization and on
        Github, run a Linux desktop at home, and love to chat about tech in
        general.
        <br />
        <P title="Github Page">
          <strong>
            <a href="blog" rel="noopener noreferrer">
              Please Feel Free to Read My Blog
            </a>
          </strong>
        </P>
      </Lead>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 320px;
  margin-bottom: 2rem;
`;
const P = styled.p`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  ${tw`text-center font-sans text-2xl`}
`;
