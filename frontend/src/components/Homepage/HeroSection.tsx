import { Button, Divider, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FaGithub } from 'react-icons/fa';
import { SiFiles } from 'react-icons/si';

import { signInWithGitHub } from 'API/auth';

import Container from 'components/Layout/Container';

const HeroSectionContainer = styled(Container)`
	width: 100vw;
	max-width: 100vw;
`;

const HeroSection = () => {
	return (
		<HeroSectionContainer textAlign="center">
			<Flex justifyContent="center" my="5">
				<Image src="/images/logo.svg" height="100%" maxHeight={35} mr="2" />
			</Flex>
			<Heading color="gray.700" mb="5" px="2">
				<Text color="teal" display="inline-block">
					Spot
				</Text>{' '}
				- The Frontend Monitoring Stack
			</Heading>
			<Text
				color="gray.500"
				maxWidth="650px"
				fontSize="lg"
				margin="0 auto"
				mb="5"
				padding="2"
			>
				Spot is a simple and elegant way to monitor all aspects of your web app. From
				Performance to code to user sessions, their logs and network waterfalls. So you
				never have to wonder anything about your end users again.
			</Text>
			<Flex justifyContent="center" mb="5" gap="4" padding="2">
				<Button
					colorScheme="teal"
					padding="8"
					fontSize="lg"
					fontWeight="bold"
					borderWidth="1px"
					borderColor="teal"
					display="flex"
					alignItems="center"
					leftIcon={<Icon as={FaGithub} width={8} height={8} />}
					onClick={signInWithGitHub}
				>
					Get Started
				</Button>
				<Link href="/docs">
					<Button
						colorScheme="teal"
						variant="outline"
						py="8"
						px="4"
						fontSize="lg"
						fontWeight="bold"
						leftIcon={<Icon as={SiFiles} width={7} height={7} />}
					>
						Read The Docs
					</Button>
				</Link>
			</Flex>
			<Image
				src="/images/homepage/definitive-monitoring-min.webp"
				objectFit="contain"
				minHeight={{ lg: '60vh', sm: 'auto' }}
				width="100%"
			/>
			<Divider />
		</HeroSectionContainer>
	);
};

export default HeroSection;
