import Spot from '../index';

let spotInstance: Spot;

export const getInstance = (): Spot | undefined => spotInstance;

export const setInstance = (instance: Spot) => {
	if (getInstance()) return;
	spotInstance = instance;
};
