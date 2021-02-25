import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'
import { generateSampleData, UserEntity } from '../../models/UserEntity'

export const getUserEntities = () => (dispatch: Dispatch<Action>) => {
	const data = generateSampleData()
	dispatch({
		type: ActionType.GET_ALL_USER_ENTITIES,
		payload: data,
	})
	dispatch({
		type: ActionType.SELECT_USER_ENTITY,
		payload: data[0],
	})
}

export const selectUserEntity = (user: UserEntity) => (
	dispatch: Dispatch<Action>,
) => {
	dispatch({
		type: ActionType.SELECT_USER_ENTITY,
		payload: user,
	})
}
