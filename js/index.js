function showflipedcart(){
    let display=document.getElementById("form-container").style.display;
    if(display=="none")
    document.getElementById("form-container").style.display="block";
    else
    document.getElementById("form-container").style.display="none";
}

var i = 0; 			
var images = [];
var time = 3000;
images[0] = "images/weighted-squat-exercise_4460x4460.jpg";
images[1] = "images/core-strength-workout_4460x4460.jpg";
images[2] = "images/kicking-workout_4460x4460.jpg";
var ii = 0; 			
var ttime = 3000;
var words= [];
words[0] = "New Arrivals";
words[1] = "Don't miss it";
words[2] = "Harry up";

function changeImg(){
$("#form-container").flip();
document.imagesslider.style.width="100%";
document.imagesslider.style.height="100%";
	document.imagesslider.src = images[i];
	if(i < images.length - 1){
	  i++; 
	} else { 
		i = 0;
    }
    document.getElementById("arrivals1").innerHTML = words[ii];
    document.getElementById("arrivals2").innerHTML = words[ii];
    document.getElementById("arrivals3").innerHTML = words[ii];
    document.getElementById("arrivals4").innerHTML = words[ii];
    document.getElementById("arrivals5").innerHTML = words[ii];
    document.getElementById("arrivals6").innerHTML = words[ii];
    document.getElementById("arrivals7").innerHTML = words[ii];
	if(ii < words.length - 1){
	  ii++; 
	} else { 
		ii = 0;
    }
   
	setTimeout("changeImg()", time);
}
window.onload=changeImg;


/*********show the fliped cart ******************* */


/********************************************************* */
$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});


$(window).scroll(function(){
    if ($(this).scrollTop() > 300) { // 300px from top
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});
// When the user clicks on the button, scroll to the top of the document
//Click event to scroll to top

function tothetop(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
}

/*review carousal **/
$(document).ready(function () {
    //rotation speed and timer
    var speed = 5000;
    
    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button
    slides.width(item_width); //set the slides to the correct pixel width
    container.parent().width(item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();
    
    
    //if user clicked on prev button
    
    $('#buttons a').click(function (e) {
      //slide the item
      
      if (container.is(':animated')) {
        return false;
      }
      if (e.target.id == previous) {
        container.stop().animate({
          'left': 0
        }, 1500, function () {
          container.find(elm + ':first').before(container.find(elm + ':last'));
          resetSlides();
        });
      }
      
      if (e.target.id == next) {
        container.stop().animate({
          'left': item_width * -2
        }, 1500, function () {
          container.find(elm + ':last').after(container.find(elm + ':first'));
          resetSlides();
        });
      }
      
      //cancel the link behavior      
      return false;
      
    });
    
    //if mouse hover, pause the auto rotation, otherwise rotate it  
    container.parent().mouseenter(function () {
      clearInterval(run);
    }).mouseleave(function () {
      run = setInterval(rotate, speed);
    });
    
    
    function resetSlides() {
      //and adjust the container so current is in the frame
      container.css({
        'left': -1 * item_width
      });
    }
    
  });
  //a simple function to click next link
  //a timer will call this function, and the rotation will begin
  
  function rotate() {
    $('#next').click();
  }