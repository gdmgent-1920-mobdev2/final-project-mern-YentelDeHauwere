import { default as React } from 'react';
import { Navbar, Inputbox, Slider, SlideItem } from '../components';

const HomePage = () => {
	
  return (
	<div>
		<Inputbox/>

		<Navbar/>

		<Slider>
			<SlideItem id="slide-1"/>
			<SlideItem id="slide-2"/>
			<SlideItem id="slide-3"/>
		</Slider>

	</div>
  )
};

export default HomePage;