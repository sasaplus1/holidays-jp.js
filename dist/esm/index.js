import { holidays as baseHolidays } from 'japanese-public-holidays';
const toString = Object.prototype.toString;
// NOTE: JST is UTC+9:00
const jstOffset = 1000 * 60 * 60 * 9;
// NOTE: find backward is faster than find forward maybe
export const holidays = baseHolidays.reverse().map(function (holiday) {
    const { date, name } = holiday;
    const [year, month, day] = date.split('-').map((num) => parseInt(num, 10));
    const startDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0) - jstOffset);
    const endDate = new Date(Date.UTC(year, month - 1, day + 1, 0, 0, 0, 0) - jstOffset - 1);
    return {
        date,
        endDate,
        name,
        startDate
    };
});
export const holidayMap = holidays.reduce(function (result, holiday) {
    const { date } = holiday;
    const [year, month, day] = date.split('-');
    if (!result[year]) {
        result[year] = {};
    }
    if (!result[year][month]) {
        result[year][month] = {};
    }
    result[year][month][day] = holiday;
    return result;
}, {});
/**
 * get holiday info
 *
 * @param date
 */
export function getHolidayInfo(date) {
    if (toString.call(date) !== '[object Date]') {
        throw new TypeError('date must be a Date: ' + date);
    }
    const jstDate = new Date(date.getTime() + jstOffset);
    const m = jstDate.getUTCMonth() + 1;
    const d = jstDate.getUTCDate();
    const year = String(jstDate.getUTCFullYear());
    const month = m < 10 ? `0${m}` : String(m);
    const day = d < 10 ? `0${d}` : String(d);
    if (holidayMap[year] &&
        holidayMap[year][month] &&
        holidayMap[year][month][day]) {
        return holidayMap[year][month][day];
    }
    return null;
}
/**
 * return true if date is holiday
 *
 * @param date
 */
export function isHoliday(date) {
    if (toString.call(date) !== '[object Date]') {
        throw new TypeError('date must be a Date: ' + date);
    }
    return getHolidayInfo(date) !== null;
}
//# sourceMappingURL=index.js.map