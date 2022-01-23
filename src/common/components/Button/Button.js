import PropTypes from 'prop-types';
import { ButtonStyled, ClearFilterButtonStyled } from './Button.styled';

export const Button = ({ ...props }) => <ButtonStyled {...props} />;

export const ClearFilterButton = ({ ...props }) => (
  <ClearFilterButtonStyled {...props} />
);

Button.propTypes = {
  type: PropTypes.string,
  display: PropTypes.string,
};

ClearFilterButton.propTypes = {
  type: PropTypes.string,
  display: PropTypes.string,
};
