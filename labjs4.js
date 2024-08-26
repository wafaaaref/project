var win;
  
  function openWindow(){
  win=open("https://www.linkedin.com/feed/","linkedin","_blank")
}

var inst;
function openWin(){
    
    setTimeout(openWindow,3000);
}




 function create() {
    var selecttag=document.getElementById("select")
    var content=document.getElementById("content")
    var createdElement =document.createElement(selecttag.value)
    if( selecttag.value== 'img') {
       createdElement .scr=content.value;
       document.body.appendChild(createdElement)
    } 
    else {
       createdElement.innerText=content.value;
      document.body.appendChild(createdElement)
     }
  
    }


