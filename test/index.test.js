/* global it,describe */
/* eslint-disable no-underscore-dangle, no-unused-expressions */
import chai from 'chai';
import moment from '../src/index';
import oldmoment from './old';

const { expect } = chai;

describe('New fecha version compatibility', () => {
  const momentInstance = moment('2019-09-10T12:05:00', 'YYYY-MM-DD[T]HH:mm:ss');
  it('year should be 2019', () => {
    expect(momentInstance.format('YYYY')).to.be.equal('2019');
  });
});

describe('Moment instance without constructor', () => {
  const momentInstance = moment();
  it('should not be undefined', () => {
    expect(momentInstance).to.not.be.an('undefined');
  });
  it('should have property "_date"', () => {
    expect(momentInstance._date).to.not.be.an('undefined');
  });
  it('should have property "numberDate"', () => {
    expect(momentInstance._date).to.not.be.an('undefined');
  });
  it('should be valid', () => {
    expect(momentInstance.isValid()).to.be.true;
  });
  it('should have "_date" as an instanceof Date', () => {
    expect(momentInstance._date instanceof Date).to.not.be.false;
  });
  const today = new Date(momentInstance._date);
  it('should be equal to a Date object', () => {
    expect(momentInstance.numberDate).to.be.equal(today.getTime());
  });
});

describe('Moment instance with constructor "null"', () => {
  const momentInstance = moment(null);
  it('should not be undefined', () => {
    expect(momentInstance).to.not.be.an('undefined');
  });
  it('should have property "_date"', () => {
    expect(momentInstance._date).to.not.be.an('undefined');
  });
  it('should have property "numberDate"', () => {
    expect(momentInstance._date).to.not.be.an('undefined');
  });
  it('should be valid', () => {
    expect(momentInstance.isValid()).to.be.true;
  });
  it('should have "_date" as an instanceof Date', () => {
    expect(momentInstance._date instanceof Date).to.not.be.false;
  });
  const today = new Date(momentInstance._date);
  it('should be equal to a Date object', () => {
    expect(momentInstance.numberDate).to.be.equal(today.getTime());
  });
});

describe('Moment instance with constructor empty string', () => {
  const momentInstance = moment('');
  it('should not be undefined', () => {
    expect(momentInstance).to.not.be.an('undefined');
  });
  it('should have property "_date"', () => {
    expect(momentInstance._date).to.not.be.an('undefined');
  });
  it('should have property "numberDate"', () => {
    expect(momentInstance._date).to.not.be.an('undefined');
  });
  it('should be valid', () => {
    expect(momentInstance.isValid()).to.be.true;
  });
  it('should have "_date" as an instanceof Date', () => {
    expect(momentInstance._date instanceof Date).to.not.be.false;
  });
  const today = new Date(momentInstance._date);
  it('should be equal to a Date object', () => {
    expect(momentInstance.numberDate).to.be.equal(today.getTime());
  });
});

describe('Moment instance with constructor "false"', () => {
  const momentInstance = moment(false);
  it('should not be undefined', () => {
    expect(momentInstance).to.not.be.an('undefined');
  });
  it('should not be valid', () => {
    expect(momentInstance.isValid()).to.be.false;
  });
  it('should not have property "_date" equal false', () => {
    expect(momentInstance._date).to.be.false;
  });
  it('should not have property "_date" equal undefined', () => {
    expect(momentInstance._date).to.not.be.an('undefined');
  });
  it('should not have property "numberDate" equal false', () => {
    expect(momentInstance.numberDate).to.be.false;
  });
  it('should not have property "numberDate" equal undefined', () => {
    expect(momentInstance.numberDate).to.not.be.an('undefined');
  });
  it('should have "_date" as an instanceof Date', () => {
    expect(momentInstance._date instanceof Date).to.be.false;
  });
});

describe('Moment instance with constructor string', () => {
  const today = new Date();
  const day = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const month = today.getMonth();
  const year = today.getFullYear();
  const momentInstance = moment(`${year}-${month + 1}-${day} ${hours}:${minutes}`, 'YYYY-MM-DD HH:mm');
  it('should have "_date" as an instanceof Date', () => {
    expect(momentInstance._date instanceof Date).to.be.true;
  });
  it('should have formatted correctly the day number', () => {
    expect(momentInstance._date.getDate()).to.be.equal(day);
  });
  it('should have formatted correctly the month number', () => {
    expect(momentInstance._date.getMonth()).to.be.equal(month);
  });
  it('should have formatted correctly the year number', () => {
    expect(momentInstance._date.getDate()).to.be.equal(day);
  });
  it('should have formatted correctly the hour number', () => {
    expect(momentInstance._date.getHours()).to.be.equal(hours);
  });
  it('should have formatted correctly the minutes number', () => {
    expect(momentInstance._date.getMinutes()).to.be.equal(minutes);
  });
});

