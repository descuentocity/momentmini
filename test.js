import moment from './src/index';


const momentInstance1 = moment('2019-01-31 12:00:00', 'YYYY-MM-DD hh:mm:ss');
const momentInstance2 = moment('2018-01-31 12:00:00', 'YYYY-MM-DD hh:mm:ss');
const momentInstance3 = moment('2019-03-10 12:34:12', 'YYYY-MM-DD hh:mm:ss');
const momentInstance4 = moment('2019-10-09 12:00:00', 'YYYY-MM-DD hh:mm:ss');



console.log(momentInstance1.month());
console.log(momentInstance2.month());
console.log(momentInstance3.month());
console.log(momentInstance4.month());
