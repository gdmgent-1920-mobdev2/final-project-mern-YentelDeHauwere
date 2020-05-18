import { default as React } from 'react';
import './Slider.scss'

const Slider = ({children}) => {

  return (
	<div class="slider">
		{children}
	</div>
  );

};

export default Slider;