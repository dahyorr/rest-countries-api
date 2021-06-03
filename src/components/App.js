import React from 'react'
import { connect } from 'react-redux'
import { fetchAllCountries } from '../actions'
import '../style/theme.scss'
import '../style/main.css'
import Header from './Header'
import Home from './Home'
import Details from './Details'

class App extends React.Component {
	componentDidMount() {
		this.props.fetchAllCountries()
	}
	state = { currentPage: 1, displayDetails: false, searchTerm: '' }

	updatePage = page => {
		this.setState({
			currentPage: page,
		})
	}

	resetPage = () => {
		this.updatePage(1)
	}

	displayDetails = option => {
		this.setState({
			displayDetails: option,
		})
	}

	updateSearch = term => {
		this.setState({
			searchTerm: term,
		})
	}

	render() {
		return (
			<div className={`App ${this.props.theme}`}>
				<Header />
				<div className="container">
					{this.state.displayDetails ? (
						<Details displayDetails={this.displayDetails} />
					) : (
						<Home
							resetPage={this.resetPage}
							countries={this.props.countries}
							currentPage={this.state.currentPage}
							pages={Math.ceil(this.props.countries.length / 8)}
							updatePage={this.updatePage}
							updateSearch={this.updateSearch}
							searchTerm={this.state.searchTerm}
							displayDetails={this.displayDetails}
						/>
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ theme, data }) => ({ theme, countries: data })

export default connect(mapStateToProps, { fetchAllCountries })(App)
