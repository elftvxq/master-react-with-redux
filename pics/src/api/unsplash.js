import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID I1XLhangTTcElexguuQByjnmOU0bcSZ7aqfifyyfXa0'
	}
})
