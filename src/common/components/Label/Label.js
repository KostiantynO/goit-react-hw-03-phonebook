import { PropTypes } from 'common';
import { LabelStyled } from './Label.styled';

export const Label = ({ label, children, ...props }) => (
  <LabelStyled {...props}>
    {children}
    <span>{label}</span>
  </LabelStyled>
);

Label.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};
