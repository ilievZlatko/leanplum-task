import React from 'react'

import './InfoCard.scss'

interface Props {
	title: string
	content: string | React.ReactNode
}

const InfoCard: React.FC<Props> = ({ title, content, ...otherProps }) => {
	return (
		<div className='info-card' {...otherProps}>
			<h2 data-test='info-card-title' className='info-card__title'>
				{title}
			</h2>
			{typeof content === 'string' ? (
				<div data-test='info-card-content' className='info-card__content'>
					{content}
				</div>
			) : (
				<div data-test='info-card-content'>{content}</div>
			)}
		</div>
	)
}

export default InfoCard
