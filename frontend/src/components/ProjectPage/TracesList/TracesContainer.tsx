import { Box } from '@chakra-ui/react';

interface Props {
	children: any;
	showLoadMore?: boolean;
	onClickLoadMore?: any;
}

const TracesContainer = ({ children, showLoadMore, onClickLoadMore }: Props) => (
	<Box
		maxHeight="75vh"
		borderWidth="1px"
		borderRadius="lg"
		borderColor="gray.200"
		paddingBottom="1"
	>
		{children}
		{showLoadMore ? (
			<Box textAlign="center" textTransform="uppercase" color="gray.500" padding="4">
				<a href="#" onClick={onClickLoadMore}>
					Load More
				</a>
			</Box>
		) : (
			''
		)}
	</Box>
);

export default TracesContainer;
