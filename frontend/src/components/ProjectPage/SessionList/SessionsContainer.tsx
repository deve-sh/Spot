import { Box } from '@chakra-ui/react';

interface Props {
	children: any;
	showLoadMore?: boolean;
	onClickLoadMore?: any;
}

const SessionsContainer = ({ children, showLoadMore, onClickLoadMore }: Props) => (
	<Box
		maxHeight="75vh"
		overflow="hidden"
		overflowY="auto"
		borderWidth="1px"
		borderRadius="lg"
		borderColor="gray.200"
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

export default SessionsContainer;
