
///// HOVER SIDEBAR

$(".shared-area-1").hover(function(){
	$(".shared-area-1, .shared-area-1a").addClass("hovering")
}, function(){
	$(".shared-area-1, .shared-area-1a").removeClass("hovering")	
})

$(".shared-area-2").hover(function(){
	$(".shared-area-2, .shared-area-2a").addClass("hovering")
}, function(){
	$(".shared-area-2, .shared-area-2a").removeClass("hovering")	
})

$(".shared-area-3").hover(function(){
	$(".shared-area-3, .shared-area-3a").addClass("hovering")
}, function(){
	$(".shared-area-3, .shared-area-3a").removeClass("hovering")	
})

$(".shared-area-4").hover(function(){
	$(".shared-area-4, .shared-area-4a").addClass("hovering")
}, function(){
	$(".shared-area-4, .shared-area-4a").removeClass("hovering")	
})

$(".shared-area-5").hover(function(){
	$(".shared-area-5, .shared-area-5a").addClass("hovering")
}, function(){
	$(".shared-area-5, .shared-area-5a").removeClass("hovering")	
})

$(".shared-area-6").hover(function(){
	$(".shared-area-6, .shared-area-6a").addClass("hovering")
}, function(){
	$(".shared-area-6, .shared-area-6a").removeClass("hovering")	
})

$(".shared-area-7").hover(function(){
	$(".shared-area-7, .shared-area-7a").addClass("hovering")
}, function(){
	$(".shared-area-7, .shared-area-7a").removeClass("hovering")	
})


///// HOVER POST

$(".shared-area-1a").hover(function(){
	$(".shared-area-1, .shared-area-1a").addClass("hovering")
}, function(){
	$(".shared-area-1, .shared-area-1a").removeClass("hovering")	
})

$(".shared-area-2a").hover(function(){
	$(".shared-area-2, .shared-area-2a").addClass("hovering")
}, function(){
	$(".shared-area-2, .shared-area-2a").removeClass("hovering")	
})

$(".shared-area-3a").hover(function(){
	$(".shared-area-3, .shared-area-3a").addClass("hovering")
}, function(){
	$(".shared-area-3, .shared-area-3a").removeClass("hovering")	
})

$(".shared-area-4a").hover(function(){
	$(".shared-area-4, .shared-area-4a").addClass("hovering")
}, function(){
	$(".shared-area-4, .shared-area-4a").removeClass("hovering")	
})

$(".shared-area-5a").hover(function(){
	$(".shared-area-5, .shared-area-5a").addClass("hovering")
}, function(){
	$(".shared-area-5, .shared-area-5a").removeClass("hovering")	
})

$(".shared-area-6a").hover(function(){
	$(".shared-area-6, .shared-area-6a").addClass("hovering")
}, function(){
	$(".shared-area-6, .shared-area-6a").removeClass("hovering")	
})

$(".shared-area-7a").hover(function(){
	$(".shared-area-7, .shared-area-7a").addClass("hovering")
}, function(){
	$(".shared-area-7, .shared-area-7a").removeClass("hovering")	
})



///// HOVER LEFT AND RIGHT LINKS (MCLUHANCENTRE.CA)

$(".footer").hover(function(){
	$(".footer").addClass("hovering")
}, function(){
	$(".footer").removeClass("hovering")	
})




///// MOUSE POSITION COLOUR CHANGE

//////////// USING THE MOUSE SPEED EXAMPLE FROM SPARKLINES LIBRARY: https://omnipotent.net/jquery.sparkline/#s-about