describe('Moment instance "format" method', () => {
  const today = new Date();
  const day = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedHour = hours > 9 ? hours : `0${hours}`;
  const formattedMonth = month > 9 ? month : `0${month}`;
  const formattedDate = day > 9 ? day : `0${day}`;
  const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`;
  const momentInstanceFormatted = moment(today).format('YYYY-MM-DD HH:mm');
  const momentInstanceInvalid = moment();
  momentInstanceInvalid._date = false;
  const formattedInvalid = momentInstanceInvalid.format('YYYY-MM-DD HH:mm');
  it('should have formatted date correctly', () => {
    expect(momentInstanceFormatted).to.be.equal(`${year}-${formattedMonth}-${formattedDate} ${formattedHour}:${formattedMinutes}`);
  });

  it('should have formatted date "false" when _date is false', () => {
    expect(formattedInvalid).to.be.false;
  });
});
describe('Moment instance "add" method', () => {
  const momentInstance0 = moment();
  const momentInstance1 = moment(momentInstance0._date.valueOf());
  const momentInstance2 = moment();
  const momentInstance3 = moment();
  const momentInstanceAddDay = moment(momentInstance1._date).add(1, 'days');
  const momentInstanceAddMinutes = moment(momentInstance2._date).add(1, 'minutes');
  const momentInstanceAddHour = moment(momentInstance3._date).add(1, 'hours');
  momentInstance1._date.setDate(momentInstance1._date.getDate() + 1);
  momentInstance2._date.setMinutes(momentInstance2._date.getMinutes() + 1);
  momentInstance3._date.setHours(momentInstance3._date.getHours() + 1);

  it('should be true for different dates "valueOf" value', () => {
    expect(momentInstance0.valueOf()).to.not.be.equal(momentInstanceAddDay.valueOf());
  });
  it('should be true when adding 1 day', () => {
    expect(momentInstanceAddDay._date.getDate()).to.be.equal(momentInstance1._date.getDate());
  });
  it('should be true when adding 1 minute', () => {
    expect(momentInstanceAddMinutes._date.getMinutes())
      .to.be.equal(momentInstance2._date.getMinutes());
  });
  it('should be true when adding 1 hour', () => {
    expect(momentInstanceAddHour._date.getHours()).to.be.equal(momentInstance3._date.getHours());
  });
});
describe('Moment instance "subtract" method', () => {
  const momentInstance0 = moment();
  const momentInstance1 = moment(momentInstance0._date.valueOf());
  const momentInstance2 = moment();
  const momentInstance3 = moment();
  const momentInstanceAddDay = moment(momentInstance1._date).subtract(1, 'days');
  const momentInstanceAddMinutes = moment(momentInstance2._date).subtract(1, 'minutes');
  const momentInstanceAddHour = moment(momentInstance3._date).subtract(1, 'hours');
  momentInstance1._date.setDate(momentInstance1._date.getDate() - 1);
  momentInstance2._date.setMinutes(momentInstance2._date.getMinutes() - 1);
  momentInstance3._date.setHours(momentInstance3._date.getHours() - 1);

  it('should be true for different dates "valueOf" value', () => {
    expect(momentInstance0.valueOf()).to.not.be.equal(momentInstanceAddDay.valueOf());
  });
  it('should be true when subtracting 1 day', () => {
    expect(momentInstanceAddDay._date.getDate()).to.be.equal(momentInstance1._date.getDate());
  });
  it('should be true when subtracting 1 minute', () => {
    expect(momentInstanceAddMinutes._date.getMinutes())
      .to.be.equal(momentInstance2._date.getMinutes());
  });
  it('should be true when subtracting 1 hour', () => {
    expect(momentInstanceAddHour._date.getHours()).to.be.equal(momentInstance3._date.getHours());
  });
});
describe('Moment instance "isSame" method', () => {
  const momentInstance = moment('2019-01-01', 'YYYY-MM-DD');
  const momentInstance2 = moment('2019-01-01', 'YYYY-MM-DD');
  const momentInstance3 = moment('2019-01-02', 'YYYY-MM-DD');
  const momentInstance4 = moment('2019-01-01 00:00:00', 'YYYY-MM-DD');
  it('should be same', () => {
    expect(momentInstance.isSame(momentInstance2)).to.be.true;
    expect(momentInstance2.isSame(momentInstance)).to.be.true;
    expect(momentInstance.isSame(momentInstance4)).to.be.true;
  });
  it('should not be same', () => {
    expect(momentInstance.isSame(momentInstance3)).to.be.false;
    expect(momentInstance2.isSame(momentInstance4)).to.be.true;
  });
});
describe('Moment instance getters', () => {
  const momentInstance1 = moment('2019-01-31 12:00:00', 'YYYY-MM-DD hh:mm:ss');
  const momentInstance2 = moment('2018-01-31 12:00:00', 'YYYY-MM-DD hh:mm:ss');
  const momentInstance3 = moment('2019-03-10 12:34:12', 'YYYY-MM-DD hh:mm:ss');
  const momentInstance4 = moment('2019-10-09 12:00:00', 'YYYY-MM-DD hh:mm:ss');
  const momentInstance5 = moment();
  const oldMomentInstance1 = oldmoment('2019-01-31 12:00:00', 'YYYY-MM-DD hh:mm:ss');
  const oldMomentInstance2 = oldmoment('2018-01-31 12:00:00', 'YYYY-MM-DD hh:mm:ss');
  const oldMomentInstance3 = oldmoment('2019-03-10 12:34:12', 'YYYY-MM-DD hh:mm:ss');
  const oldMomentInstance4 = oldmoment('2019-10-09 12:00:00', 'YYYY-MM-DD hh:mm:ss');
  const oldMomentInstance5 = oldmoment();
  describe('get date', () => {
    it('values validations', () => {
      expect(momentInstance1.date()).to.be.equal(31);
      expect(momentInstance2.date()).to.be.equal(31);
      expect(momentInstance3.date()).to.be.equal(10);
      expect(momentInstance4.date()).to.be.equal(9);
    });
    it('compare with old momentmini implementation', () => {
      expect(momentInstance1.date()).to.be.equal(oldMomentInstance1.date());
      expect(momentInstance2.date()).to.be.equal(oldMomentInstance2.date());
      expect(momentInstance3.date()).to.be.equal(oldMomentInstance3.date());
      expect(momentInstance4.date()).to.be.equal(oldMomentInstance4.date());
      expect(momentInstance5.date()).to.be.equal(oldMomentInstance5.date());
    });
  });
  describe('get month', () => {
    it('values validations', () => {
      expect(momentInstance1.month()).to.be.equal(0);
      expect(momentInstance2.month()).to.be.equal(0);
      expect(momentInstance3.month()).to.be.equal(2);
      expect(momentInstance4.month()).to.be.equal(9);
    });
    it('compare with old momentmini implementation', () => {
      expect(momentInstance1.month()).to.be.equal(oldMomentInstance1.month());
      expect(momentInstance2.month()).to.be.equal(oldMomentInstance2.month());
      expect(momentInstance3.month()).to.be.equal(oldMomentInstance3.month());
      expect(momentInstance4.month()).to.be.equal(oldMomentInstance4.month());
      expect(momentInstance5.month()).to.be.equal(oldMomentInstance5.month());
    });
  });
});
describe('Moment instance "isBefore" method', () => {
  const momentInstance = moment();
  const momentInstanceBefore = moment('2019-03-04', 'YYYY-MM-DD');
  it('should be true', () => {
    expect(momentInstanceBefore.isBefore(momentInstance)).to.be.true;
  });
  it('should be false', () => {
    expect(momentInstance.isBefore(momentInstanceBefore)).to.be.false;
  });
});

describe('Moment instance "isAfter" method', () => {
  const momentInstance = moment();
  const momentInstanceBefore = moment().add(1, 'days');
  it('should be true', () => {
    expect(momentInstanceBefore.isAfter(momentInstance)).to.be.true;
  });
  it('should be false', () => {
    expect(momentInstance.isAfter(momentInstanceBefore)).to.be.false;
  });
});

describe('Moment instance "isBetween" method', () => {
  const momentInstance = moment();
  const now = moment();
  const momentInstanceAfter = moment().add(1, 'days');
  it('should be true', () => {
    expect(now.isBetween(momentInstance, momentInstanceAfter)).to.be.true;
  });
});

describe('Moment instance "diff" method', () => {
  const momentInstance = moment();
  const momentInstanceAfter = moment().add(1, 'days');
  it('should be true', () => {
    expect(momentInstanceAfter.diff(momentInstance, 'days')).to.be.equal(1);
  });
  it('should be true', () => {
    expect(momentInstance.diff(momentInstanceAfter, 'days')).to.be.equal(1);
  });
});
