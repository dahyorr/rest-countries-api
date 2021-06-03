import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Dropdown from './Dropdown'
import { fetchAllCountries, fetchOnSearch, fetchOnRegion } from '../actions'

const options = [
	{ label: 'Filter By Region', value: '' },
	{ label: 'Africa', value: 'africa' },
	{ label: 'Americas', value: 'americas' },
	{ label: 'Asia', value: 'asia' },
	{ label: 'Europe', value: 'europe' },
	{ label: 'Oceania', value: 'oceania' },
]

const Search = ({
	fetchOnSearch,
	fetchAllCountries,
	fetchOnRegion,
	resetPage,
	searchTerm,
	updateSearch,
}) => {
	const [selected, setSelected] = useState(options[0])
	const [value, setValue] = useState(searchTerm)

	useEffect(() => {
		if (selected.value !== '') {
			fetchOnRegion(selected.value)
			resetPage()
		}
	}, [selected, fetchOnRegion, fetchAllCountries, resetPage])

	const onSubmit = e => {
		e.preventDefault()
		if (value.trim()) {
			updateSearch(value.trim())
			fetchOnSearch(value.trim())
			resetPage()
			setSelected(options[0])
		} else return null
	}
	const onChange = e => {
		setValue(e.target.value)
		if (e.target.value.trim() === '') fetchAllCountries()
	}
	return (
		<div className="Search">
			<div className="search-container">
				<i className="fas fa-search"></i>
				<form onSubmit={onSubmit}>
					<input
						type="text"
						placeholder="Search for a country..."
						value={value}
						onChange={onChange}
					/>
				</form>
			</div>
			<Dropdown
				onSelectedChange={setSelected}
				selected={selected}
				options={options}
				label={'FIlter By Region'}
			/>
		</div>
	)
}
export default connect(null, {
	fetchOnSearch,
	fetchAllCountries,
	fetchOnRegion,
})(Search)
