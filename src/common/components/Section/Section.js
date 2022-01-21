import { Container, PropTypes } from 'common';
import { SectionStyled } from './Section.styled';
import { SectionTitle } from './SectionTitle';

export const Section = ({ title, h, children, ...props }) => (
  <SectionStyled h={h} {...props}>
    <Container>
      <SectionTitle title={title} h={h} />
    </Container>

    {children}
  </SectionStyled>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  h: PropTypes.string,
};
