

// functions
//for code
let myHexColor = function () {
   let hexCode = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
   let color = '#';
   for (let i = 0; i < 6; i++){
      let ramdNumber = Math.round(Math.random() * 15)
      let code = hexCode[ramdNumber]
      color += code 
   }
   if (color.length>7) {
      alert(`${color} is not a valid Hex code!`)
   } else {
      let body = document.getElementById('myBody')
      body.style.backgroundColor = color
      let show = document.getElementById('hexShow')
      show.style.color = color
      show.value = color
   }
   console.log(color);
}

 let copy = function () {
   let show = document.getElementById('hexShow')
   let copyMsg = document.getElementById('cpMsg')
   
   show.select()
   document.execCommand('copy')
   copyMsg.style.display = 'block'
   setTimeout(()=>{
      copyMsg.style.display = 'none'
   },500)
   
}
//for copy
// let hex =  myHexColor

// addEventListeners

//for code genarate
let eventFier = document.getElementById('myButton')
eventFier.addEventListener('click', myHexColor)
// for copy
let show = document.getElementById('hexShow')
show.addEventListener('click',copy)

