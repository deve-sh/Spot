import Spot from '../index';

export const getInstance = (): Spot | undefined => (globalThis as any).spotInstance;

export const setInstance = (instance: Spot) => {
	if (getInstance()) return;
	(globalThis as any).spotInstance = instance;
};
