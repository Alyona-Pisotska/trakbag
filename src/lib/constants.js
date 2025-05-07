const INITIAL_ITEMS = [
  {
    id: 1,
    name: 'good mood',
    packed: true,
  },
  {
    id: 2,
    name: 'passport',
    packed: false,
  },
  {
    id: 3,
    name: 'phone charger',
    packed: false,
  },
];

const SORTING_VALUES = {
  default: 'default',
  packed: 'packed',
  unpacked: 'unpacked',
};

const SORTING_OPTIONS = [
  {
    value: SORTING_VALUES.default,
    label: 'Sort by default',
  },
  {
    value: SORTING_VALUES.packed,
    label: 'Sort by packed',
  },
  {
    value: SORTING_VALUES.unpacked,
    label: 'Sort by unpacked',
  },
];

export { INITIAL_ITEMS, SORTING_VALUES, SORTING_OPTIONS };

