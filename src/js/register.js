/**
 * Created by 919482722 on 2017/12/26.
 */

// $(".personal").hover(function () {
//         $(".personal").css({
//         "background-color":"#4c7bc9",
//         "background-image":"url(./images/personal-after.png)"
//     });
// },function () {
//         $(".personal").css({
//         "background-color":"#fff",
//         "border": "2px solid #4c7bc9",
//         "background-image":"url(./images/personal-before.png)"
//     });
// });
//
// $(".company").hover(function () {
//         $(".company").css({
//         "background-color":"#4c7bc9",
//         "background-image":"url(./images/company-after.png)"
//     });
// },function () {
//         $(".company").css({
//         "background-color":"#fff",
//         "border": "2px solid #4c7bc9",
//         "background-image":"url(./images/company-before.png)"
//     });
// });

$(".personal").click(function () {
    $(".personal").css({
        "background-color":"#4c7bc9",
        "background-image":"url(./images/personal-after.png)"
    });
    $(".company").css({
        "background-color":"#fff",
        "border": "2px solid #4c7bc9",
        "background-image":"url(./images/company-before.png)"
    });
});

$(".company").click(function () {
    $(".company").css({
        "background-color":"#4c7bc9",
        "background-image":"url(./images/company-after.png)"
    });
    $(".personal").css({
        "background-color":"#fff",
        "border": "2px solid #4c7bc9",
        "background-image":"url(./images/personal-before.png)"
    })
});

