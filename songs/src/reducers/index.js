import { combineReducers } from 'redux'

const songReducer = () => {
	return [
		{ title: 'Go Crazy', duration: '3:15' },
		{ title: 'Wishing Well', duration: '4:07' },
		{ title: 'Nobodys Love', duration: '2:38' },
		{ title: 'I Want It in That Way', duration: '1:45' }
	]
}

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload
	}

	return selectedSong
}

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer
})
