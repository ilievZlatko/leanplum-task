import React from 'react'

interface Props {
	title: string | React.ReactNode
	subtitle: string | React.ReactNode
}

const TitleSubtitle: React.FC<Props> = ({ title, subtitle, ...otherProps }) => {
	return (
		<div {...otherProps}>
			<h2 data-test='title' className='title'>
				{title}
			</h2>
			<span data-test='subtitle' className='subtitle'>
				{subtitle}
			</span>
		</div>
	)
}

export default TitleSubtitle
