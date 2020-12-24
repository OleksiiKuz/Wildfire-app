import React from 'react'

const LocationInfoBox = ({ info }) => {
	return (
		<div className='location-info'>
			<h2>Location info title</h2>
			<ul>
				<li>ID:{info.id}</li>
				<li>TITLE:{info.title}</li>
			</ul>
		</div>
	)
}

export default LocationInfoBox;
