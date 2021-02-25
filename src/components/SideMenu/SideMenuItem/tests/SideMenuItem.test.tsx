import React from 'react'
import { shallow } from 'enzyme'

import SideMenuItem from '../SideMenuItem'
import { componentSanityCheck } from '../../../../testUtils/componentSanityCheck'
import { users } from '../../tests/mocks'
import { findByTestAttr } from '../../../../testUtils/helpers'

describe('SideMenuItem', () => {
	componentSanityCheck(
		'SideMenuItem',
		<SideMenuItem user={users[0]} active={false} onClick={jest.fn()} />,
	)

	it('Should respond to click events, and pass the correct info back', (done: jest.DoneCallback) => {
		const onClick = jest.fn()
		const expectedEvent = users[4]

		const wrapper = shallow(
			<SideMenuItem user={users[4]} active={true} onClick={onClick} />,
		)
		const item = findByTestAttr(wrapper, 'menu-item')

		item.simulate('click')

		expect(onClick).toHaveBeenCalledWith(expectedEvent)
		done()
	})

	it('Should be marked as active if active property is set to true', (done: jest.DoneCallback) => {
		const wrapperActive = shallow(
			<SideMenuItem user={users[3]} active={true} onClick={jest.fn()} />,
		)

		const wrapperInactive = shallow(
			<SideMenuItem user={users[3]} active={false} onClick={jest.fn()} />,
		)

		expect(wrapperActive.hasClass('menu-item')).toEqual(true)
		expect(wrapperActive.hasClass('menu-item__active')).toEqual(true)
		expect(wrapperInactive.hasClass('menu-item')).toEqual(true)
		expect(wrapperInactive.hasClass('menu-item__active')).toEqual(false)
		done()
	})
})
