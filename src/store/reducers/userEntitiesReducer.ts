import { ActionType } from '../action-types'
import { Action } from '../actions'
import { UserEntity } from '../../models/UserEntity'

interface RepositoriesState {
	loading: boolean
	error: string | null
	data: UserEntity[]
	selectedUserEntity: UserEntity | null
}

const initialState = {
	loading: false,
	error: null,
	data: [],
	selectedUserEntity: null,
}

const reducer = (
	state: RepositoriesState = initialState,
	action: Action,
): RepositoriesState => {
	switch (action.type) {
		case ActionType.LOADING_USER_ENTITIES:
			return { ...state, loading: true, error: null, data: [] }
		case ActionType.GET_ALL_USER_ENTITIES:
			return { ...state, loading: false, error: null, data: action.payload }
		case ActionType.GET_USER_ENTITIES_ERROR:
			return { ...state, loading: false, error: action.payload, data: [] }
		case ActionType.SELECT_USER_ENTITY:
			return { ...state, selectedUserEntity: action.payload }
		default:
			return state
	}
}

export default reducer
