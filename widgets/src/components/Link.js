import React from 'react'

const Link = ({ className, href, children }) => {

	const onClick = (event) => {
		if (event.metaKey || event.ctrlKey) {
			return
		}
		event.preventDefault()
		window.history.pushState({}, '', href)

		// 使用目標對象去派發事件，可以是元素節點/事件對象
		const navEvent = new PopStateEvent('popstate')
		window.dispatchEvent(navEvent)
	}

	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	)
}

export default Link
