$(document).ready(function () {
    var services = ["design", "development", "product"]
    services.forEach(function (service) {
        $("#" + service).click(function () {
            $("#" + service).hide();
            $("#" + service + "-a").show();
        });

        $("#" + service + "-a").click(function () {
            $("#" + service).show();
            $("#" + service + "-a").hide();
        });
    });
    for (let i = 1; i < 9; i++) {
        $(".nad" + i).mouseover(function () {
            $(".project" + i).show();
        });
        $(".nad" + i).mouseout(function () {
            $(".project" + i).hide();
        });
    };
});

function contact(form) {
    var name = document.forms["form2"]["name"].value;
    var email = document.forms["form2"]["email"].value;
    var message = document.forms["form2"]["message"].value;
    alert("Hello! " + name + "," + " We have received your message. Thank you for reaching out to us. ");
};