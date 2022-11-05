import Head from 'next/head';

interface SEOProps {
	title: string;
	description?: string;
}

const SEO = (props: SEOProps) => (
	<Head>
		<title>{props.title}</title>
		{props.description ? <meta name="description" content={props.description} /> : ''}
	</Head>
);

export default SEO;
