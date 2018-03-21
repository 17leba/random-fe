import axios from 'utils/curl'

async function isLogin(options = {}){
	return await axios.get('/api/user/is_login',options)
}
export default{
	isLogin
}