import { Holiday } from './data';
declare type HolidayEx = Holiday & {
    endDate: Date;
    startDate: Date;
};
declare type HolidayMap = {
    [key: string]: {
        [key: string]: {
            [key: string]: HolidayEx;
        };
    };
};
export declare const holidays: {
    date: string;
    endDate: Date;
    name: string;
    startDate: Date;
}[];
export declare const holidayMap: HolidayMap;
/**
 * get holiday data
 *
 * @param date
 */
export declare function getHolidayInfo(date: Date): HolidayEx | null;
/**
 * return true if date is holiday
 *
 * @param date
 */
export declare function isHoliday(date: Date): boolean;
export {};
