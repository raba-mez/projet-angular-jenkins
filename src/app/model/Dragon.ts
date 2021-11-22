import { Random } from '../services/Random';

export const COLORS = [
    'sapphire',
    'emerald',
    'ruby',
    'topaz',
    'diamond',
    'gold',
    'silver',
    'copper',
    'tin',
    'jade',
    'black'
];

export const POWERS = [
    'fire',
    'ice',
    'wind',
    'earth',
    'gravity',
    'void',
    'water',
    'thunder',
    'arcana'
];

const NAMES = [
    'Shenron',
    'Spyro',
    'Acnologia',
    'Deathwing',
    'Coeur de Givre',
    'Draco'
];

const getRandomSize = (): number => Random.getIntegerBetweenValues(1, 100);

const getRandomColor = (): string => COLORS[Random.getIntegerBetweenValues(0, COLORS.length - 1)];

const getRandomPower = (): string => POWERS[Random.getIntegerBetweenValues(0, POWERS.length - 1)];

export const getRandomName = (): string => NAMES[Random.getIntegerBetweenValues(0, NAMES.length - 1)];

export interface Dragon {
    id?: number;
    name: string;
    size: number;
    color: string;
    power: string;
    lifePoints: number;
  imageUrl?: string;
  removalInProgress?: boolean;
}

export function generateRandomDragon(
  name: string = getRandomName(),
  power = getRandomPower(),
  color = getRandomColor(),
  lifePoints = 100
): Dragon {
    return {
        name,
        lifePoints,
        size: getRandomSize(),
        color,
        power
    };
}
