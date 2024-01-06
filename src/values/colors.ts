import * as seedrandom from 'seedrandom';

export const COLORS = [
  '#4072F2',
  '#50AEDD',
  '#7667E2',
  '#A853BC',
  '#B64A96',
  '#FF68AA',
  '#FF907A',
  '#F2B340',
  '#BEE868',
  '#9BDE7E',
  '#4BBC8E',
  '#2FAB63',
  '#2FAB63',
];

export const randomColorFor = (seed: string) => {
  const rng = seedrandom(seed);
  const randomNumber = rng();

  return COLORS[Math.floor(randomNumber * COLORS.length)];
};
