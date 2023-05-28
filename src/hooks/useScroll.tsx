import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'

const useScroll = () => {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const setScrollPosition = () => setScrollY(window.scrollY)
		window.addEventListener('scroll', setScrollPosition)
		return () => window.removeEventListener('scroll', setScrollPosition)
	}, [])

	return { scrollY }
}

export default useScroll
