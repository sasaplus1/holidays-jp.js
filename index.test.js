const assert = require('assert');

const { getHolidayInfo, isHoliday } = require('./');

const { name } = require('./package');

describe(name, function() {
  const jstOffset = 1000 * 60 * 60 * 9;

  describe('getHolidayInfo', function() {
    it('should return null if date is 2018-12-31 in JST', function() {
      // 2018-12-31T23:59:59+09:00
      const date = new Date(
        Date.UTC(2018, 12 - 1, 31, 23, 59, 59, 999) - jstOffset
      );

      assert(getHolidayInfo(date) === null);
    });
    it('should return object if date is 2019-01-01 in JST', function() {
      // 2019-01-01T00:00:00+09:00
      const date1 = new Date(Date.UTC(2019, 1 - 1, 1, 0, 0, 0, 0) - jstOffset);
      // 2019-01-01T23:59:59+09:00
      const date2 = new Date(
        Date.UTC(2019, 1 - 1, 1, 23, 59, 59, 999) - jstOffset
      );

      assert(getHolidayInfo(date1) !== null);
      assert(getHolidayInfo(date2) !== null);
    });
    it('should return null if date is 2019-01-02 in JST', function() {
      // 2019-01-02T00:00:00+09:00
      const date = new Date(Date.UTC(2019, 1 - 1, 2, 0, 0, 0, 0) - jstOffset);

      assert(getHolidayInfo(date) === null);
    });
  });

  describe('isHoliday', function() {
    it('should return false if date is 2018-12-31 in JST', function() {
      // 2018-12-31T23:59:59+09:00
      const date = new Date(
        Date.UTC(2018, 12 - 1, 31, 23, 59, 59, 999) - jstOffset
      );

      assert(!isHoliday(date));
    });
    it('should return true if date is 2019-01-01 in JST', function() {
      // 2019-01-01T00:00:00+09:00
      const date1 = new Date(Date.UTC(2019, 1 - 1, 1, 0, 0, 0, 0) - jstOffset);
      // 2019-01-01T23:59:59+09:00
      const date2 = new Date(
        Date.UTC(2019, 1 - 1, 1, 23, 59, 59, 999) - jstOffset
      );

      assert(isHoliday(date1));
      assert(isHoliday(date2));
    });
    it('should return false if date is 2019-01-02 in JST', function() {
      // 2019-01-02T00:00:00+09:00
      const date = new Date(Date.UTC(2019, 1 - 1, 2, 0, 0, 0, 0) - jstOffset);

      assert(!isHoliday(date));
    });
  });
});
