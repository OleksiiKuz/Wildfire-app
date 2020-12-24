import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { LocationIcon } from './components/LocationIcon';
import LocationInfoBox from './components/LocationInfoBox';



const Map = ({ eventData, center, zoom }) => {

	const [locationInfo, setLocationInfo] = useState(null)

	const marker = eventData.map(ev => {
		if (ev.categories[0].id === 8) {
			return <LocationIcon lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
				onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
		}
	})
	return (
		<div className='map'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyAw2pvq2yJefO2pANuXBQEh6FvUgiwFpFE' }}
				defaultCenter={center}
				defaultZoom={zoom}
				onClick={() => setLocationInfo(null)}>
				{marker}
			</GoogleMapReact>
			{locationInfo && <LocationInfoBox info={locationInfo} />}
		</div >
	)


}

Map.defaultProps = {
	center: {
		lat: 49.0,
		lng: 32.0
	},
	zoom: 6
}

export default Map;
