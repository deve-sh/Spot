const GlobalStyles = () => (
	<style type="text/css">
		{`
			:root {
				--primary: #0f110c;
				--black: #000000;
				--white: #ffffff;
				--bordergrey: #cfcfcf;
				--grey: #efefef;
			}

			body {
				margin: 0;
				line-height: 1.61;
				background: var(--white);
				color: var(--primary);
				font-family: sans-serif;
			}

			::-webkit-scrollbar {
				width: 0.5rem;
			}
			
			::-webkit-scrollbar-track {
				background: #efefef;
			}
			
			::-webkit-scrollbar-thumb {
				background: #cfcfcf;
				border-radius: 5rem;
			}
			
			::-webkit-scrollbar-thumb:hover {
				background: #afafaf;
			}
		`}
	</style>
);

export default GlobalStyles;
