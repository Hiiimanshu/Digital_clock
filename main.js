function currentTime () {
    const date = new Date()
    const day = date.getDay()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    const month = date.getMonth()
    let currDate = date.getDate()
    const year = date.getFullYear()
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const showDay = document.querySelectorAll('.day_wrapper span')
    let midday = 'AM'
    midday = (hour >= 12) ? 'PM' : 'AM'
    hour = (hour === 0) ? 12 : ((hour > 12) ? (hour - 12) : hour)
    hour = updateTime(hour)
    min = updateTime(min)
    sec = updateTime(sec)
    currDate = updateTime(currDate)
  
    document.querySelector('#time').innerHTML = `${hour}:${min}`
    document.querySelector('#sec').innerHTML = `${sec}`
    document.querySelector('#med').innerHTML = `${midday}`
    document.querySelector('#full_date').innerHTML = `${monthName[month]} ${currDate} ${year}`
    showDay[day].getElementsByClassName.opacity = '1'
  }
  function updateTime (k) {
    if (k < 10) {
      return `0${k}`
    }
    return k
  }
  setInterval(currentTime, 1000)