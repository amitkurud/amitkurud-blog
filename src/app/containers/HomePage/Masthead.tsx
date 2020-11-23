import React from 'react';
import styled from 'styled-components/macro';
import { Logos } from './Logos';
import { Title } from 'app/containers/HomePage/components/Title';
import { Lead } from 'app/containers/HomePage/components/Lead';

export function Masthead() {
  return (
    <Wrapper>
      <Logos />
      <Title>Amit Kurud</Title>
      <Lead>
        Hi there, my name is Amit Kurud. I am a Software Engineer located in
        <strong> Hyderabad, India</strong>. I work as a{' '}
        <strong> Fullstack Software Engineer</strong> . I program in a variety
        of languages but most of the time I use
        <strong> Java</strong> to accomplish my task. I also work with{' '}
        <strong>
          {' '}
          Typescript, Kotlin, NodeJS, ReactJS, NestJS Framework, Spring-Boot
          Framework
        </strong>
        . My focus is on writing clean and maintainable software. I'm very eager
        to learn, in my free time I read about various topics ranging from
        writing clean code to specific frameworks/programming languages. I also
        contribute to the opensource community in our organisation and on
        Github, run a linux desktop at home and love to chat about tech in
        general.
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
