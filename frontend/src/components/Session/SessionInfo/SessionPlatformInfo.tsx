import { Flex, Icon } from '@chakra-ui/react';
import browserIconMap from 'utils/browserIconMap';
import deviceIconMap from 'utils/deviceIconMap';
import osIconMap from 'utils/osIconMap';

import useSessionInfo from './useSessionInfo';

const InfoIcon = ({ as }: { as: any }) => <Icon as={as} w={10} h={10} color="gray.600" />;

const SessionPlatformInfo = () => {
	const { data } = useSessionInfo();
	return data ? (
		<Flex justifyContent="flex-end" flex="1" gap="3">
			<InfoIcon
				as={browserIconMap[data.session.platform_info.browser] || browserIconMap.default}
			/>
			{!!osIconMap[data.session.platform_info.platform] && (
				<InfoIcon as={osIconMap[data.session.platform_info.platform]} />
			)}
			<InfoIcon
				as={deviceIconMap[data.session.platform_info.isMobile ? 'mobile' : 'desktop']}
			/>
		</Flex>
	) : (
		<></>
	);
};

export default SessionPlatformInfo;
