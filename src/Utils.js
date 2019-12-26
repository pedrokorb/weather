export function convertUnixToTimestamp(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Janeiro',
    'Fevereiro', 
    'Março', 
    'Abril', 
    'Maio', 
    'Junnho', 
    'Julho', 
    'Agosto', 
    'Setembro', 
    'Outubro', 
    'Novembro', 
    'Dezembro'
  ];
  var year = a.getFullYear();  
  var month = months[a.getMonth()];
  var date = a.getDate().pad();
  var hour = a.getHours().pad();
  var min = a.getMinutes().pad();
  var sec = a.getSeconds().pad();
  var time = date + ' de ' + month + ' de ' + year + ', ' + hour + ':' + min + ':' + sec;
  return time;
}

Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}

export function isFifteenMinutesDifferent(dateA, dateB) {
  var a = new Date(dateA * 1000);
  var yearA = a.getFullYear();
  var monthA = a.getMonth();
  var dayA = a.getDate();
  var hourA = a.getHours();
  var minA = a.getMinutes();

  var b = new Date(dateB * 1000);
  var yearB = b.getFullYear();
  var monthB = b.getMonth();
  var dayB = b.getDate();
  var hourB = b.getHours();
  var minB = b.getMinutes();
  
  var diffYear = (yearB - yearA) * 525600 //minutes in each year
  var diffMonth = (monthB - monthA) * 43800 //minutes in each month
  var diffDay = (dayB - dayA) * 1440 //minutes in each day
  var diffHour = (hourB - hourA) * 60 // minutes in each hour
  var diffMin = (minB - minA)

  var differenceInMinutes = diffYear+diffMonth+diffDay+diffHour+diffMin
  console.log("Diferença em minutos", differenceInMinutes);
  if(differenceInMinutes < 15){
    return false
  } else {
    return true
  }
}
