import Head from 'next/head';

interface SEOProps {
	title: string;
	description?: string;
}

const SEO = (props: SEOProps) => (
	<Head>
		<title>{props.title}</title>
		{props.description ? <meta name="description" content={props.description} /> : ''}
		<link rel="icon" type="image/x-icon" href="/favicon.png" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		{/* @ts-ignore */}
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap"
			rel="stylesheet"
		/>
	</Head>
);

export default SEO;
