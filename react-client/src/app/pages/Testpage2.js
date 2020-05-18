import { default as React} from 'react';
import { Slider, SlideItem } from '../components';

const TestPage2 = () => {
	
  return (
	<Slider>
		<SlideItem id="slide-1" />
		<SlideItem id="slide-2"/>
		<SlideItem id="slide-3"/>
	</Slider>
  )
};

export default TestPage2;