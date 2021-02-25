import React from 'react'
import { shallow } from 'enzyme'

import SideMenu from '../SideMenu'
import { componentSanityCheck } from '../../../testUtils/componentSanityCheck'
import { users } from './mocks'
import TitleSubtitle from '../../TitleSubtitle/TitleSubtitle'

describe('SideMenu', () => {
	componentSanityCheck(
		'SideMenu',
		<SideMenu>
			<SideMenu.SideMenuItem
				user={users[0]}
				onClick={jest.fn()}
				active={true}
			/>
			<SideMenu.SideMenuItem
				user={users[1]}
				onClick={jest.fn()}
				active={false}
			/>
			<SideMenu.SideMenuItem
				user={users[2]}
				onClick={jest.fn()}
				active={false}
			/>
		</SideMenu>,
	)

	it('Should display the correct title and subtitle', (done: jest.DoneCallback) => {
		const wrapper = shallow(
			<SideMenu>
				<SideMenu.SideMenuItem
					user={users[0]}
					onClick={jest.fn()}
					active={true}
				/>
				<SideMenu.SideMenuItem
					user={users[1]}
					onClick={jest.fn()}
					active={false}
				/>
				<SideMenu.SideMenuItem
					user={users[2]}
					onClick={jest.fn()}
					active={false}
				/>
			</SideMenu>,
		)

		const titleSection = wrapper.find(TitleSubtitle)

		expect(titleSection.prop('subtitle')).toEqual(
			'Total Users - Showing 3 matching users',
		)
		expect(wrapper.find(SideMenu.SideMenuItem)).toHaveLength(3)
		done()
	})
})
