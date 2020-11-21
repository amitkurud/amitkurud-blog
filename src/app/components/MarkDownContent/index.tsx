import Markdown from 'markdown-to-jsx';
import React, { Component } from 'react';
import styled from 'styled-components/macro';

type MarkDownProps = {
  content: string;
};
export class MarkDownContent extends Component<MarkDownProps> {
  render() {
    return (
      <P>
        <Markdown>{this.props.content}</Markdown>
      </P>
    );
  }
}

const P = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${p => p.theme.textSecondary};
  margin: 0.625rem 0 1.5rem 0;
`;
