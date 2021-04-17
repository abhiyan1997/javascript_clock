var a;
var date;
var time;
var day;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

setInterval(() => {
a= new Date()
day= a.getDay()
date= a.toLocaleDateString(undefined, options);
time= a.getHours()+ ':' +a.getMinutes()+':'+a.getSeconds()
document.getElementById('time').innerHTML= time+ "<br> On " + date

}, 1000);
