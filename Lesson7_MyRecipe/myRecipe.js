/*

Program Name:   Recipe Display Application

Author:         Jiri Stanc

Date:           March 3, 2018

Filename:       myRecipe.js

*/


// displays ingredients

function display1() {
    $("h3:first").next().fadeToggle("fast");
}

$("h3:first").click(display1);


// displays instructions

function display2() {
    $("h3:last").next().fadeToggle("fast");
}

$("h3:last").click(display2);


// displays additional images

function display3() {
    $("h4").next().fadeToggle("fast");
}

$("h4").click(display3);




// hover effect for ingredients

$("h3:first").mouseenter(function(){
        $(this).css("background-color", "#04819E");
});

$("h3:first").mouseleave(function(){
        $(this).css("background-color", "#ffcc99");
});


// hover effect for instructions

$("h3:last").mouseenter(function(){
        $(this).css("background-color", "#04819E");
});

$("h3:last").mouseleave(function(){
        $(this).css("background-color", "#ffcc99");
});


// hover effect for images

$("h4").mouseenter(function(){
        $(this).css("background-color", "#04819E");
});

$("h4").mouseleave(function(){
        $(this).css("background-color", "#ffcc99");
});


