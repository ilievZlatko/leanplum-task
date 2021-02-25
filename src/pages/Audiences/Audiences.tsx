import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { SideMenu, TitleSubtitle, InfoCard } from '../../components'
import { actionCreators } from '../../store'
import { UserEntity } from '../../models/UserEntity'

import './Audiences.scss'

const Audiences = () => {
	const [attributes, setAttributes] = useState<Record<string, any>>([])
	const dispatch = useDispatch()
	const { selectedUserEntity, data } = useTypedSelector(
		state => state.userEntities,
	)

	console.log(JSON.stringify(data))

	useEffect(() => {
		dispatch(actionCreators.getUserEntities())
	}, [dispatch])

	useEffect(() => {
		if (selectedUserEntity) {
			setAttributes(Object.entries(selectedUserEntity.attributes))
		}
	}, [selectedUserEntity])

	const handleUserSelect = (user: UserEntity) => {
		dispatch(actionCreators.selectUserEntity(user))
	}

	const generateDateString = (timestamp: number, location: string): string => {
		const date = new Date(timestamp)
		const month = date.toLocaleString('en-US', { month: 'long' })
		const day = date.toLocaleString('en-US', { day: 'numeric' })
		const year = date.toLocaleString('en-US', { year: 'numeric' })
		const time = date.toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		})

		return `${month} ${day}, ${year}, ${time} - ${location}`
	}

	return (
		<div>
			<SideMenu>
				{data.map(item => (
					<SideMenu.SideMenuItem
						key={item.id}
						user={item}
						onClick={handleUserSelect}
						active={selectedUserEntity && selectedUserEntity.id === item.id}
					/>
				))}
			</SideMenu>

			{selectedUserEntity && (
				<div className='audience-content-container'>
					<TitleSubtitle
						title={selectedUserEntity.id}
						subtitle={generateDateString(
							selectedUserEntity.created,
							selectedUserEntity.location,
						)}
					/>

					<div className='audience-cards-container'>
						<InfoCard
							title='Devices'
							content={`${selectedUserEntity.devices}`}
						/>
						<InfoCard
							title='Sessions'
							content={`${selectedUserEntity.sessions.length}`}
						/>
						<InfoCard title='Events' content={`${selectedUserEntity.events}`} />
					</div>

					<div className='audience-table-container'>
						<table>
							<thead>
								<tr>
									<th>Attribute</th>
									<th>Value</th>
								</tr>
							</thead>
							<tbody>
								{attributes.map((item: string) => (
									<tr key={item[0]}>
										<td>{item[0]}</td>
										<td>{item[1]}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</div>
	)
}

export default Audiences
