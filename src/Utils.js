export function convertUnixToTimestamp(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();  
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
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
  
  var diffYear = (yearB - yearA)*525600 //minutes in each year
  var diffMonth = (monthB - monthA) * 43800 //minutes in each month
  var diffDay = (dayB - dayA)*1440 //minutes in each day
  var diffHour = (hourB - hourA)*60 // minutes in each hour
  var diffMin = (minB - minA)

  var differenceInMinutes = diffYear+diffMonth+diffDay+diffHour+diffMin

  console.log("Diferença em minutos",differenceInMinutes);
  
  
}
