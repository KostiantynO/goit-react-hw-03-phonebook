import { Component, nanoid, Section } from 'common';
import { ContactForm, ContactList, Filter } from 'components';
import { load, save } from 'storage';

import { AppStyled } from './App.styled';

const INITIAL_STATE = Object.freeze({
  contacts: [],
  filter: '',
});

const LS_KEY = 'phonebook-contacts';

export default class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const savedContacts = load(LS_KEY);

    if (savedContacts?.length > 0) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const oldContacts = prevState.contacts;
    const newContacts = this.state.contacts;

    if (newContacts !== oldContacts) {
      save(LS_KEY, newContacts?.length > 0 ? newContacts : []);
    }
  }

  changeFilter = e => this.setState({ filter: e.currentTarget.value });
  clearFilter = () => this.setState({ filter: '' });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    console.log('App ~ contacts', contacts);
    const normalizedFilter = filter.toLowerCase();

    if (contacts?.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }

    return [];
  };

  isSaved = newName => {
    const { contacts } = this.state;
    const normalizedNewName = newName.toLowerCase();

    const contact = contacts.find(
      ({ name }) => name.toLowerCase() === normalizedNewName
    );

    if (contact) {
      alert(`${contact.name} is already in the contacts`);
      return true;
    }
  };

  addContact = ({ name, number }) => {
    if (this.isSaved(name)) return;

    const contact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const contacts = this.getVisibleContacts();
    console.log('App ~ render ~ contacts', contacts);

    return (
      <AppStyled>
        <Section title="Phonebook" h="1">
          <ContactForm onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter
            value={filter}
            onChange={this.changeFilter}
            onClearFilter={this.clearFilter}
          />

          <ContactList
            contacts={contacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </AppStyled>
    );
  }
}
