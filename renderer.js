// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

let url = "http://api.openweathermap.org/data/2.5/weather?q=Shizuoka,JP&appid=95e174d6ea9a1d5fae374dda3a11df23&units=metric";


// const request = net.request({
//   method: 'GET',
//   protocol: 'https:',
//   hostname: '',
//   port: 443,
//   path: url
// })


const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(function()  {

  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${(hh)+(mm/22)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;


}, 1000);
