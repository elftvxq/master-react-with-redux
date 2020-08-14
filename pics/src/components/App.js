import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'

class App extends Component {

	onSearchSubmit(term) {
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID I1XLhangTTcElexguuQByjnmOU0bcSZ7aqfifyyfXa0'
			}
		})
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		)
	}
}

export default App
