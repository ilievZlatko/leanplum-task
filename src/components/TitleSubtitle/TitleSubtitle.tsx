import React from 'react'

interface Props {
	title: string | React.ReactNode
	subtitle: string | React.ReactNode
}

const TitleSubtitle: React.FC<Props> = ({ title, subtitle }) => {
	return (
		<div>
			<h2 className='title'>{title}</h2>
			<span className='subtitle'>{subtitle}</span>
		</div>
	)
}

export default TitleSubtitle
