import axios from 'axios'
import qs from 'qs'
import Type from './type'
import tools from './tools'

let handleStatus = function(response) {
	let status = response.status
	if (status >= 200 && status < 300 || status === 304) {
		return response.data
	}
	throw new Error(response.status)
}

let get = async function(url, data, options) {
	let paraObj = {
		params: data
	}
	if (options && Type.isObject(options)) {
		paraObj = tools.extend(paraObj, options)
	}
	let response = await axios.get(url, paraObj)
	return handleStatus(response)
}

let post = async function(url, data, options = {}) {
	let response = await axios.post(url, qs.stringify(data), options)
	return handleStatus(response)
}

export default {
	get,
	post
}