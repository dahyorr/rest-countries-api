import { combineReducers } from 'redux'
import {
	THEME_CHANGE,
	FETCH_ALL_COUNTRIES,
	FETCH_SEARCH,
	FETCH_REGION,
	SET_DISPLAY,
	RESET_DISPLAY,
} from '../actions/types'

const themeReducer = (
	state = localStorage.getItem('theme') || 'light',
	action
) => {
	switch (action.type) {
		case THEME_CHANGE:
			return action.payload
		default:
			return state
	}
}

const dataReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_ALL_COUNTRIES:
		case FETCH_SEARCH:
		case FETCH_REGION:
			return [...action.payload]
		default:
			return state
	}
}

const detailsData = (state = {}, action) => {
	switch (action.type) {
		case SET_DISPLAY:
			return { ...action.payload }
		case RESET_DISPLAY:
			return {}
		default:
			return state
	}
}

export default combineReducers({
	theme: themeReducer,
	data: dataReducer,
	detailsData,
})
