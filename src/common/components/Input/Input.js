import PropTypes from 'prop-types';
import { InputStyled } from './Input.styled';

export const Input = ({ ...props }) => <InputStyled {...props} />;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  isRequired: PropTypes.bool,
};
