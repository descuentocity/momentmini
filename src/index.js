/**
 * Wrapper de fecha js para que tenga interfaz similar a la de moment.js
 * La idea es usarlo donde se pueda por que es varias veces mas rapido que moment
 * USAR CON CUIDADO!
 */

/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/* eslint no-use-before-define: ["error", { "functions": false }] */

import fecha from 'fecha';

function buildDate(date) {
  const ret = {
    format(f) {
      if (!this.isValid()) {
        return false;
      }
      return fecha.format(this._date.valueOf(), f);
    },
    isValid() {
      return this._date !== false;
    },
    diff(obj = momentMini(), timePeriod = 'days') {
      const valueOfObj = obj.valueOf();
      const valueOfSelf = this._date.valueOf();
      const differenceMilliseconds = Math.abs(valueOfSelf - valueOfObj);

      const divideBy = {
        week: 604800000,
        days: 86400000,
        hour: 3600000,
        minutes: 60000,
        seconds: 1000,
      };
      const selectedPeriod = divideBy[timePeriod] || divideBy.days;
      return Math.floor(differenceMilliseconds / selectedPeriod);
    },
    isBefore(obj = momentMini()) {
      const valueOfObj = obj.valueOf();
      const valueOfSelf = this._date.valueOf();
      return valueOfSelf < valueOfObj;
    },
    isAfter(obj = momentMini()) {
      const valueOfObj = obj.valueOf();
      const valueOfSelf = this._date.valueOf();
      return valueOfSelf > valueOfObj;
    },
    isBetween(objFrom = momentMini(), objTo = momentMini()) {
      const valueOfSelf = this._date.valueOf();
      const valueOfObjFrom = objFrom.valueOf();
      const valueOfObjTo = objTo.valueOf();
      return valueOfSelf >= valueOfObjFrom && valueOfSelf <= valueOfObjTo;
    },
    add(qty, timePeriod = 'days') {
      if (timePeriod === 'minutes') {
        this._date.setMinutes(this._date.getMinutes() + qty);
      }
      if (timePeriod === 'hours') {
        this._date.setHours(this._date.getHours() + qty);
      }
      if (timePeriod === 'days') {
        this._date.setDate(this._date.getDate() + qty);
      }
      this.numberDate = this._date.valueOf();
      return this;
    },
    valueOf() {
      return this.numberDate;
    },
  };

  if (date === false || date.toString() === 'Invalid Date') {
    return Object.assign(
      ret,
      {
        _date: false,
        numberDate: false,
      },
    );
  }
  return Object.assign(
    ret,
    {
      _date: date,
      numberDate: (+date),
    },
  );
}


function momentMini(date, format = null) {
  if (date === false) {
    return buildDate(false);
  } else if (date === null) {
    return buildDate(new Date());
  }
  // caso date = any, fotmat
  if (format && format instanceof Array) {
    return buildDate(format.find(f => fecha.parse(date, f)));
  } else if (format) {
    return buildDate(fecha.parse((date || '').toString(), format));
  } else if (Object.prototype.toString.call(date) === '[object Date]') {
    return buildDate(date);
  } else if (typeof date === 'object') {
    return buildDate(new Date(date.valueOf()));
  } else if (typeof date === 'number') {
    return buildDate(new Date(date * 1000));
  }

  const dateObj = new Date();
  return buildDate(dateObj);
}


/**
  * factory para el moment mini
  * @param  number|string date          fecha en string o timestamp en ms
  * @param  detalle del fromato de date [format=null] [description]
  * @return {[MomentMini]}               [description]
  */
export default momentMini;
