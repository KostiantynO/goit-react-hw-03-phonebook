import { Component, PropTypes, Container, Button, Label, Input } from 'common';
import { toast } from 'react-toastify';
import { ContactFormStyled } from './ContactForm.styled';

const INITIAL_STATE = Object.freeze({ name: '', number: '' });

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  addContact = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const newContact = {
      name: form.elements.name.value.trim(),
      number: form.elements.number.value.trim(),
    };

    if (newContact.name.length === 0 || newContact.number.length === 0) {
      return toast.error('Please enter all fields');
    }

    this.setState(newContact, () => this.props.onSubmit(this.state));
    form.reset();
  };

  reset = () => this.setState(INITIAL_STATE);

  render() {
    return (
      <Container>
        <ContactFormStyled onSubmit={this.addContact}>
          <Label label="Name">
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              isRequired
            />
          </Label>

          <Label label="Number">
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              isRequired
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </ContactFormStyled>
      </Container>
    );
  }
}
