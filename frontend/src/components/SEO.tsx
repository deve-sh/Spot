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
	</Head>
);

export default SEO;
