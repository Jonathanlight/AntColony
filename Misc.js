//just general miscellaneous stuff -- set up env

var Misc = {
    elems: ["food_op", "size_op", "dep_op", "wall_op"],

    init: function () {
        // $(".switch").find("input[type=checkbox]").on("change", function () {

            console.log('plop')
        input[type=checkbox]:checked

        $("#butt").on("click", function() {

            this.elems.forEach(function(elem) {
                if ($("#"+elem).prop('checked')) {
                    switch (elem) {
                        case 'food_op':
                            $("div#food-coords").css("display", "hide");
                            break;
                        case 'size_op':
                            $("div#hgt-and-wdt").css("display", "hide");
                            break;
                        case 'dep_op':
                            $("div#dep-coords").css("display", "block");
                            break;
                        default:
                            $("div#walls-coords").css("display", "block");
                            break;
                    }
                }

            });
        });

    },
}

document.addEventListener("DOMContentLoaded", function() {
    var misc = Object.create(Misc);
    Misc.init();
});
