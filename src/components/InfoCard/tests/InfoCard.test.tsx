import React from 'react'
import { shallow } from 'enzyme'

import InfoCard from '../InfoCard'
import { componentSanityCheck } from '../../../testUtils/componentSanityCheck'
import { findByTestAttr } from '../../../testUtils/helpers'

describe('InfoCard', () => {
	componentSanityCheck(
		'InfoCard',
		<InfoCard title='test title' content='test content' />,
	)

	it('Should accept title and content of type ReactNode', (done: jest.DoneCallback) => {
		const wrapper = shallow(
			<InfoCard
				title='Info card title'
				content={
					<div>
						<span>line one</span>
						<span>line two</span>
					</div>
				}
			/>,
		)

		expect(wrapper.html()).toContain(
			'<div><span>line one</span><span>line two</span></div>',
		)
		done()
	})

	it('Should accept title and content of type string', (done: jest.DoneCallback) => {
		const wrapper = shallow(
			<InfoCard title='Info card title' content='Info card content' />,
		)
		const content = findByTestAttr(wrapper, 'info-card-content')

		expect(content.text()).toEqual('Info card content')
		done()
	})
})
