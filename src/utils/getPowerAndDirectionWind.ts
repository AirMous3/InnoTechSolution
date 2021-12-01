import { getWindDirection } from './getWindDirection';

const ROUNDING_INDEX = 2;
const METRES_PER_SECOND = 3.6;
const DEGREE_UNICODE = 0xfeff00b0;
const DEGREE_CHARACTER = String.fromCharCode(DEGREE_UNICODE);

export const getPowerAndDirectionWind = (windSpeed: number, windDegree: number): string =>
  ` ${(windSpeed / METRES_PER_SECOND).toFixed(
    ROUNDING_INDEX,
  )}М/С -${windDegree}${DEGREE_CHARACTER} = ${getWindDirection(windDegree)}`;
