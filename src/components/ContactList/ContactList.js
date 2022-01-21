import { PropTypes, Container } from 'common';
import { ContactItem } from 'components/ContactItem';
import { ContactListStyled } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <Container>
    <ContactListStyled>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactListStyled>
  </Container>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
