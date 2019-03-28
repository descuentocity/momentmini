/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
/* eslint no-use-before-define: ["error", { "functions": false }] */
import fecha from 'fecha';

fecha.i18n = {
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
  monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  amPm: ['am', 'pm'],
  // D is the day of the month, function returns something like...  3rd or 11th
  DoFn: (D) => {
    // D + ['', 'ero', 'do', 'ero'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10],
    const nDay = parseInt(D.toString().slice(0, -1), 10);
    const suffix = ['', 'ero', 'do', 'ero'];
    return suffix[nDay] || '';
  },
};

const timeStrategyAdd = {
  second: (d, n) => d.setSeconds(d.getSeconds() + n),
  minute: (d, n) => d.setMinutes(d.getMinutes() + n),
  hour: (d, n) => d.setHours(d.getHours() + n),
  day: (d, n) => d.setDate(d.getDate() + n),
  month: (d, n) => d.setMonth(d.getMonth() + n),
  year: (d, n) => d.setFullYear(d.getFullYear() + n),
};

class MomentMini {
  constructor(date) {
    this._setDate(new Date(date));
  }

  clone() {
    return new MomentMini(this.toNumber());
  }

  _setDate(date) {
    if (date === false || date.toString() === 'Invalid Date') {
      this._date = false;
      this.numberDate = false;
    } else {
      if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error(`esperaba que date sea un Date y es ${typeof date}${JSON.stringify(date)}`);
      }
      this._date = date;
      this.numberDate = (+date);
    }
  }

  isValid() {
    return this._date !== false;
  }

  toString() {
    return this.toNumber().toString();
  }

  toNumber() {
    if (!this.isValid()) {
      return NaN;
    }
    return this.numberDate;
  }

  valueOf() {
    return this._date;
  }

  set(func, v) {
    if (!this.isValid()) {
      return this;
    }

    const funcName = `set${func.charAt(0).toUpperCase()}${func.slice(1)}`;
    if (this._date[funcName]) {
      this._date[funcName](v);
    }
    this._setDate(this._date);

    return this;
  }

  add(increment, type = 'second') {
    if (!this.isValid()) {
      return this;
    }

    const fInc = timeStrategyAdd[type] || timeStrategyAdd.second;
    fInc(this._date, increment);
    this._setDate(this._date);

    return this;
  }

  subtract(decrement, type = 'second') {
    if (!this.isValid()) {
      return this;
    }

    const fInc = timeStrategyAdd[type] || timeStrategyAdd.second;
    fInc(this._date, decrement * -1);
    this._setDate(this._date);

    return this;
  }

  isSame(m, v) {
    if (!v) {
      return momentMini(m).toNumber() === this.toNumber();
    }
    return momentMini(m)[v]() === this[v]();
  }

  month() {
    return this._date.getMonth();
  }

  day() {
    return this._date.getDay();
  }

  date() {
    return this._date.getDate();
  }

  format(f) {
    if (!this.isValid()) {
      return false;
    }
    return fecha.format(this._date.valueOf(), f);
  }

  getDateInt() {
    if (!this.isValid()) {
      return NaN;
    }

    return parseInt(this.format('YYYYMMDD'), 10);
  }
}

function momentMini(date, format = null) {
  if (date === false) {
    return new MomentMini(false);
  } else if (date === null) {
    return new MomentMini(new Date());
  }

  // caso date = any, fotmat
  if (format && format instanceof Array) {
    return new MomentMini(format.find(f => fecha.parse(date, f)));
  } else if (format) {
    return new MomentMini(fecha.parse(date, format));
  } else if (Object.prototype.toString.call(date) === '[object Date]') {
    return new MomentMini(date);
  } else if (typeof date === 'object') {
    return new MomentMini(date.valueOf());
  } else if (typeof date === 'number') {
    return new MomentMini(new Date(date * 1000));
  }

  const dateObj = new Date();
  return new MomentMini(dateObj);
}


/**
 * factory para el moment mini
 * @param  number|string date          fecha en string o timestamp en ms
 * @param  detalle del fromato de date [format=null] [description]
 * @return {[MomentMini]}               [description]
 */
export default momentMini;
