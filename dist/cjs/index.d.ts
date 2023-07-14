export type HolidayInfo = {
    date: string;
    endDate: Date;
    name: string;
    startDate: Date;
};
export type HolidayMap = {
    [key: string]: {
        [key: string]: {
            [key: string]: HolidayInfo;
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
 * get holiday info
 *
 * @param date - target date
 * @returns return holiday info if date is holiday, otherwise return null
 */
export declare function getHolidayInfo(date: Date): HolidayInfo | null;
/**
 * return true if date is holiday
 *
 * @param date - target date
 * @returns return true if date is holiday
 */
export declare function isHoliday(date: Date): boolean;
