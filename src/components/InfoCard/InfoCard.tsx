import React from 'react'

import './InfoCard.scss'

interface Props {
	title: string
	content: string
}

const InfoCard: React.FC<Props> = ({ title, content, ...otherProps }) => {
	return (
		<div className='info-card' {...otherProps}>
			<h2 className='info-card__title'>{title}</h2>
			<p className='info-card__content'>{content}</p>
		</div>
	)
}

export default InfoCard
