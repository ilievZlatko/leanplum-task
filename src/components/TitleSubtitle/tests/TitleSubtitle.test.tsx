import React from 'react'
import { shallow } from 'enzyme'

import TitleSubtitle from '../TitleSubtitle'
import { componentSanityCheck } from '../../../testUtils/componentSanityCheck'
import { findByTestAttr } from '../../../testUtils/helpers'

describe('TitleSubtitle', () => {
	componentSanityCheck(
		'TitleSubtitle',
		<TitleSubtitle title='test title' subtitle='test content' />,
	)

	it('Should accept title and subtitle of type ReactNode', (done: jest.DoneCallback) => {
		const wrapper = shallow(
			<TitleSubtitle
				title={<span>Title</span>}
				subtitle={<span>Subtitle</span>}
			/>,
		)

		expect(wrapper.html()).toContain('<span>Title</span>')
		expect(wrapper.html()).toContain('<span>Subtitle</span>')
		done()
	})

	it('Should accept title and subtitle of type string', (done: jest.DoneCallback) => {
		const wrapper = shallow(
			<TitleSubtitle title='Info title' subtitle='Info subtitle' />,
		)

		const title = findByTestAttr(wrapper, 'title')
		const subtitle = findByTestAttr(wrapper, 'subtitle')

		expect(title.text()).toEqual('Info title')
		expect(subtitle.text()).toEqual('Info subtitle')
		done()
	})
})
