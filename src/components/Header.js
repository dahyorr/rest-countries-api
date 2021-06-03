import { connect } from 'react-redux'
import { toggleTheme } from '../actions'

const Header = ({ theme, toggleTheme }) => {
	return (
		<div className="Header">
			<div className="container">
				<p className="brand">Where in the world</p>
				<div
					className="theme-selector"
					onClick={() => toggleTheme(theme)}
				>
					{theme === 'dark' ? (
						<>
							<i className="far fa-moon"></i> Dark Mode
						</>
					) : (
						<>
							<i className="far fa-sun"></i> Light Mode
						</>
					)}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = ({ theme }) => ({
	theme,
})

export default connect(mapStateToProps, { toggleTheme })(Header)
