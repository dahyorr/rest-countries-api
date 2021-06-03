import { connect } from 'react-redux'
import { resetDetailsData, setDetailsData } from '../actions'

const Details = ({ data, displayDetails, setDetailsData, allData }) => {
	let languages = ''
	let currencies = ''
	let topLevelDomain = ''
	data.topLevelDomain.map(item => (topLevelDomain += `${item}, `))
	data.currencies.map(({ name }) => (currencies += `${name}, `))
	data.languages.map(({ name }) => (languages += `${name}, `))

	const getBorderData = code => {
		const border = allData.find(country => country.alpha3Code === code)
		return border
	}

	return (
		<div className="Details">
			<div className="controls">
				<button onClick={() => displayDetails(false)}>
					<i className="fas fa-arrow-left"></i> Back
				</button>
			</div>
			<div className="content">
				<div className="img-container">
					<img src={data.flag} alt="" />
				</div>
				<div className="info">
					<div className="header">
						<p className="large-text">{data.name}</p>
					</div>

					<div className="info-content">
						<div className="info-left">
							<p>
								<span className="bold">Native Name:</span>{' '}
								{data.nativeName}
							</p>
							<p>
								<span className="bold">Population:</span>{' '}
								{data.population}
							</p>
							<p>
								<span className="bold">Region:</span>{' '}
								{data.region}
							</p>
							<p>
								<span className="bold">Sub Region:</span>{' '}
								{data.subregion}
							</p>
							<p>
								<span className="bold">Capital:</span>{' '}
								{data.capital}
							</p>
						</div>
						<div className="info-right">
							<p>
								<span className="bold">Top Level Domain:</span>{' '}
								{topLevelDomain.replace(/,\s*$/, '')}
							</p>
							<p>
								<span className="bold">Currencies:</span>{' '}
								{currencies.replace(/,\s*$/, '')}
							</p>
							<p>
								<span className="bold">Languages: </span>{' '}
								{languages.replace(/,\s*$/, '')}
							</p>
						</div>
					</div>

					<div className="country-buttons">
						<span className="bold">Border Countries: </span>
						{data.borders.map((border, index) => (
							<button
								key={index}
								onClick={() =>
									setDetailsData(getBorderData(border))
								}
							>
								{getBorderData(border).name}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = ({ detailsData, data }) => ({
	data: detailsData,
	allData: data,
})

export default connect(mapStateToProps, { resetDetailsData, setDetailsData })(
	Details
)
