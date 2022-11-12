import { useMemo } from 'react';
import { Flex, Icon, Tooltip } from '@chakra-ui/react';

import browserIconMap from 'utils/browserIconMap';
import deviceIconMap from 'utils/deviceIconMap';
import osIconMap from 'utils/osIconMap';

const InfoIcon = ({ as, w, h }: { as: any; w?: any; h?: any }) => (
	<Icon as={as} w={w || 10} h={h || 10} color="gray.600" />
);

const SessionPlatformInfo = ({ session, iconSize = 'lg' }: { session: any; iconSize?: string }) => {
	const device = useMemo(
		() => (session.platform_info.isMobile ? 'mobile' : 'desktop'),
		[session?.platform_info]
	);
	const browser = useMemo(() => session.platform_info.browser, [session?.platform_info]);
	const platform = useMemo(() => session.platform_info.platform, [session?.platform_info]);

	const iconHeight = useMemo(() => (iconSize === 'lg' ? 10 : 6), [iconSize]);
	const iconWidth = useMemo(() => (iconSize === 'lg' ? 10 : 6), [iconSize]);

	return session ? (
		<Flex justifyContent="flex-end" flex="1" gap="3" className="session-platform-info">
			<Tooltip label={'Browser: ' + browser}>
				<div>
					<InfoIcon
						w={iconWidth}
						h={iconHeight}
						as={browserIconMap[browser] || browserIconMap.default}
					/>
				</div>
			</Tooltip>
			{!!osIconMap[platform] && (
				<Tooltip label={'Platform: ' + platform}>
					<div>
						<InfoIcon w={iconWidth} h={iconHeight} as={osIconMap[platform]} />
					</div>
				</Tooltip>
			)}
			<Tooltip label={'Device: ' + device}>
				<div>
					<InfoIcon w={iconWidth} h={iconHeight} as={deviceIconMap[device]} />
				</div>
			</Tooltip>
		</Flex>
	) : (
		<></>
	);
};

export default SessionPlatformInfo;
