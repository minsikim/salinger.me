//following 2 is the same
//all inside will start right after browser inits DOM
// $(document).ready(function(){
//
// });
//
// $(function(){
//
// });


$(function(){
//BASIC SELECTORS
  // $('somthingtoselect').css('css lines') -> ex
  // $('body *').css('border', '4px solid red')

//BASIC ANIMATIONS
  $('.fix-nav').hide(500).delay(300).show(800);
  // $('#background').css('height', $(window).height());
  // $('.fix-nav').delay(800).show(800);
  $('.main-title').slideUp(800).show(800);
  $('.content-box').fadeOut(800).slideDown(800);
  //big animation method
  //animate({css-property: 'value', ...}, duration(for how long) millisec)
  $('.content-box').animate({height: '200px'}, 1000)
//INDEX FILTERS
  //:gt,lt(n) => order greater that/ less than
  //:e(n) => equal to (starts with 0), duration not work with color
  $('.content-box:eq(1) .title').css({color: 'red'}, 1000);
//RELATIONSHIP FILTERS
  //has(a:has(b))searches only the direct children of a,
  //and checkes where b is and changes a
  //MORE : :not()
  $('.head-row:has(.fix-nav)').css({color: 'grey'}, 1000);
  $('.content-box:empty').css({height:'100px','border':'4px solid white'});
//ATTRIBUTE FILTERS
  //$('a[b=c]') any 'a's that have attribute b of value c;
  // $('div[class^="tag"]').css(); //^ => divs that starts with 'tag' in class name
  // $('div[href$=".com"]').css(); //$ => ends with
  //MORE :
  //[attr!='value'] not
  //[attr|='value'] start or is
  //[attr*='value'] has in
  //:input	$(":input")	All input elements
  //:text	$(":text")	All input elements with type="text"
  //:password	$(":password")	All input elements with type="password"
  //:radio	$(":radio")	All input elements with type="radio"
  //:checkbox	$(":checkbox")	All input elements with type="checkbox"
  //:submit	$(":submit")	All input elements with type="submit"
  //:reset	$(":reset")	All input elements with type="reset"
  //:button	$(":button")	All input elements with type="button"
  //:image	$(":image")	All input elements with type="image"
  //:file	$(":file")	All input elements with type="file"
  //:enabled	$(":enabled")	All enabled input elements
  //:disabled	$(":disabled")	All disabled input elements
  //:selected	$(":selected")	All selected input elements
  //:checked	$(":checked")	All checked input elements

//CHANGE THE ATTRIBUTE WITH $('selector').attr('attr-name', 'value');
  alert($('img').attr('scr'));
  $('img').attr('scr', '/logo76.png');

});
