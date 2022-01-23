import { PropTypes } from 'common';
import { ContactItemStyled, DeleteContactBtn } from './ContactItem.styled';

import { AiOutlineClose } from 'react-icons/ai';

export const ContactItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => (
  <ContactItemStyled>
    <span>{name}</span>&nbsp;<span>{number}</span>
    <DeleteContactBtn onClick={() => onDeleteContact(id)} display="if" round>
      <AiOutlineClose />
    </DeleteContactBtn>
  </ContactItemStyled>
);

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
