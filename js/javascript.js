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
    // $("#product-pic").click(function () {
    //     $(".product-a").hide(1500).toggle();
    //     $("#product-pic").slideUp();
    // });
    // $(".product-a").click(function () {
    //     $("#product-pic").slideDown();
    //     $(".product-a").hide();
    // })

    // $("#development-pic").click(function () {
    //     $(".development-a").hide(1500).toggle();
    //     $("#develop-pic").slideUp();
    // });
    // $(".development-a").click(function () {
    //     $("#development-pic").slideDown();
    //     $(".development-a").hide();
    // })



});