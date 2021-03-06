
function dayOfWeekApprev(dateNum){
  dayNames = ['Su','M','T','W',
  'R','F','Sa'];
  return dayNames[dateNum];
}

function refreshExpiredPage(data){
  if(data.toString().indexOf("<!DOCTYPE html>")>=0){
      location.reload();
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function dayOfWeekFull(dateNum){
  dayNames = ['Sunday','Monday','Tuesday','Wednesday',
  'Thursday','Friday','Saturday'];
  return dayNames[dateNum];
}

function dayOfWeekApprevToFull(date){
  if(date=="Su"){
    return "Sunday";
  }
  else if(date=="M"){
    return "Monday";
  }
  else if(date=="T"){
    return "Tuesday";
  }
  else if(date=="W"){
    return "Wednesday";
  }
  else if(date=="R"){
    return "Thursday";
  } 
  else if(date=="F"){
    return "Friday";
  } 
  else if(date=="Sa"){
    return "Saturday";
  } 
}

function convertTime(time){
  timeArray = time.split(':');
  if(timeArray.length>0){
    hour = parseInt(timeArray[0])
    if(hour>12){
      hour = hour - 12;
      return hour+":"+timeArray[1] + " PM";
    }
    return hour+":"+timeArray[1] + " AM";
  }
  else{
    return time;
  }
}

function dayOfWeekApprevToNum(date){
  if(date=="Su"){
    return 0;
  }
  else if(date=="M"){
    return 1;
  }
  else if(date=="T"){
    return 2;
  }
  else if(date=="W"){
    return 3;
  }
  else if(date=="R"){
    return 4;
  } 
  else if(date=="F"){
    return 5;
  } 
  else if(date=="Sa"){
    return 6;
  } 
}

function getNumberWithSuffix(number){
  if(number%10 == 1){
    return number + "st";
  }
  else if(number%10 == 2){
    return number + "nd";
  }
  else if(number%10 == 3){
    return number + "rd";
  }
  else{
    return number + "th";
  }
}

function getMonthFull(date){
  monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  return monthNames[date];
}

function unique(arr) {
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}

function removeElement(arr, item) {
    for(var i = arr.length; i--;) {
        if(arr[i] === item) {
            arr.splice(i, 1);
        }
    }
}

function loadBanner(data){
  if(data == null){
    $.getJSON("json/rest/member/getLoggedInUserInfo",function(userData){
        data = userData.statements;
        updateBanner(data);
    })
  }
  else{
    updateBanner(data);
  }
}

function updateBanner(data){
    refreshExpiredPage(data);
    $('#accountName').html(data.fn + "'s Account<span class='caret'></span>");
    $('#leftLogo').prop('src', '../../demo/css/images/hiskingdomlogoonlysmall.png');
}