$(document).ready(function(){
  var sliders = $("#sliders");
  var antes = $("#antes");
  var despues = $("#despues");

$("#sliders figure:last").insertBefore("#sliders figure:first");
sliders.css("margin-left", "-"+100+"%");

function posicionAntes(){
  slider.animate({
    marginLeft:'-'+200+'%'
  } , 700, function(){
    $('#slider figure:first').insertAfter('#slider figure:last');
    slider.css('margin-left', '-'+100+'%');
  });
}

function posicionDespues(){
  sliders.animate({
    marginLeft:"-"+200+"%"
  }, 700, function(){
    $("#sliders figure:last").insertAfter("#sliders figure:firts");
    sliders.css("margin-left", "-"+100+"%");
  });
}

despues.on("click", function(){
    posicionAntes();
});

antes.on("click", function(){
    posicionDespues();
});
// SLIDER-AUMATIC
function automatic(){
  setInterval(function () {
  posicionDespues();
}, 7000);
}
automatic();
})
