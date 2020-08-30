$(document).ready(function () {
    $("#design-pic").click(function () {
        $("#design-a").show();
        $("#design-pic").hide();

    });
    $("#design-a").click(function () {
        $("#design-pic").show();
        $("#design-a").hide();
    });
    $("#development-pic").click(function () {
        $("#development-a").show();
        $("#development-pic").hide();

    });
    $("#development-a").click(function () {
        $("#development-pic").show();
        $("#development-a").hide();
    });
    $("#product-pic").click(function () {
        $("#product-a").show();
        $("#product-pic").hide();
    });
    $("#product-a").click(function () {
        $("#product-pic").show();
        $("#product-a").hide();
    });
});

$(document).ready(function(){
    $('.nad').mouseover(function () {
          $('.project').show();
      }).mouseout(function () {
          $('.project').hide();
      });
    });
    $(document).ready(function(){
        $('.nad2').mouseover(function () {
              $('.project2').show();
          }).mouseout(function () {
              $('.project2').hide();
          });
        });