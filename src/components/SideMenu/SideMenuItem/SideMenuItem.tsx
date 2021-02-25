import React from 'react'
import { UserEntity } from '../../../models/UserEntity'
import { TitleSubtitle } from '../../../components'
import './SideMenuItem.scss'

interface Props {
	user: UserEntity
	active: boolean | null
	onClick: (user: UserEntity) => void
}

const SideMenuItem: React.FC<Props> = ({ user, active, onClick }) => {
	return (
		<aside
			className={['menu-item', active ? 'menu-item__active' : '']
				.join(' ')
				.trim()}
			onClick={() => onClick(user)}
		>
			<TitleSubtitle
				title={user.id}
				subtitle={
					<>
						<span>{user.devices} Devices - </span>
						<span>{user.sessions.length} Sessions - </span>
						<span>{user.location}</span>
					</>
				}
			/>
		</aside>
	)
}

export default SideMenuItem
