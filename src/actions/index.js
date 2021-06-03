import {
	THEME_CHANGE,
	FETCH_ALL_COUNTRIES,
	FETCH_SEARCH,
	FETCH_REGION,
	SET_DISPLAY,
	RESET_DISPLAY,
} from './types'
import api from '../api/restCountries'

export const toggleTheme = theme => {
	if (theme === 'light') {
		localStorage.setItem('theme', 'dark')
		return {
			type: THEME_CHANGE,
			payload: 'dark',
		}
	} else {
		localStorage.setItem('theme', 'light')
		return {
			type: THEME_CHANGE,
			payload: 'light',
		}
	}
}

export const fetchAllCountries = () => async dispatch => {
	const response = await api.get('/all')
	dispatch({
		type: FETCH_ALL_COUNTRIES,
		payload: response.data.map(country => ({
			...country,
			population: country.population
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
		})),
	})
}

export const fetchOnSearch = text => async dispatch => {
	const query = text.split(' ').join('%20')
	try {
		const response = await api.get(`/name/${query}`)
		dispatch({
			type: FETCH_SEARCH,
			payload: response.data.map(country => ({
				...country,
				population: country.population
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
			})),
		})
	} catch (err) {
		dispatch({
			type: FETCH_SEARCH,
			payload: [],
		})
	}
}
export const fetchOnRegion = region => async dispatch => {
	const response = await api.get(`/region/${region}`)
	dispatch({
		type: FETCH_REGION,
		payload: response.data.map(country => ({
			...country,
			population: country.population
				.toString()
				.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
		})),
	})
}

export const setDetailsData = data => ({
	type: SET_DISPLAY,
	payload: data,
})

export const resetDetailsData = () => ({
	type: RESET_DISPLAY,
})