//////////// The way that I've done this is brute force and awful because I couldn't figure out a way to assign the 'G' value in an element's RGB value the mouse speed variable (pps)... There has to be a way to concatenate that, right?!?


    var mrefreshinterval = 500; // update display every 500ms
    var lastmousex=-1; 
    var lastmousey=-1;
    var lastmousetime;
    var mousetravel = 0;
    var mpoints = [];
    var mpoints_max = 30;

    $("html").mousemove(function(e) {
        var mousex = e.pageX;
        var mousey = e.pageY;
        if (lastmousex > -1) {
            mousetravel += Math.max( Math.abs(mousex-lastmousex), Math.abs(mousey-lastmousey) );
        }
        lastmousex = mousex;
        lastmousey = mousey;
    });

    var mdraw = function() {
        var md = new Date();
        var timenow = md.getTime();

        if (lastmousetime && lastmousetime!=timenow) {
            var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
            mpoints.push(pps);
            if (mpoints.length > mpoints_max)
                mpoints.splice(0,1);
            mousetravel = 0;
            // $("#mousespeed").sparkline(mpoints, { width: mpoints.length*2, tooltipSuffix: ' pixels per second' });
        }

        lastmousetime = timenow;
        setTimeout(mdraw, mrefreshinterval);

		// console.log("mpoints: " + mpoints[mpoints.length-1]);
		// console.log("timenow: " + timenow);
		// console.log("lastmousetime: " + lastmousetime);
		console.log(pps);

		if (pps >= 1700) {
			$("body").css({'background-color':'rgb(255,255,0)', 'transition-duration':'0.4s'});
			// $(".footer a").css({'color':'rgb(0,0,0)'});
			// $(".footer:hover a").css({'color':'rgb(255,255,0)'});
			// $(".sidebar a").css({'color':'rgb(255,255,0)', 'transition-duration':'0.4s'});
			// $(".post").css({'background-color':'rgb(255,255,0)', 'transition-duration':'0.4s'});
			$(".letter").css({'background-color':'rgb(255,255,0)', 'transition-duration':'0.4s'});
			$(".counter-big").css({'background-color':'rgb(255,255,0)', 'transition-duration':'0.4s'});
			$(".counter-med").css({'background-color':'rgb(255,255,0)', 'transition-duration':'0.4s'});
			$(".counter-small").css({'background-color':'rgb(255,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-big").css({'background-color':'rgb(255,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-med").css({'background-color':'rgb(255,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-small").css({'background-color':'rgb(255,255,0)', 'transition-duration':'0.4s'});
        	console.log("Mouse speed is greater than (or equal to) 1700.");
        }
        if (pps >= 1450 && pps < 1700) {
			$("body").css({'background-color':'rgb(225,255,0)', 'transition-duration':'0.4s'});
			// $(".footer a").css({'color':'rgb(0,0,0)'});
			// $(".footer:hover a").css({'color':'rgb(225,255,0)'});
			// $(".sidebar a").css({'color':'rgb(225,255,0)', 'transition-duration':'0.4s'});
			// $(".post").css({'background-color':'rgb(225,255,0)', 'transition-duration':'0.4s'});
			$(".letter").css({'background-color':'rgb(225,255,0)', 'transition-duration':'0.4s'});
			$(".counter-big").css({'background-color':'rgb(225,255,0)', 'transition-duration':'0.4s'});
			$(".counter-med").css({'background-color':'rgb(225,255,0)', 'transition-duration':'0.4s'});
			$(".counter-small").css({'background-color':'rgb(225,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-big").css({'background-color':'rgb(225,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-med").css({'background-color':'rgb(225,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-small").css({'background-color':'rgb(225,255,0)', 'transition-duration':'0.4s'});
        	console.log("Mouse speed is between 1450 and 1699.");
        }
        if (pps >= 1200 && pps < 1450) {
			$("body").css({'background-color':'rgb(195,255,0)', 'transition-duration':'0.4s'});
			// $(".footer a").css({'color':'rgb(0,0,0)'});
			// $(".footer:hover a").css({'color':'rgb(195,255,0)'});
			// $(".sidebar a").css({'color':'rgb(195,255,0)', 'transition-duration':'0.4s'});
			// $(".post").css({'background-color':'rgb(195,255,0)', 'transition-duration':'0.4s'});
			$(".letter").css({'background-color':'rgb(195,255,0)', 'transition-duration':'0.4s'});
			$(".counter-big").css({'background-color':'rgb(195,255,0)', 'transition-duration':'0.4s'});
			$(".counter-med").css({'background-color':'rgb(195,255,0)', 'transition-duration':'0.4s'});
			$(".counter-small").css({'background-color':'rgb(195,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-big").css({'background-color':'rgb(195,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-med").css({'background-color':'rgb(195,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-small").css({'background-color':'rgb(195,255,0)', 'transition-duration':'0.4s'});
        	console.log("Mouse speed is between 1200 and 1449.");
        }
        if (pps >= 950 && pps < 1200) {
			$("body").css({'background-color':'rgb(165,255,0)', 'transition-duration':'0.4s'});
			// $(".footer a").css({'color':'rgb(0,0,0)'});
			// $(".footer:hover a").css({'color':'rgb(165,255,0)'});
			// $(".sidebar a").css({'color':'rgb(165,255,0)', 'transition-duration':'0.4s'});
			// $(".post").css({'background-color':'rgb(165,255,0)', 'transition-duration':'0.4s'});
			$(".letter").css({'background-color':'rgb(165,255,0)', 'transition-duration':'0.4s'});
			$(".counter-big").css({'background-color':'rgb(165,255,0)', 'transition-duration':'0.4s'});
			$(".counter-med").css({'background-color':'rgb(165,255,0)', 'transition-duration':'0.4s'});
			$(".counter-small").css({'background-color':'rgb(165,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-big").css({'background-color':'rgb(165,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-med").css({'background-color':'rgb(165,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-small").css({'background-color':'rgb(165,255,0)', 'transition-duration':'0.4s'});
        	console.log("Mouse speed is between 950 and 1199.");
        }
        if (pps >= 700 && pps < 950) {
			$("body").css({'background-color':'rgb(135,255,0)', 'transition-duration':'0.4s'});
			// $(".footer a").css({'color':'rgb(0,0,0)'});
			// $(".footer:hover a").css({'color':'rgb(135,255,0)'});
			// $(".sidebar a").css({'color':'rgb(135,255,0)', 'transition-duration':'0.4s'});
			// $(".post").css({'background-color':'rgb(135,255,0)', 'transition-duration':'0.4s'});
			$(".letter").css({'background-color':'rgb(135,255,0)', 'transition-duration':'0.4s'});
			$(".counter-big").css({'background-color':'rgb(135,255,0)', 'transition-duration':'0.4s'});
			$(".counter-med").css({'background-color':'rgb(135,255,0)', 'transition-duration':'0.4s'});
			$(".counter-small").css({'background-color':'rgb(135,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-big").css({'background-color':'rgb(135,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-med").css({'background-color':'rgb(135,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-small").css({'background-color':'rgb(135,255,0)', 'transition-duration':'0.4s'});
        	console.log("Mouse speed is between 700 and 949.");
        }
        if (pps >= 450 && pps < 700) {
			$("body").css({'background-color':'rgb(105,255,0)', 'transition-duration':'0.4s'});
			// $(".footer a").css({'color':'rgb(0,0,0)'});
			// $(".footer:hover a").css({'color':'rgb(105,255,0)'});
			// $(".sidebar a").css({'color':'rgb(105,255,0)', 'transition-duration':'0.4s'});
			// $(".post").css({'background-color':'rgb(105,255,0)', 'transition-duration':'0.4s'});
			$(".letter").css({'background-color':'rgb(105,255,0)', 'transition-duration':'0.4s'});
			$(".counter-big").css({'background-color':'rgb(105,255,0)', 'transition-duration':'0.4s'});
			$(".counter-med").css({'background-color':'rgb(105,255,0)', 'transition-duration':'0.4s'});
			$(".counter-small").css({'background-color':'rgb(105,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-big").css({'background-color':'rgb(105,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-med").css({'background-color':'rgb(105,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-small").css({'background-color':'rgb(105,255,0)', 'transition-duration':'0.4s'});
        	console.log("Mouse speed is between 450 and 699.");
        }
        if (pps >= 200 && pps < 450) {
			$("body").css({'background-color':'rgb(50,255,0)', 'transition-duration':'0.4s'});
			// $(".footer a").css({'color':'rgb(0,0,0)'});
			// $(".footer:hover a").css({'color':'rgb(50,255,0)'});
			// $(".sidebar a").css({'color':'rgb(50,255,0)', 'transition-duration':'0.4s'});
			// $(".post").css({'background-color':'rgb(50,255,0)', 'transition-duration':'0.4s'});
			$(".letter").css({'background-color':'rgb(50,255,0)', 'transition-duration':'0.4s'});
			$(".counter-big").css({'background-color':'rgb(50,255,0)', 'transition-duration':'0.4s'});
			$(".counter-med").css({'background-color':'rgb(50,255,0)', 'transition-duration':'0.4s'});
			$(".counter-small").css({'background-color':'rgb(50,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-big").css({'background-color':'rgb(50,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-med").css({'background-color':'rgb(50,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-small").css({'background-color':'rgb(50,255,0)', 'transition-duration':'0.4s'});
        	console.log("Mouse speed is between 200 and 449.");
        }
        if (pps < 200) {
			$("body").css({'background-color':'rgb(0,255,0)', 'transition-duration':'0.4s'});
			// $(".footer a").css({'color':'rgb(0,0,0)'});
			// $(".footer:hover a").css({'color':'rgb(0,255,0)'});
			// $(".sidebar a").css({'color':'rgb(0,255,0)', 'transition-duration':'0.4s'});
			// $(".post").css({'background-color':'rgb(0,255,0)', 'transition-duration':'0.4s'});
			$(".letter").css({'background-color':'rgb(0,255,0)', 'transition-duration':'0.4s'});
			$(".counter-big").css({'background-color':'rgb(0,255,0)', 'transition-duration':'0.4s'});
			$(".counter-med").css({'background-color':'rgb(0,255,0)', 'transition-duration':'0.4s'});
			$(".counter-small").css({'background-color':'rgb(0,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-big").css({'background-color':'rgb(0,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-med").css({'background-color':'rgb(0,255,0)', 'transition-duration':'0.4s'});
			$(".counter-rect-small").css({'background-color':'rgb(0,255,0)', 'transition-duration':'0.4s'});
        	console.log("Mouse speed is less than 200.");
        }
    }

    setTimeout(mdraw, mrefreshinterval);






