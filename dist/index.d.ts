declare module "index" {
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
    export const holidays: {
        date: string;
        endDate: Date;
        name: string;
        startDate: Date;
    }[];
    export const holidayMap: HolidayMap;
    /**
     * get holiday info
     *
     * @param date - target date
     * @returns return holiday info if date is holiday, otherwise return null
     */
    export function getHolidayInfo(date: Date): HolidayInfo | null;
    /**
     * return true if date is holiday
     *
     * @param date - target date
     * @returns return true if date is holiday
     */
    export function isHoliday(date: Date): boolean;
}
