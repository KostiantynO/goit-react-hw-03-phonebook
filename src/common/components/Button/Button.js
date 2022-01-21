import { ButtonStyled, ClearFilterButtonStyled } from './Button.styled';

export const Button = ({ ...props }) => <ButtonStyled {...props} />;

export const ClearFilterButton = ({ ...props }) => (
  <ClearFilterButtonStyled {...props} />
);
