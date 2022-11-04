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
		`}
	</style>
);

export default GlobalStyles;
