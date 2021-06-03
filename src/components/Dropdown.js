import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {
	const [open, setOpen] = useState(false)
	const ref = useRef()

	useEffect(() => {
		const onBodyClick = event => {
			if (ref.current && ref.current.contains(event.target)) {
				return
			}
			setOpen(false)
		}
		document.body.addEventListener('click', onBodyClick, { capture: true })
		return () => {
			document.body.removeEventListener('click', onBodyClick)
		}
	}, [])

	const renderedOptions = options.map(option => {
		if (selected.value !== option.value) {
			return (
				<div
					key={option.value}
					className={'dropdown-item'}
					onClick={() => {
						onSelectedChange(option)
					}}
				>
					{option.label}
				</div>
			)
		} else {
			return null
		}
	})
	return (
		<div ref={ref} className="Dropdown">
			<div
				onClick={() => setOpen(!open)}
				className={'dropdown-container'}
			>
				<div className="display">
					<div className="text">{selected.label}</div>
					<i className="fas fa-chevron-down"></i>
				</div>
				<div className={`dropdown-menu  ${open ? 'show' : 'hide'}`}>
					{renderedOptions}
				</div>
			</div>
		</div>
	)
}
export default Dropdown
