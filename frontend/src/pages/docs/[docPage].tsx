import { readFileSync } from 'fs';
import type { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';

import Layout from 'components/Docs/Layout';
import SEO from 'components/SEO';
import CodeBlock from 'components/Docs/CodeBlock';

import docsNavList from '../../../docs/navlist';

interface Props {
	docPageContent: string;
	docPageTitle: string;
}

const DocPage = ({ docPageContent, docPageTitle }: Props) => {
	return (
		<Layout>
			<SEO title={`Spot | ${docPageTitle}`} />
			<ReactMarkdown children={docPageContent} components={{ code: CodeBlock }} />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	try {
		const { params } = context;
		const { docPage } = params as Record<string, string>;
		const docPageContent = readFileSync(`docs/${docPage}.md`, 'utf-8');
		const docPageTitle =
			docsNavList.find((navItem) => navItem.url === `/${docPage}`)?.title || 'Docs';
		return { props: { docPageTitle, docPageContent } };
	} catch (err) {
		return { notFound: true, revalidate: 2 * 60 };
	}
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: docsNavList.map((navItem) => ({ params: { docPage: navItem.url } })),
		fallback: 'blocking'
	};
};

export default DocPage;
