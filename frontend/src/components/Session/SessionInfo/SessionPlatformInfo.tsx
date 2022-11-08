import { useMemo, forwardRef } from 'react';
import { Flex, Icon, Tooltip } from '@chakra-ui/react';

import browserIconMap from 'utils/browserIconMap';
import deviceIconMap from 'utils/deviceIconMap';
import osIconMap from 'utils/osIconMap';

import useSessionInfo from './useSessionInfo';

const InfoIcon = ({ as }: { as: any }) => <Icon as={as} w={10} h={10} color="gray.600" />;

const SessionPlatformInfo = () => {
	const { data } = useSessionInfo();

	const device = useMemo(
		() => (data.session.platform_info.isMobile ? 'mobile' : 'desktop'),
		[data?.session.platform_info]
	);
	const browser = useMemo(
		() => data.session.platform_info.browser,
		[data?.session.platform_info]
	);
	const platform = useMemo(
		() => data.session.platform_info.platform,
		[data?.session.platform_info]
	);

	return data ? (
		<Flex justifyContent="flex-end" flex="1" gap="3">
			<Tooltip label={'Browser: ' + browser}>
				<div>
					<InfoIcon as={browserIconMap[browser] || browserIconMap.default} />
				</div>
			</Tooltip>
			{!!osIconMap[platform] && (
				<Tooltip label={'Platform: ' + platform}>
					<div>
						<InfoIcon as={osIconMap[platform]} />
					</div>
				</Tooltip>
			)}
			<Tooltip label={'Device: ' + device}>
				<div>
					<InfoIcon as={deviceIconMap[device]} />
				</div>
			</Tooltip>
		</Flex>
	) : (
		<></>
	);
};

export default SessionPlatformInfo;
