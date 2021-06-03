import CountryItem from './CountryItem'

const CountryList = ({ countries, currentPage, displayDetails }) => {
	const renderCountries = () =>
		countries
			.slice(currentPage * 8 - 8, currentPage * 8)
			.map((country, index) => (
				<CountryItem
					key={index}
					countryData={country}
					displayDetails={displayDetails}
				/>
			))
	if (countries.length < 1) {
		return <div className="CountryList">No Country Found</div>
	} else return <div className="CountryList">{renderCountries()}</div>
}

export default CountryList
