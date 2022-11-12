import { useState, type ChangeEvent } from 'react';

import {
	Button,
	Flex,
	Icon,
	IconButton,
	Input,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
	Text,
	useDisclosure
} from '@chakra-ui/react';
import { MdFilterList } from 'react-icons/md';

interface Props {
	applyFilters: (filters: Record<string, any>) => any;
	clearFilters: () => any;
}

const initialValue = {
	user_email: '',
	user_name: '',
	user_phone: ''
};

const SessionFiltersSelector = ({ applyFilters, clearFilters }: Props) => {
	const { isOpen, onClose: close, onOpen: open } = useDisclosure();

	const [filters, setFilters] = useState<Record<string, string>>(initialValue);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.persist();
		setFilters((filters) => ({
			...filters,
			[e.target.name]: e.target.value
		}));
	};
	const anyFiltersAdded = () => {
		for (let filter in filters)
			if (filters.hasOwnProperty(filter) && filters[filter]) return true;
		return false;
	};
	return (
		<Popover isOpen={isOpen}>
			<PopoverTrigger>
				<IconButton
					aria-label="Apply Filters"
					icon={<Icon as={MdFilterList} color="gray.600" height={6} width={6} />}
					onClick={isOpen ? close : open}
					background="transparent"
				/>
			</PopoverTrigger>
			<PopoverContent>
				<PopoverArrow />
				<PopoverCloseButton onClick={close} />
				<PopoverBody padding="5">
					<Flex gap="2" my="2" alignItems="center">
						<Text flex="1" minWidth="40%">
							User Name
						</Text>
						<Input
							placeholder="John Doe"
							name="user_name"
							onChange={handleChange}
							value={filters.user_name || ''}
						/>
					</Flex>
					<Flex gap="2" my="2" alignItems="center">
						<Text flex="1" minWidth="40%">
							User Email
						</Text>
						<Input
							placeholder="user@acme.com"
							type="email"
							name="user_email"
							onChange={handleChange}
							value={filters.user_email || ''}
						/>
					</Flex>
					<Flex gap="2" my="2" alignItems="center">
						<Text flex="1" minWidth="40%">
							User Phone
						</Text>
						<Input
							placeholder="John Doe"
							type="tel"
							name="user_phone"
							onChange={handleChange}
							value={filters.user_phone || ''}
						/>
					</Flex>
					<Flex gap="2" justifyContent="flex-end">
						<Button
							colorScheme="red"
							variant="ghost"
							onClick={() => {
								setFilters(initialValue);
								clearFilters();
								close();
							}}
							disabled={!anyFiltersAdded()}
						>
							Clear
						</Button>
						<Button
							colorScheme="green"
							onClick={() => {
								applyFilters(filters);
								close();
							}}
							disabled={!anyFiltersAdded()}
						>
							Apply
						</Button>
					</Flex>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default SessionFiltersSelector;
