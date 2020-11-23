import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const Lead = styled.p`
  ${tw`font-sans text-justify antialiased`}
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: ${p => p.theme.textSecondary};
  margin: 0 0 1.5rem 0;
  strong {
    color: ${p => p.theme.text};
  }
`;
