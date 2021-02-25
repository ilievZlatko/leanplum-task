import { ActionType } from '../action-types'
import { UserEntity } from '../../models/UserEntity'

interface loadingUserEntitiesAction {
	type: ActionType.LOADING_USER_ENTITIES
}

interface getUserEntitiesAction {
	type: ActionType.GET_ALL_USER_ENTITIES
	payload: UserEntity[]
}

interface getUserEntitiesErrorAction {
	type: ActionType.GET_USER_ENTITIES_ERROR
	payload: string
}

interface selectUserEntityAction {
	type: ActionType.SELECT_USER_ENTITY
	payload: UserEntity
}

export type Action =
	| loadingUserEntitiesAction
	| getUserEntitiesAction
	| getUserEntitiesErrorAction
	| selectUserEntityAction
