import { default as React} from 'react';
import { ButtonLarge } from '../components'

const WelcomePage = () => {

  return (
	  <div>
		<div className="welcome-background"></div>
		<div className="welcome-content">	
			<ButtonLarge content="Get Started" />
		</div>
	</div>
  );
};

export default WelcomePage;