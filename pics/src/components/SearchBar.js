import React, { Component } from 'react';

class SearchBar extends Component {

	onInputChange(event){

	}

	render() {
		return (
			<div className="ui segment">
				<from className="ui form">
				<div className="field">
				<lable>Image Search</lable>
						<input type="text" onChange={this.onInputChange}/>
				</div>
				</from>
			</div>
		);
	}
}

export default SearchBar;
