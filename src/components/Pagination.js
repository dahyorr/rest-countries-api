const Pagination = ({ pages, currentPage, updatePage }) => {
	const nextPage = () => {
		if (currentPage === pages) return null
		else updatePage(currentPage + 1)
	}
	const previousPage = () => {
		if (currentPage === 1) return null
		else updatePage(currentPage - 1)
	}
	if (pages > 1)
		return (
			<div className="Pagination">
				<div className="content">
					<button className="page" title="previous" onClick={previousPage}>
						<i className="fas fa-chevron-left"></i>
					</button>
					<button
						className={`page ${currentPage === 1 ? 'hide' : null}`}
						onClick={() => updatePage(1)}
					>
						1
					</button>
					<button
						className={`page ${currentPage < 3 ? 'hide' : null}`}
						onClick={() => updatePage(2)}
					>
						2
					</button>
					<button className="space page">{currentPage}</button>
					<button
						className={`page ${
							currentPage >= pages - 1 ? 'hide' : null
						}`}
						onClick={() => updatePage(pages - 1)}
					>
						{pages - 1}
					</button>
					<button
						className={`page ${
							currentPage === pages ? 'hide' : null
						}`}
						onClick={() => updatePage(pages)}
					>
						{pages}
					</button>
					<button title="next" className="page" onClick={nextPage}>
						<i className="fas fa-chevron-right"></i>
					</button>
				</div>
			</div>
		)
	else return null
}
export default Pagination
