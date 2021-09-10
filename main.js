var SELECTEDTINDER = "";
var SELECTEDSLIKES = "";
var SELECTEDBOOSTS = "";

function FADJ() {
  var BWIDTH;

  BWIDTH = $("body").width();

  if (BWIDTH > 575.98) {
    var TTOP1, TTOP2, TBOT;
    TTOP2 = $(".TT2").height();
    TBOT = $(".tinder-bot").height();
    TTB = TTOP2 + TBOT + 1;
    $(".FLICK2").css("margin-top", TTOP2 + "px");
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(812px - " + TTB + "px)")
  } else {
    var TTOP1, TTOP2, TBOT;
    TTOP1 = $(".TT1").height();
    TBOT = $(".tinder-bot").height();
    TTB = TTOP1 + TBOT + 1;
    $(".FLICK2").css("margin-top", TTOP1 + "px");
    $(".FLICK2").css("margin-bottom", TBOT + "px");
    $(".FLICK2").css("height", "calc(100vh - " + TTB + "px)")
  }
}

function F1() {
  if ($("#tinder-ep").val().length < 1) {
    alert("Make sure to type in your Tinder Email/phone number.")
  } else {
    $(".T1").fadeOut(1500);
    setTimeout(function() {
      $(".T2").fadeIn(1500);
    }, 1500)
  }
}

function F2() {
  $(".T2").fadeOut(1500);
  setTimeout(function() {
    $(".T3").fadeIn(1500);
  }, 1500)
}

function F3() {
  $(".T3").fadeOut(1500);
  setTimeout(function() {
    $(".T4").fadeIn(1500);

    var BAR = new ProgressBar.Line(PRO, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 25000,
    color: '#000',
    trailColor: '#fff',
    trailWidth: 5,
    svgStyle: {width: '100%', height: '100%'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#fff',
        right: '0',
        top: '30px',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    step: (state, BAR) => {

      var CUR = Math.round(BAR.value() * 100);

      console.log("xD " + CUR)

      var TEX = "";

      if (CUR < 8) {
        TEX = "Connecting with your <span class='t-normal'>Tinder account</span>...";
      } else if (CUR >= 8 && CUR < 32) {
        TEX = "Adding <span class='t-normal'>Tinder " + SELECTEDTINDER + "</span> membership...";
      } else if (CUR >= 32 && CUR < 64) {
        TEX = "Adding <span class='t-normal'>" + SELECTEDSLIKES + " Super Likes</span> and <span class='t-normal'>" + SELECTEDBOOSTS + " Boosts</span>...";
      } else if (CUR >= 64 && CUR < 96) {
        TEX = "Saving all changes...";
      } else if (CUR >= 96) {
        TEX = "Error, bot detected! Pass human verification to continue. <br><span class='t-normal'>After finishing restart your Tinder to see all changes.</span>";
        $(".VB").fadeIn(1500);
      }

      BAR.setText(TEX);

    }
  });

    BAR.animate(1);

  }, 1500)
}

$(function() {
  FADJ();

  var SLslider = document.getElementById("SLslider");

  var Bslider = document.getElementById("Bslider");

  noUiSlider.create(SLslider, {
    start: 250,
    connect: [true, false],
    step: 25,
    range: {
        min: 0,
        max: 500
    }
});

  noUiSlider.create(Bslider, {
    start: 50,
    connect: [true, false],
    step: 10,
    range: {
        min: 0,
        max: 100
    }
});

SLslider.noUiSlider.on('update', function (value) {
  var SLamount = parseInt(value[0]);
  SELECTEDSLIKES = SLamount;
  if (SLamount > 0) {
    $(".SLSLSL").removeClass("DFDFDF")
    $("#SLSL").text(SLamount);
  } else {
    $("#SLSL").text("No")
    $(".SLSLSL").addClass("DFDFDF")
  }

})

Bslider.noUiSlider.on('update', function (value) {
  var Bamount = parseInt(value[0]);
  SELECTEDBOOSTS = Bamount;
  if (Bamount > 0) {
    $(".BBB").removeClass("DFDFDF")
    $("#BB").text(Bamount);
  } else {
    $("#BB").text("No")
    $(".BBB").addClass("DFDFDF")
  }

})


})

$(window).resize(function() {
  FADJ();
})

$("#tinderSubscribtions").on("show.bs.collapse", function(e) {

    if (e.target.id == "Gold") {
        $(".CWITH").html("Continue with <GOLD>Gold</GOLD><img src='gold-2.png' class='inline-TINDER-30'>");
        SELECTEDTINDER = "Gold";
    } else {
        $(".CWITH").html("Continue with <PLUS>Plus</PLUS><img src='plus-2.png' class='inline-TINDER-30'>");
        SELECTEDTINDER = "Plus";
    }

    $(".CWITH").fadeIn(1500);

})
