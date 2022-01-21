import { styled } from 'common';

export const ContactListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(16px, 2.1vw, 24px);
  max-width: ${({ theme }) => theme.spacing(380)};
  padding: ${({ theme }) => theme.spacing(8, 0)};
  margin: 0 auto;
`;
