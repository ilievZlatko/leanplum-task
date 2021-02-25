import React from 'react'
import { shallow } from 'enzyme'

export const componentSanityCheck = (
	label: string,
	Element: React.ReactElement,
) =>
	describe(`Sanity checks for ${label}`, () => {
		it('is defined', () => {
			expect(Element).toBeDefined()
		})

		it('renders the element', () => {
			const wrapper = shallow(Element)
			const expected = false
			const actual = wrapper.isEmptyRender()
			expect(expected).toEqual(actual)
		})

		it('matches the snapshot', () => {
			const wrapper = shallow(Element)
			const expected = wrapper.html()
			expect(expected).toMatchSnapshot()
		})
	})
