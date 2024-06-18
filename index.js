var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
    {
document.querySelectorAll(".drum")[i].addEventListener("click",
    function(){
      var inhtml=this.innerHTML;
      buttonanimi(inhtml);
      switch (inhtml) {
        case "w":
            var a=new Audio("./sounds/tom-1.mp3");
            a.play();
            break;
      
        case "a":
            var a=new Audio("./sounds/tom-2.mp3");
             a.play();
              break;
        case "s":
                var a=new Audio("./sounds/tom-3.mp3");
                a.play();
                break;
        case "d":
            var a=new Audio("./sounds/tom-4.mp3");
                    a.play();
                    break;
                  
        case "j":
            var a=new Audio("./sounds/crash.mp3");
            a.play();
            break;
        case "k":
                var a=new Audio("./sounds/snare.mp3");
                a.play();
                break;
        case "l":
                    var a=new Audio("./sounds/kick-bass.mp3");
                    a.play();
                    break;
       
          
                     
      }
    
    });
    }
document.addEventListener("keypress",function(evet)
{
   var d=evet.key;
   buttonanimi(d);
   switch (d) {
    case "w":
        var a=new Audio("./sounds/tom-1.mp3");
        a.play();
        break;
  
    case "a":
        var a=new Audio("./sounds/tom-2.mp3");
         a.play();
          break;
    case "s":
            var a=new Audio("./sounds/tom-3.mp3");
            a.play();
            break;
    case "d":
        var a=new Audio("./sounds/tom-4.mp3");
                a.play();
                break;
              
    case "j":
        var a=new Audio("./sounds/crash.mp3");
        a.play();
        break;
    case "k":
            var a=new Audio("./sounds/snare.mp3");
            a.play();
            break;
    case "l":
                var a=new Audio("./sounds/kick-bass.mp3");
                a.play();
                break;
}
});

function buttonanimi(letter)
{
   var let=document.querySelector("."+letter);
  let.classList.add("pressed");
  setTimeout(function(){
    let.classList.remove("pressed");
  },100);

}
