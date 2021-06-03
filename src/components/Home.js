import Search from './Search'
import CountryList from './CountryList'
import Pagination from './Pagination'

const Home = ({
	resetPage,
	countries,
	currentPage,
	pages,
	updatePage,
	displayDetails,
	updateSearch,
	searchTerm,
}) => {
	return (
		<>
			<Search
				resetPage={resetPage}
				updateSearch={updateSearch}
				searchTerm={searchTerm}
			/>
			<CountryList
				countries={countries}
				currentPage={currentPage}
				displayDetails={displayDetails}
			/>
			<Pagination
				pages={pages}
				currentPage={currentPage}
				updatePage={updatePage}
			/>
		</>
	)
}
export default Home
