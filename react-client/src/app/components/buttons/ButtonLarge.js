import { default as React } from 'react';

import './ButtonLarge.scss'

const ButtonLarge = ({ content }) => {

  return (
	  <button className="btn btn-lg btn-primary btn-block button-large" type="submit"> { content } </button>
  );

};

export default ButtonLarge;