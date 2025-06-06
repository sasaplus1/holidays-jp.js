"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHoliday = exports.getHolidayInfo = exports.holidayMap = exports.holidays = void 0;
const japanese_public_holidays_1 = __importDefault(require("japanese-public-holidays"));
const { holidays: baseHolidays } = japanese_public_holidays_1.default;
// NOTE: JST is UTC+9:00
const jstOffsetHour = 1000 * 60 * 60 * 9;
// NOTE: find backward is faster than find forward maybe
exports.holidays = baseHolidays.reverse().map(function (holiday) {
    const { date, name } = holiday;
    const [year, month, day] = date.split('-').map(Number);
    if (year === undefined || month === undefined || day === undefined) {
        return {
            date,
            endDate: new Date(''),
            name,
            startDate: new Date('')
        };
    }
    const startDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0) - jstOffsetHour);
    const endDate = new Date(Date.UTC(year, month - 1, day + 1, 0, 0, 0, 0) - jstOffsetHour - 1);
    return {
        date,
        endDate,
        name,
        startDate
    };
});
exports.holidayMap = exports.holidays.reduce(function (result, holiday) {
    const { date } = holiday;
    const [year, month, day] = date.split('-');
    if (year === undefined || month === undefined || day === undefined) {
        return result;
    }
    const yearObject = ensureKey(result, year);
    const monthObject = ensureKey(yearObject, month);
    monthObject[day] = holiday;
    return result;
}, {});
/**
 * get holiday info
 *
 * @param date - target date
 * @returns return holiday info if date is holiday, otherwise return null
 */
function getHolidayInfo(date) {
    if (!isDate(date)) {
        throw new TypeError('date must be a Date: ' + date);
    }
    const jstDate = new Date(date.getTime() + jstOffsetHour);
    const m = jstDate.getUTCMonth() + 1;
    const d = jstDate.getUTCDate();
    const year = String(jstDate.getUTCFullYear());
    const month = m < 10 ? `0${m}` : String(m);
    const day = d < 10 ? `0${d}` : String(d);
    const yearObject = ensureKey(exports.holidayMap, year);
    const monthObject = ensureKey(yearObject, month);
    const result = monthObject[day];
    return result === undefined ? null : result;
}
exports.getHolidayInfo = getHolidayInfo;
/**
 * return true if date is holiday
 *
 * @param date - target date
 * @returns return true if date is holiday
 */
function isHoliday(date) {
    if (!isDate(date)) {
        throw new TypeError('date must be a Date: ' + date);
    }
    return getHolidayInfo(date) !== null;
}
exports.isHoliday = isHoliday;
/** cache of Object.prototype.toString */
const toString = Object.prototype.toString;
/**
 * return true if date is Date instance
 *
 * @param value - target value
 * @returns return true if value is date
 */
function isDate(value) {
    return toString.call(value) === '[object Date]';
}
/**
 * for TS2532
 *
 * @param object - target object
 * @returns object
 */
function ensureKey(object, key) {
    if (!object[key]) {
        object[key] = {};
    }
    return object[key];
}
//# sourceMappingURL=index.js.map