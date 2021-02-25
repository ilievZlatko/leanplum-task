import React, { Children } from 'react'

import SideMenuItem from './SideMenuItem/SideMenuItem'
import { TitleSubtitle } from '../../components'
import './SideMenu.scss'

interface Props {
	children: React.ReactNode
}

const SideMenu = ({ children, ...otherProps }: Props) => {
	const count = Children.count(children)

	return (
		<div className='side-menu' {...otherProps}>
			<div className='side-menu__title'>
				<TitleSubtitle
					title='Users in Audience'
					subtitle={`Total Users - Showing ${count} matching users`}
				/>
			</div>

			<div className='side-menu__items-container'>
				{React.Children.map(children, child => {
					if (!child)
						throw new Error(
							'SideMenu Component needs child elements of type SideMenuItem in order to be used!',
						)

					if (
						React.isValidElement(child) &&
						(child as React.ReactElement).type === SideMenuItem
					) {
						return child
					} else {
						throw new Error(
							'SideMenu Component can only accept child elements of type SideMenuItem',
						)
					}
				})}
			</div>
		</div>
	)
}

SideMenu.SideMenuItem = SideMenuItem

export default SideMenu
