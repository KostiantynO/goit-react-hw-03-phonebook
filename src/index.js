import { React, ReactDOM, ThemeProvider, theme } from 'common';
import 'index.css';
import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
