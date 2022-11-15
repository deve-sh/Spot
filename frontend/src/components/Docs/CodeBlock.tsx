import styled from '@emotion/styled';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlockWrapper = styled.div`
	p code {
		background: #282c34;
		padding: 0.25rem;
		border-radius: 0.1rem;
		color: #ffffff;
	}

	pre,
	code {
		font-family: Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
			Bitstream Vera Sans Mono, Courier New, Monospace, sans-serif !important;
		font-size: 1rem;
		font-weight: 500;
	}

	pre {
		border-radius: 0.25rem;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	pre::webkit-scrollbar,
	code::webkit-scrollbar {
		display: none;
	}
`;

const CodeBlock = ({ language, value }: any) => {
	return (
		<CodeBlockWrapper>
			<SyntaxHighlighter language={language} style={tomorrow}>
				{value}
			</SyntaxHighlighter>
		</CodeBlockWrapper>
	);
};

export default CodeBlock;
