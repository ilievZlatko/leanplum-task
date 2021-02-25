import { ShallowWrapper, ReactWrapper } from 'enzyme'

export const findByTestAttr = (
	component: ShallowWrapper | ReactWrapper | any,
	attr: string,
): ShallowWrapper | ReactWrapper => {
	return component.find(`[data-test='${attr}']`)
}
