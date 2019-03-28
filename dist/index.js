"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var fecha=_interopDefault(require("fecha"));fecha.i18n={dayNamesShort:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],dayNames:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],amPm:["am","pm"],DoFn:e=>{return["","ero","do","ero"][parseInt(e.toString().slice(0,-1),10)]||""}};const timeStrategyAdd={seconds:(e,t)=>e.setSeconds(e.getSeconds()+t),minutes:(e,t)=>e.setMinutes(e.getMinutes()+t),hours:(e,t)=>e.setHours(e.getHours()+t),days:(e,t)=>e.setDate(e.getDate()+t),months:(e,t)=>e.setMonth(e.getMonth()+t),years:(e,t)=>e.setFullYear(e.getFullYear()+t)};function buildDate(e){const t={format(e){return!!this.isValid()&&fecha.format(this._date.valueOf(),e)},isValid(){return!1!==this._date},diff(e=momentMini(),t="days"){const r=e.valueOf(),a=this._date.valueOf(),i=Math.abs(a-r),n={week:6048e5,days:864e5,hour:36e5,minutes:6e4,seconds:1e3},s=n[t]||n.days;return Math.floor(i/s)},isBefore(e=momentMini()){const t=e.valueOf();return this._date.valueOf()<t},isAfter(e=momentMini()){const t=e.valueOf();return this._date.valueOf()>t},isBetween(e=momentMini(),t=momentMini()){const r=this._date.valueOf(),a=e.valueOf(),i=t.valueOf();return r>=a&&r<=i},add(e,t="days"){return this.isValid()&&timeStrategyAdd[t]?(timeStrategyAdd[t](this._date,e),this.numberDate=this._date.valueOf(),this):this},subtract(e,t="days"){return this.add(-1*e,t)},isSame(e,t){return t?momentMini(e)[t]()===this[t]():momentMini(e).toNumber()===this.toNumber()},toString(){return this.toNumber().toString()},toNumber(){return this.isValid()?this.numberDate:NaN},month(){return this._date.getMonth()},day(){return this._date.getDay()},date(){return this._date.getDate()},getDateInt(){return this.isValid()?parseInt(this.format("YYYYMMDD"),10):NaN},valueOf(){return this.numberDate}};return!1===e||"Invalid Date"===e.toString()?Object.assign(t,{_date:!1,numberDate:!1}):Object.assign(t,{_date:e,numberDate:+e})}function momentMini(e,t=null){if(!1===e)return buildDate(!1);if(null===e)return buildDate(new Date);if(t&&t instanceof Array)return buildDate(t.find(t=>fecha.parse(e,t)));if(t)return buildDate(fecha.parse((e||"").toString(),t));if("[object Date]"===Object.prototype.toString.call(e))return buildDate(e);if("object"==typeof e)return buildDate(new Date(e.valueOf()));if("number"==typeof e)return buildDate(new Date(1e3*e));return buildDate(new Date)}module.exports=momentMini;
