export declare type HolidayInfo = {
    date: string;
    endDate: Date;
    name: string;
    startDate: Date;
};
export declare type HolidayMap = {
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
 * @param date
 */
export declare function getHolidayInfo(date: Date): HolidayInfo | null;
/**
 * return true if date is holiday
 *
 * @param date
 */
export declare function isHoliday(date: Date): boolean;
