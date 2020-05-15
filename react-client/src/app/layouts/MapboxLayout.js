import { default as React } from 'react';
import { useState } from 'react';

import ReactMapGL from 'react-map-gl'

import './MapboxLayout.scss';

const MapboxLayout = ({children}) => {

	const getCoords = (pos) => {
		setViewport({
			width: '100vw',
			height: '100vh',
			latitude: pos.coords.latitude,
			longitude: pos.coords.longitude,
			zoom: 12
		})
	}

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getCoords)
	} else {
		alert('Geolocation not supported by your browser')
	}

	const [viewport, setViewport] = useState ({
		width: '100vw',
		height: '100vh',
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 12
	});

	return (
		<div className="page">
			<div className="page-main">
				{children}
			</div>
		
			<div className="mapbox">
				<ReactMapGL
				mapboxApiAccessToken="pk.eyJ1IjoieWVudGVsZGVoYXV3ZXJlIiwiYSI6ImNrMmdjcjV3dTBhZ3AzZHBjY3QwbnFwMWUifQ.oEwwhTI8SVFUX_i3TKwMug"
				{...viewport}
				/>
			</div>
		</div>
	);
};

export default MapboxLayout;