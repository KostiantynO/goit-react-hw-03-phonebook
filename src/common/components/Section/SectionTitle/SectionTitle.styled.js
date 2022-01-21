import { styled } from 'common';
import { CustomTitle } from './CustomTitle';

export const SectionTitleStyled = styled(CustomTitle)`
  margin-bottom: clamp(28px, 2.1vw, 36px);
  font-size: ${({ h }) =>
    h === '1' ? 'clamp(2.1rem, 4vw, 3.1rem)' : 'clamp(1.5rem, 4vw, 2.1rem)'};
  transform: translateX(50%);
  color: ${({ theme }) => theme.colors.lightTeal};

  ${({ theme }) => theme.transition('transform')}

  > span {
    display: inline-block;
    transform: translateX(-50%);
    ${({ theme }) => theme.transition('transform')}
  }
`;
