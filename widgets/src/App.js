import React, { useState } from 'react'
import Accordion from './components/Accrodion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework'
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite javascript library among engineers'
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components'
	}
]

const options = [
	{
		lable: 'The Color Red',
		value: 'red'
	},
	{
		lable: 'The Color Green',
		value: 'green'
	},
	{
		lable: 'A shade of Blue',
		value: 'blue'
	}
]

export default () => {
	const [selected, setSelected] = useState(options[0])
	const [showDropdown, setShowDropdown] = useState(true)

	return (
		<div>
			<button onClick={() => { setShowDropdown(!showDropdown) }}>Toggle Dropdown</button>
			{showDropdown ?
				<Dropdown
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				/> : null}
		</div>
	)
}
