import { styled } from 'common';

export const SectionStyled = styled.section`
  padding: ${({ theme }) => theme.spacing(8, 0)};

  max-width: clamp(320px, 50vw, 600px);
`;
