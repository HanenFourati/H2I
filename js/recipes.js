
let i=1;
function vis(){
let r=document.getElementById('loadMore').innerHTML;
 //if (r==="<i class=\"fa fa-spinner fa-spin\"></i>"+"Load More Items"){ 
   $('.boxmore'+i).slideDown("slow");
   i++;
   if(i>2)
     {document.getElementById('loadMore').innerHTML = "<i class=\"fa fa-spinner fa-spin\"></i>"+"Load Less Items";}
    if (r==="<i class=\"fa fa-spinner fa-spin\"></i>"+"Load Less Items") {
    $('.boxmore2').slideUp("slow");
    document.getElementById('loadMore').innerHTML = "<i class=\"fa fa-spinner fa-spin\"></i>"+"Load More Items";
    i=2;
  }
}
function changeColor(i)
{
   var icon = document.getElementById('heart'+i);
   if(icon.style.color != "red")
   icon.style.color = "red";
   else 
   icon.style.color="rgb(212, 209, 209)";          
}
function ccc(i){
  $("#pop"+i.toString()).on("click", function() {
    let title= document.getElementById("title"+i.toString()).innerHTML;
    let titlemodel= document.getElementById("titleofitem");
    let discription= document.getElementById("description"+i.toString()).innerHTML;
    let discriptionmodel= document.getElementById("itemdiscription");
    $('#imagepreview').attr('src', $('#imageresource'+i.toString()).attr('src'));
    titlemodel.innerHTML= title;
    discriptionmodel.innerHTML= discription;
    $('#imagemodal').modal('show');});}
  function reload()
  {location.load(); }
  
  function choose(k){
    if(k=='all')
    {
      $('.boxmore').show();
      $('.boxmore1').show();
      $('.boxmore2').show();
      document.getElementById('loadMore').style.display= "none"; 
    }
    else {
    $('.boxmore').show();
    $('.boxmore1').show();
    $('.boxmore2').show();
    let catg=k.toString();
    let v= document.getElementsByClassName("grid-box");
    let vv= document.getElementsByClassName("grid-container-one");
    document.getElementById('loadMore').style.display= "none"; 
    vv[0].style.padding= "20px 0px 0px 0px"; 
    vv[1].style.padding= "10px 0px 0px 0px";
    vv[2].style.padding= "10px 0px 0px 0px"; 
    vv[3].style.padding= "10px 0px 0px 0px";
    vv[4].style.padding= "10px 0px 0px 0px";
   for (i = 0; i < v.length; i++) {
    let val=v[i].getAttribute("value");
     if(val!=catg)
      v[i].style.display="none";
      
      document.getElementById('photos').style.padding= "0px 0px 0px 0px";
    }
  }
  }
//window.addEventListener('load',() => document.querySelector('.preloader').classList.add('hide Preloader'));
function show(){
setTimeout('document.getElementById("preloader").style.display="none";', 1000);
}
$(window).scroll(function(){
  if ($(this).scrollTop() > 300) { // 300px from top
    $('.top').fadeIn();
  } else {
    $('.top').fadeOut();
  }
});
// When the user clicks on the button, scroll to the top of the document
//Click event to scroll to top
$('.top').click(function(){
  $('html, body').animate({scrollTop : 0},800);
  return false;
});
