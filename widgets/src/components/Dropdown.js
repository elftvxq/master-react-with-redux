import React from 'react'

const Dropdown = ({ options, selected, onSelectedChange }) => {
	const renderedOptions = options.map((option) => {
		return (
			<div
				className="item"
				onClick={() => onSelectedChange(option)}
				key={option.value}>
				{option.lable}
			</div>
		)
	})
	return (
		<div className="ui form">
			<div className="field">
				<label className="label">Select a Color</label>
				<div className="ui selection dropdown visible active">
					<i className="dropdown icon"></i>
					<div className="text">{selected.lable}</div>
					<div className="menu visible transition">
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dropdown
