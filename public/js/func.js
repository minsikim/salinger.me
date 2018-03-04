$('#menubar').click(function(){
  $('.dropdown').slideDown(function(){
    $('body').click(function(evt){
     if(evt.target.id == "menubar")
        return;
     else{
       $('.dropdown').slideUp();
     }
    });
  });
})
