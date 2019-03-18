const legendGap = '1em';
const gridNegativeOffset = '-0.5em';

export const defaultColor = 'dodgerblue';

export const placement = {
	TOP: 'top',
	RIGHT: 'right',
	BOTTOM: 'bottom',
	LEFT: 'left',
};

export const placementStyles = {
	[placement.TOP]: {
		isHorisontal: false,
		container: {flexDirection: 'column'},
		legend: {
			order: -1,
			margin: gridNegativeOffset,
			marginBottom: legendGap,
		},
	},
	[placement.RIGHT]: {
		isHorisontal: true,
		container: {},
		legend: {
			flexDirection: 'column',
			margin: gridNegativeOffset,
			marginLeft: legendGap,
		},
	},
	[placement.BOTTOM]: {
		isHorisontal: false,
		container: {flexDirection: 'column'},
		legend: {},
	},
	[placement.LEFT]: {
		isHorisontal: true,
		container: {},
		legend: {
			flexDirection: 'column',
			order: -1,
			margin: gridNegativeOffset,
			marginRight: legendGap,
		},
	},
};

const isObject = obj => !!obj && obj.constructor === Object;

const sectionKeys = [
	{
		type: 'number',
		key: 'value',
		required: true,
	},
	{key: 'label'},
	{key: 'color'},
];

export function sectionValidator(section) {
	if (!isObject(section)) return false;

	return sectionKeys.reduce((acc, curr) => {
		if (!acc) return false;

		let valid = true;
		if (curr.required) valid = valid && Object.hasOwnProperty.call(section, curr.key);
		if (curr.type) valid = valid && typeof section[curr.key] === curr.type;
		return acc && valid;
	}, true);
}
