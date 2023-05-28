import { useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'
import useScroll from './useScroll'
import { SECTIONS } from '../utils/enums'
import getWindow from '../utils/helpers'

const useActiveSection = () => {
	const [activeSection, setActiveSection] = useState('')
	const [isContent, setIsContent] = useState(false)

	const { scrollY } = useScroll()
	const { i18n } = useTranslation()

	const window = getWindow()
	if (!window) return undefined

	const sections = SECTIONS[i18n.language as keyof typeof SECTIONS]

	const partnersSection = document.querySelector<HTMLElement>(`#${sections.PARTNERS}`)
	const benefitsSection = document.querySelector<HTMLElement>(`#${sections.BENEFITS}`)
	const reservationSection = document.querySelector<HTMLElement>(`#${sections.RESERVATIONS}`)
	const howToSection = document.querySelector<HTMLElement>(`#${sections.HOWTO}`)
	const faqSection = document.querySelector<HTMLElement>(`#${sections.FAQ}`)

	const checkBorders = (section: HTMLElement) => scrollY + 10 >= section?.offsetTop && scrollY + 10 < section.offsetTop + section.offsetHeight
	const checkContent = () => (partnersSection && scrollY >= partnersSection?.offsetTop) ?? false

	useEffect(() => {
		setIsContent(checkContent())
		if (benefitsSection && checkBorders(benefitsSection)) return setActiveSection(sections.BENEFITS)
		if (reservationSection && checkBorders(reservationSection)) return setActiveSection(sections.RESERVATIONS)
		if (howToSection && checkBorders(howToSection)) return setActiveSection(sections.HOWTO)
		if (faqSection && checkBorders(faqSection)) return setActiveSection(sections.FAQ)
		return setActiveSection('')
	}, [scrollY])

	return { activeSection, isContent }
}

export default useActiveSection
