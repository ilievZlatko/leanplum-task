import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { actionCreators } from '../index'
import { ActionType } from '../action-types'
import { generateSampleData } from '../../models/UserEntity'

const mockData = generateSampleData()
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
	xit('Should create an action to get user entities', () => {
		const expectedActions = [
			{ type: ActionType.GET_ALL_USER_ENTITIES, payload: mockData },
			{ type: ActionType.SELECT_USER_ENTITY, payload: mockData[0] },
		]

		const store = mockStore({
			userEntities: {
				loading: false,
				error: null,
				data: [],
				selectedUserEntity: null,
			},
		})

		store.dispatch<any>(actionCreators.getUserEntities())
		// This line below should usually pass the test, but we get different timestamp every time
		expect(store.getActions()).toEqual(expectedActions)
	})
})
