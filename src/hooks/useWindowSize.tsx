import { useEffect, useState } from 'react'

// types
type WindowSizeType = {
	width: number | undefined
	height: number | undefined
}

// useWindowSize hook
const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<WindowSizeType>({ width: undefined, height: undefined })
	useEffect(() => {
		function handleResize() {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight })
		}
		window.addEventListener('resize', handleResize)
		handleResize()
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return windowSize
}

export default useWindowSize
