import { styled, PropTypes } from 'common';

export const ButtonStyled = styled.button.attrs(({ type, display }) => ({
  type: type === 'submit' ? type : 'button',
  display: display === 'if' ? 'inline-flex' : 'flex',
}))`
  display: ${({ display }) => display};
  align-items: center;
  justify-content: center;

  white-space: nowrap;
  padding: clamp(4px, 2.1vw, 8px) clamp(12px, 2.1vw, 20px);

  font-family: inherit;
  font-size: clamp(1.1rem, 2.1vw, 1.5rem);
  color: ${({ theme }) => theme.colors.white};

  background: none;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border: none;
  border-radius: ${({ theme, round }) => (round ? '50%' : theme.spacing(1))};
  appearance: none;

  ${({ theme }) => theme.transition('color', 'background-color', 'transform')};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.03);
  }
`;

ButtonStyled.propTypes = {
  type: PropTypes.string,
  display: PropTypes.string,
};

export const ClearFilterButtonStyled = styled(ButtonStyled)`
  align-self: flex-end;
`;
