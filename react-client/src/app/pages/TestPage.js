import { default as React} from 'react';
import { AiFillStar, AiOutlineInfoCircle, AiOutlineScan  } from "react-icons/ai";
import { GiBatteryPack } from "react-icons/gi";
import { MdLocationOn  } from "react-icons/md";
import { TiLocationArrowOutline  } from "react-icons/ti";

const TestPage = () => {
	
  return (
	<div className="slider">
		<div className="slide" id="slide-1">

			<img className="slide-picture" src={require('../_static/images/longboard.png')} alt="ninestep" />

			<h4 className="slide-title">Ninestep <AiOutlineInfoCircle className="info" /></h4>
				
			<p className="slide-review"> 
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star" />

				(23)
			</p>

			<div className="slide-info">
				<div className="slide-info-battery">
					<p><GiBatteryPack className="battery" />74%</p>
					<p>3 uur</p>
				</div>
				<hr className="slide-info-divider"/>
				<div className="slide-info-location">
					<p><MdLocationOn className="location" />23 Leeuwenstraat</p>
					<p>1,9 km</p>
				</div>
			</div>

			<div className="slide-buttons">
				<button className="button-small outline "><TiLocationArrowOutline className="navigate" />Navigate</button>
				<button className="button-small fill"><AiOutlineScan className="scan" />Scan</button>
			</div>

		</div>



		<div className="slide" id="slide-3">

			<img className="slide-picture" src={require('../_static/images/longboard.png')} alt="ninestep" />

			<h4 className="slide-title">Ninestep <AiOutlineInfoCircle className="info" /></h4>
				
			<p className="slide-review"> 
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star" />

				(23)
			</p>

			<div className="slide-info">
				<div className="slide-info-battery">
					<p><GiBatteryPack className="battery" />74%</p>
					<p>3 uur</p>
				</div>
				<hr className="slide-info-divider"/>
				<div className="slide-info-location">
					<p><MdLocationOn className="location" />23 Leeuwenstraat</p>
					<p>1,9 km</p>
				</div>
			</div>

			<div className="slide-buttons">
				<button className="button-small outline "><TiLocationArrowOutline className="navigate" />Navigate</button>
				<button className="button-small fill"><AiOutlineScan className="scan" />Scan</button>
			</div>

		</div>


		<div className="slide" id="slide-1">

			<img className="slide-picture" src={require('../_static/images/longboard.png')} alt="ninestep" />

			<h4 className="slide-title">Ninestep <AiOutlineInfoCircle className="info" /></h4>
				
			<p className="slide-review"> 
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star checked" />
				<AiFillStar className="star" />

				(23)
			</p>

			<div className="slide-info">
				<div className="slide-info-battery">
					<p><GiBatteryPack className="battery" />74%</p>
					<p>3 uur</p>
				</div>
				<hr className="slide-info-divider"/>
				<div className="slide-info-location">
					<p><MdLocationOn className="location" />23 Leeuwenstraat</p>
					<p>1,9 km</p>
				</div>
			</div>

			<div className="slide-buttons">
				<button className="button-small outline "><TiLocationArrowOutline className="navigate" />Navigate</button>
				<button className="button-small fill"><AiOutlineScan className="scan" />Scan</button>
			</div>

		</div>



	</div>
  )
};

export default TestPage;