$( document ).ready(function() {
    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
        //$('.container-tc').addClass('fadeInUp');
        setTimeout(function() {
			$('#header .full-center, #song-suggest .header-body').addClass('fadeInUp');
		}, 200);
    });
    
    $('#header').parallax({
        imageSrc: '/assets/img/header.jpg',
        bleed: 50,
    });
    $('#confirmation').parallax({
        imageSrc: '/assets/img/form.jpg',
        naturalWidth: 2048,
        naturalHeight: 1365        
    });
    
    wow = new WOW(
      {
      boxClass:     'load-animate',      // default
      animateClass: 'animated', // default
    })
    wow.init();
    
    //Timer
    
    var countDownDate = new Date("Nov 26, 2017 16:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(hours < 10)
            hours = "0" + hours;
        if(minutes < 10)
            minutes = "0" + minutes;
        if(seconds < 10)
            seconds = "0" + seconds;

        // Output the result in an element with id="demo"
        $(".time-item").eq(0).find(".digits").text(days);
        $(".time-item").eq(1).find(".digits").text(hours);
        $(".time-item").eq(2).find(".digits").text(minutes);
        $(".time-item").eq(3).find(".digits").text(seconds);

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
    
    $("a[href^=#]").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
            
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        }
    });
    
    
    
});
        
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

function myMap() {
    var myCenter = new google.maps.LatLng(-34.605410, -58.363655);
    var mapProp = {center:myCenter, zoom:11, scrollwheel:false, draggable:true, mapTypeId:google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({position:myCenter});
    //var html = getMapHtml('map-1');
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
    });

    infowindow.open(map,marker);
    /*
    myCenter = new google.maps.LatLng(-34.587269, -58.409384);
    //mapProp = {center:myCenter, zoom:11, scrollwheel:true, draggable:true, mapTypeId:google.maps.MapTypeId.ROADMAP};
    //var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    marker = new google.maps.Marker({position:myCenter});
    html = getMapHtml('map-2');
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
      content:
            html
    });

    infowindow.open(map,marker);
    */
}

function getMapHtml(imageName) {
    var html = "";
    html += "<img src='/assets/img/" + imageName + ".jpg' alt='Mapa' style='width:100%;'/>";
    
    return html;
}

