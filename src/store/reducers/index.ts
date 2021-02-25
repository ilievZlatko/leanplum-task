import { combineReducers } from 'redux'
import userEntitiesReducer from './userEntitiesReducer'

const reducers = combineReducers({
	userEntities: userEntitiesReducer,
})

export default reducers

export type RootState = ReturnType<typeof reducers>
