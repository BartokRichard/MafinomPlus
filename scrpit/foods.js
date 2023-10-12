
    $(document).ready(function () {
        $('.choose h4').click(function (element) {
            
            var parent = $(element.target).closest("div.box");
            parent.find(".choose h4").removeClass('active');

            $(element.target).addClass('active');
 
            parent.find('.result.active').removeClass('active');

            parent.find('.result').eq($(this).index()).addClass('active');
        });
    });


    $(document).ready(function () {
    const dropDownIcon = $("#DropDown");
    const dropdownMenu = $("#dropdownMenu");

    // Show the dropDown menu
    dropDownIcon.on("click", function () {
        dropdownMenu.toggleClass("show");
    });

    // Hide the dropDown menu if the user clicks outside of it
    $(document).on("click", function (event) {
        if (!$(event.target).closest("#dropdownMenu") && !$(event.target).closest("#DropDown")) {
            dropdownMenu.removeClass("show");
        }
    });
});

$(document).ready(function () {
    // Checkboxok kiválasztása
    const glutenCheckbox = $("#glutenCheckbox");
    const lactoseCheckbox = $("#lactoseCheckbox");

    // Kártyák kiválasztása
    const glutenCards = $(".gf");
    const lactoseCards = $(".lf");

    // "OK" gomb kiválasztása
    const okButton = $("#okButton");

    // "OK" gomb lenyomásának kezelése
    okButton.on("click", function () {
        // Ellenőrizzük a "gluténmentes" és "laktózmentes" checkboxok állapotát
        const isGlutenChecked = glutenCheckbox.is(":checked");
        const isLactoseChecked = lactoseCheckbox.is(":checked");

        // Ha mindkét checkbox üres, akkor megjelenítjük az összes kártyát
        if (!isGlutenChecked && !isLactoseChecked) {
            $(".flip_card_inner").show();
        } else {
            // Ellenkező esetben elrejtjük az összes kártyát
            $(".flip_card_inner").hide();

            // Ha mindkét checkbox ki van jelölve, akkor csak azokat jelenítjük meg, amelyek "gf" és "lf" osztállyal rendelkeznek
            if (isGlutenChecked && isLactoseChecked) {
                $(".gf.lf").show();
            }
            // Ha csak a "gluténmentes" checkbox van kiválasztva, akkor csak az "gf" osztállyal rendelkező elemeket jelenítjük meg
            else if (isGlutenChecked) {
                glutenCards.show();
            }
            // Ha csak a "laktózmentes" checkbox van kiválasztva, akkor csak az "lf" osztállyal rendelkező elemeket jelenítjük meg
            else if (isLactoseChecked) {
                lactoseCards.show();
            }
        }
    });
});

