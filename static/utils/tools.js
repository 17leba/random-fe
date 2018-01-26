import Type from './type'

let extend = function(defaults, options) {
	let result = defaults || {}
	for (var i in options) {
		if (Type.isObject(options[i])) {
			result[i] = extend(result[i], options[i])
		} else {
			result[i] = options[i]
		}
	}
	return result
}

export default {
	extend
}