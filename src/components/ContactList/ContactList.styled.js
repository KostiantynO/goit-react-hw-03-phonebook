import { styled } from 'common';

export const ContactListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: clamp(16px, 2.1vw, 24px);
  width: 100%;
  max-width: ${({ theme }) => theme.spacing(380)};
  padding: ${({ theme }) => theme.spacing(8, 0)};
  margin: 0 auto;
`;
