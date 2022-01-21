import { PropTypes } from 'common';

export const CustomTitle = ({ title, h = '2', ...props }) => {
  // prettier-ignore
  switch (h) {
    case '1': return (<h1 {...props}> <span>{title}</span> </h1>);
    case '3': return (<h3 {...props}> <span>{title}</span> </h3>);
    default : return (<h2 {...props}> <span>{title}</span> </h2>);
  }
};

CustomTitle.protoTypes = {
  title: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
};
