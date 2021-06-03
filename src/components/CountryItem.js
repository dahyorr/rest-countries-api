import { connect } from 'react-redux'
import { setDetailsData } from '../actions'

const CountryItem = ({ countryData, setDetailsData, displayDetails }) => {
	const onItemClick = e => {
		setDetailsData(countryData)
		displayDetails(true)
	}
	return (
		<div className="CountryItem" onClick={onItemClick}>
			<div className="img-container">
				<img src={countryData.flag} alt="" />
			</div>
			<div className="content">
				<p className="name">{countryData.name}</p>
				<p>
					<span className="bold">Population: </span>
					{countryData.population}
				</p>
				<p>
					<span className="bold">Region: </span>
					{countryData.region}
				</p>
				<p>
					<span className="bold">Capital: </span>
					{countryData.capital}
				</p>
			</div>
		</div>
	)
}
export default connect(null, { setDetailsData })(CountryItem)
