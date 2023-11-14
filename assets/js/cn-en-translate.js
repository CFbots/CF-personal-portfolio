$(document).ready(function () {
    /*Default Language*/
    var defaultLang = "en";
    $("[i18n]").i18n({
        defaultLang: defaultLang,
        filePath: "./assets/i18n/",
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true,
    });

    /*Language toggle*/
    $("#translate").click(function (e) {
        var lan = $(e.target).val() == "cn" ? "en" : "cn";
        $(e.target).val(lan);

        $("[i18n]").i18n({
            defaultLang: lan,
            filePath: "./assets/i18n/",
        });

    });

});
