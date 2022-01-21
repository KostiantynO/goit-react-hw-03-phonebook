import { PropTypes } from 'common';
import { ContactItemStyled, DeleteContactBtn } from './ContactItem.styled';

export const ContactItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => (
  <ContactItemStyled>
    <span>{name}</span>&nbsp;<span>{number}</span>
    <DeleteContactBtn onClick={() => onDeleteContact(id)} display="if" round>
      X
    </DeleteContactBtn>
  </ContactItemStyled>
);

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
