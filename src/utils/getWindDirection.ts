const DIRECTIONS = [
    'Северный',
    'Северо-Восточный',
    'Восточный',
    'Юго-Восточный',
    'Южный',
    'Юго-Западный',
    'Западный',
    'Северо-Западный',
];

const ANGLE_0 = 0;
const ANGLE_45 = 45;
const CIRCLE = 360;

export const getWindDirection = (degree: number): string => {
    const VECTOR =
        degree < ANGLE_0 ? CIRCLE - (Math.abs(degree) % CIRCLE) : degree % CIRCLE;

    // eslint-disable-next-line no-bitwise
    return `${DIRECTIONS[(VECTOR / ANGLE_45) | ANGLE_0]}`;
};
