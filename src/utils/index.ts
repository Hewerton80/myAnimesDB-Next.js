import moment from 'moment';
import { arrayMonths } from '../config/vars';

export const getFormatDate = (date: string | string) => {
    const dateMoment = moment(date);
    const month = dateMoment.get('months');
    const dayOfMont = dateMoment.get('date');
    const year = dateMoment.get('years');
    return `${dayOfMont} ${arrayMonths[month]}, ${year}`;
}

export const getScoreFormat = (score: string | number) => {
    return score ? (Number(score) / 10).toFixed(2) : '';
}

export const debounce = (callback: any, wait: number) => {
    let timerId: NodeJS.Timeout;
    return (...args: any) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            callback(...args);
        }, wait);
    };
}

/**
 * @param ms number
 * @returns Promise<unknown>
 */
 export const sleep = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * 
 * @param occurrences number
 * @param value value
 * @returns string
 */
export const repeat = (occurrences: number, value: string) => {
    return new Array(occurrences + 1).join(`${value} `);
}