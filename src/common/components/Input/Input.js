import { InputStyled } from './Input.styled';

export const Input = ({ type, name, ...props }) => {
  const getPattern = (inputType, inputName) => {
    switch (inputType) {
      case 'tel':
        //prettier-ignore
        return "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}";

      case 'text':
        return inputName !== 'filter'
          ? "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          : '';

      default:
        return '';
    }
  };

  const getTitle = (inputType, inputName) => {
    switch (inputType) {
      case 'tel':
        return 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
      case 'text':
        return inputName !== 'filter'
          ? "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          : '';

      default:
        return '';
    }
  };

  const checkPattern = getPattern(type, name);
  const checkTitle = getTitle(type, name);

  return (
    <InputStyled
      {...props}
      type={type}
      name={name}
      pattern={checkPattern}
      title={checkTitle}
      required
    />
  );
};
