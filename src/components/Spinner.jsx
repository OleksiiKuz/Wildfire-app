import React from 'react'

export const Spinner = () => {
	return (
		<div className='spinner'>
			<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
			<div className='spinner-text'>Завантаження активних пожеж</div>
		</div>

	)
}
