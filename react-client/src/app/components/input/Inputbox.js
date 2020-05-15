import { default as React } from 'react';

import './Inputbox.scss'

const Inputbox = ({ placeholder, type }) => {

  return (
	  <input type={type} className="inputbox" placeholder={placeholder} >
		  
	  </input>
  );

};

export default Inputbox;