var Links = {
    setColor:function(color){
//       var alist = document.querySelectorAll('a')
//           var i=0;
//           while(i < alist.length){
//           alist[i].style.color= color;
//           i=i+1;
//     }주석처리한 부분과 똑같은 것을 jQuery로 쓰면 아래와 같다.
$('a').css('color', color);
  } 
}
  var Body = {
      setColor:function(color){
       // document.querySelector('body').style.color=color;
        $('body').css('color', color);
    },
      setBackgroundColor:function(color){
       // document.querySelector('body').style.backgroundColor=color;
       $('body').css('backgroundColor', color);
    }
    }

  function nightDayHandler(self){
  var target=document.querySelector('body');
    if (self.value === 'night') {
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';

      Links.setColor('powderblue');
    }

    else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';

      Links.setColor('blue');

    }
    
  }