
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
    const glutenCheckbox = $("#glutenCheckbox");
    const lactoseCheckbox = $("#lactoseCheckbox");
    const vegetarianCheckbox = $("#vegetarianCheckbox");

    const glutenCards = $(".gf");
    const lactoseCards = $(".lf");
    const veganCards = $(".veg"); 

    const okButton = $("#okButton");

    okButton.on("click", function () {
        // Ellenőrizze, hogy van-e bármelyik checkbox kiválasztva
        const isGlutenChecked = glutenCheckbox.is(":checked");
        const isLactoseChecked = lactoseCheckbox.is(":checked");
        const isVegetarianChecked = vegetarianCheckbox.is(":checked");
        
        // Elrejti az összes kártyát
        $(".flip_card_inner").hide();

        // Választhatja azokat a kártyákat, amelyeknek mindkét osztályuk megvan
        if (isGlutenChecked && isLactoseChecked) {
            $(".gf.lf").show();
        } else if (isGlutenChecked) {
            glutenCards.show();
        } else if (isLactoseChecked) {
            lactoseCards.show();
        } else if (isVegetarianChecked) {
            veganCards.show();
        } else if (isVegetarianChecked && isLactoseChecked) {
            $(".veg.lf").show();
        } else if (isVegetarianChecked && isGlutenChecked) {
            $(".veg.gf").show();
        } else {
            // Ha nincs checkbox kiválasztva, akkor az összes kártya megjelenik
            $(".flip_card_inner").show();
        }
    });
});




