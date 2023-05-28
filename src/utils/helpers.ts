const getWindow = () => {
	if (typeof window !== 'undefined') {
		return window
	}
	return null
}

export default getWindow
