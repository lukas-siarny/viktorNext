const CONFIG = {
	// number of salons is the number of images in /public/images/salons/[langID]
	numOfSalonsPerLang: {
		sk: 13,
		cs: 10
	},
	heroVideoSrc: {
		sk: 'https://dmrz39codqjlj.cloudfront.net/static/NP_Mood%20Video_SK.mp4',
		cs: 'https://dmrz39codqjlj.cloudfront.net/static/590_Notino_FINAL_CZ%20LANG%2006.mp4',
		bg: 'https://dmrz39codqjlj.cloudfront.net/static/NP_Mood%20Video_BG.mp4',
		hu: 'https://dmrz39codqjlj.cloudfront.net/static/NP_Mood%20Video_HU.mp4',
		ro: 'https://dmrz39codqjlj.cloudfront.net/static/NP_Mood%20Video_RO.mp4'
	},
	badgeAppStoreImageSrc: {
		sk: '/images/badges/badge-app-store-sk.png',
		cs: '/images/badges/badge-app-store-cz.png',
		bg: '/images/badges/badge-app-store-bg.png',
		hu: '/images/badges/badge-app-store-hu.png',
		ro: '/images/badges/badge-app-store-ro.png'
	},
	badgeGooglePlayImageSrc: {
		sk: '/images/badges/badge-google-play-sk.png',
		cs: '/images/badges/badge-google-play-cz.png',
		bg: '/images/badges/badge-google-play-bg.png',
		hu: '/images/badges/badge-google-play-hu.png',
		ro: '/images/badges/badge-google-play-ro.png'
	},
	notinoPartnerHref: {
		sk: 'https://partner.notino.com/signup',
		cs: 'https://partner.notino.com/signup',
		bg: 'https://partner.notino.com/signup',
		hu: 'https://partner.notino.com/signup',
		ro: 'https://partner.notino.com/signup',
	},
	benefitsImageSrc: {
		sk: ['/images/benefits/sk/benefits-mock-back-627x1276.webp', '/images/benefits/sk/benefits-mock-front-627x1276.webp'],
		cs: ['/images/benefits/cs/benefits-mock-back-627x1276.webp', '/images/benefits/cs/benefits-mock-front-627x1276.webp'],
		bg: ['/images/benefits/bg/benefits-mock-back-627x1276.webp', '/images/benefits/bg/benefits-mock-front-627x1276.webp'],
		hu: ['/images/benefits/hu/benefits-mock-back-627x1276.webp', '/images/benefits/hu/benefits-mock-front-627x1276.webp'],
		ro: ['/images/benefits/ro/benefits-mock-back-627x1276.webp', '/images/benefits/ro/benefits-mock-front-627x1276.webp']
	},
	reservationsImageSrc: {
		sk: ['/images/reservations/sk/reservations-mock-back-2048x1196.webp', '/images/reservations/sk/reservations-mock-front-489x995.webp'],
		cs: ['/images/reservations/cs/reservations-mock-back-2048x1196.webp', '/images/reservations/cs/reservations-mock-front-489x995.webp'],
		bg: ['/images/reservations/bg/reservations-mock-back-2048x1196.webp', '/images/reservations/bg/reservations-mock-front-489x995.webp'],
		hu: ['/images/reservations/hu/reservations-mock-back-2048x1196.webp', '/images/reservations/hu/reservations-mock-front-489x995.webp'],
		ro: ['/images/reservations/ro/reservations-mock-back-2048x1196.webp', '/images/reservations/ro/reservations-mock-front-489x995.webp']
	},
	howToImageSrc: {
		sk: {
			mobile: [
				'/images/howTo/sk/how-to-1-front-627x1276.webp',
				'/images/howTo/sk/how-to-2-front-627x1276.webp',
				'/images/howTo/sk/how-to-3-front-627x1276.webp'
			],
			front: [
				'/images/howTo/sk/how-to-1-front-bg-563x1220.webp',
				'/images/howTo/sk/how-to-2-front-bg-563x1220.webp',
				'/images/howTo/sk/how-to-3-front-bg-563x1220.webp'
			],
			back: [
				'/images/howTo/sk/how-to-1-back-627x1276.webp',
				'/images/howTo/sk/how-to-2-back-bg-1943x1213.webp',
				'/images/howTo/sk/how-to-3-back-bg-1943x1213.webp'
			]
		},
		cs: {
			mobile: [
				'/images/howTo/cs/how-to-1-front-627x1276.webp',
				'/images/howTo/cs/how-to-2-front-627x1276.webp',
				'/images/howTo/cs/how-to-3-front-627x1276.webp'
			],
			front: [
				'/images/howTo/cs/how-to-1-front-bg-563x1220.webp',
				'/images/howTo/cs/how-to-2-front-bg-563x1220.webp',
				'/images/howTo/cs/how-to-3-front-bg-563x1220.webp'
			],
			back: [
				'/images/howTo/cs/how-to-1-back-627x1276.webp',
				'/images/howTo/cs/how-to-2-back-bg-1943x1213.webp',
				'/images/howTo/cs/how-to-3-back-bg-1943x1213.webp'
			]
		},
		bg: {
			mobile: [
				'/images/howTo/bg/how-to-1-front-627x1276.webp',
				'/images/howTo/bg/how-to-2-front-627x1276.webp',
				'/images/howTo/bg/how-to-3-front-627x1276.webp'
			],
			front: [
				'/images/howTo/bg/how-to-1-front-bg-563x1220.webp',
				'/images/howTo/bg/how-to-2-front-bg-563x1220.webp',
				'/images/howTo/bg/how-to-3-front-bg-563x1220.webp'
			],
			back: [
				'/images/howTo/bg/how-to-1-back-627x1276.webp',
				'/images/howTo/bg/how-to-2-back-bg-1943x1213.webp',
				'/images/howTo/bg/how-to-3-back-bg-1943x1213.webp'
			]
		},
		hu: {
			mobile: [
				'/images/howTo/hu/how-to-1-front-627x1276.webp',
				'/images/howTo/hu/how-to-2-front-627x1276.webp',
				'/images/howTo/hu/how-to-3-front-627x1276.webp'
			],
			front: [
				'/images/howTo/hu/how-to-1-front-bg-563x1220.webp',
				'/images/howTo/hu/how-to-2-front-bg-563x1220.webp',
				'/images/howTo/hu/how-to-3-front-bg-563x1220.webp'
			],
			back: [
				'/images/howTo/hu/how-to-1-back-627x1276.webp',
				'/images/howTo/hu/how-to-2-back-bg-1943x1213.webp',
				'/images/howTo/hu/how-to-3-back-bg-1943x1213.webp'
			]
		},
		ro: {
			mobile: [
				'/images/howTo/ro/how-to-1-front-627x1276.webp',
				'/images/howTo/ro/how-to-2-front-627x1276.webp',
				'/images/howTo/ro/how-to-3-front-627x1276.webp'
			],
			front: [
				'/images/howTo/ro/how-to-1-front-bg-563x1220.webp',
				'/images/howTo/ro/how-to-2-front-bg-563x1220.webp',
				'/images/howTo/ro/how-to-3-front-bg-563x1220.webp'
			],
			back: [
				'/images/howTo/ro/how-to-1-back-627x1276.webp',
				'/images/howTo/ro/how-to-2-back-bg-1943x1213.webp',
				'/images/howTo/ro/how-to-3-back-bg-1943x1213.webp'
			]
		}
	}
}

export default CONFIG
