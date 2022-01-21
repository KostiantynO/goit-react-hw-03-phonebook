export const theme = Object.freeze({
  colors: {
    accent: '#2196F3',
    primary: '#212121',
    secondary: '#757575',
    black: '#000000',
    white: '#FFFFFF',
    teal: 'teal',
    cyan: '#E0FFFF',
    lighterGrey: '#EEEEEE',
    lightGrey: '#CCCCCC',
    darkBlue: '#3f56ae',
    lightSalad: '#CAFEBABE',
    darkGreen: '#4caf50',
    lightTeal: '#61dafb',
  },

  spacing: (...args) => args.map(v => `${v * 4}px`).join(' '),

  transition: (...args) =>
    `transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
     transition-property: ${args.join(', ')};`,

  zIndex: selector => {
    const els = ['ContactItemStyled::after', 'DeleteContactBtn'];
    for (let i = 0; i < els.length; i++) {
      if (selector === els[i].toLowerCase() || i === els.length) {
        return (i + 1) * 4;
      }
    }
  },
});
