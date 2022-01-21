import { Component, PropTypes, Container, Button, Label, Input } from 'common';
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

    const newData = {
      name: form.elements.name.value.trim(),
      number: form.elements.number.value.trim(),
    };

    this.setState(newData, () => this.props.onSubmit(this.state));
    form.reset();
  };

  reset = () => this.setState(INITIAL_STATE);

  render() {
    return (
      <Container>
        <ContactFormStyled onSubmit={this.addContact}>
          <Label label="Name">
            <Input type="text" name="name" />
          </Label>

          <Label label="Number">
            <Input type="tel" name="number" />
          </Label>

          <Button type="submit">Add contact</Button>
        </ContactFormStyled>
      </Container>
    );
  }
}
