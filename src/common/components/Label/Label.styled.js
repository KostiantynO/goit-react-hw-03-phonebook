import { styled } from 'common';

const T = ['radio', 'checkbox'];

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: ${({ type }) => T.every(v => v !== type) && 'column-reverse'};
  align-items: ${({ type }) => T.some(v => v === type) && 'center'};
  gap: ${({ theme }) => theme.spacing(3)};

  padding: ${({ type }) =>
    type !== 'textarea' &&
    `clamp(0px, 1vw, 8px) clamp(4px, 1vw, 8px) clamp(0px, 1vw, 8px) clamp(0px, 1vw, 4px)`};

  border: ${({ type, theme }) =>
    type === 'radio' && `1px solid ${theme.colors.lighterGrey}`};

  border-radius: ${({ theme }) => theme.spacing(1)};

  > input,
  > textarea {
    width: ${({ type }) => T.every(v => v !== type) && '100%'};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.spacing(1)};
  }

  > textarea {
    max-width: 100%;
    min-height: 2.1rem;
    max-height: 5rem;
    resize: vertical;
  }
`;
