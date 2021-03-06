/**
 * Wrapper de fecha js para que tenga interfaz similar a la de moment.js
 * La idea es usarlo donde se pueda por que es varias veces mas rapido que moment
 * USAR CON CUIDADO!
 */

/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/* eslint no-use-before-define: ["error", { "functions": false }] */

import fecha from 'fecha';

fecha.i18n = {
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  amPm: ['am', 'pm'],
  DoFn: (D) => {
    const nDay = parseInt(D.toString().slice(0, -1), 10);
    const suffix = ['', 'ero', 'do', 'ero'];
    return suffix[nDay] || '';
  },
};

const timeStrategyAdd = {
  seconds: (d, n) => d.setSeconds(d.getSeconds() + n),
  minutes: (d, n) => d.setMinutes(d.getMinutes() + n),
  hours: (d, n) => d.setHours(d.getHours() + n),
  days: (d, n) => d.setDate(d.getDate() + n),
  months: (d, n) => d.setMonth(d.getMonth() + n),
  years: (d, n) => d.setFullYear(d.getFullYear() + n),
};

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
      if (!this.isValid() || !timeStrategyAdd[timePeriod]) {
        return this;
      }
      timeStrategyAdd[timePeriod](this._date, qty);
      this.numberDate = this._date.valueOf();
      return this;
    },
    subtract(qty, timePeriod = 'days') {
      return this.add(qty * -1, timePeriod);
    },
    isSame(m, v) {
      if (!v) {
        return momentMini(m).toNumber() === this.toNumber();
      }
      return momentMini(m)[v]() === this[v]();
    },
    toString() {
      return this.toNumber().toString();
    },
    toNumber() {
      if (!this.isValid()) {
        return NaN;
      }
      return this.numberDate;
    },
    month() {
      return this._date.getMonth();
    },
    day() {
      return this._date.getDay();
    },
    date() {
      return this._date.getDate();
    },
    getDateInt() {
      if (!this.isValid()) {
        return NaN;
      }
      return parseInt(this.format('YYYYMMDD'), 10);
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
  }
  if (date === null) {
    return buildDate(new Date());
  }
  // caso date = any, fotmat
  if (format && format instanceof Array) {
    return buildDate(format.find(f => fecha.parse(date, f)));
  }
  if (format) {
    return buildDate(fecha.parse((date || '').toString(), format));
  }
  if (Object.prototype.toString.call(date) === '[object Date]') {
    return buildDate(date);
  }
  if (typeof date === 'object') {
    return buildDate(new Date(date.valueOf()));
  }
  if (typeof date === 'number') {
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
