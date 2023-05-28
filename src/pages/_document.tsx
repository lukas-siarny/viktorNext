import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html className='scroll-smooth'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' rel='stylesheet' />
					<link
						href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Roboto:wght@400;500;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body className='bg-white font-body'>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
