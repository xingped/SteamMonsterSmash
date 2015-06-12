// ==UserScript==
// @name         Steam Monster Smash
// @namespace    https://github.com/xingped
// @version      0.1
// @description  enter something useful
// @author       xingped
// @match        http://steamcommunity.com/minigame/towerattack/
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

function clickMonsters() {
    var gameCanvas = $('#game_container canvas');
    
    // Left Mob
    var x_coord = 530;
    var y_coord = 530;
    gameCanvas.trigger(jQuery.Event( "mousedown", { pageX: x_coord, pageY: y_coord } ));
    gameCanvas.trigger(jQuery.Event( "mouseup", { pageX: x_coord, pageY: y_coord } ));
    
    // Bottom Mob
    x_coord = 635;
    y_coord = 580;
    gameCanvas.trigger(jQuery.Event( "mousedown", { pageX: x_coord, pageY: y_coord } ));
    gameCanvas.trigger(jQuery.Event( "mouseup", { pageX: x_coord, pageY: y_coord } ));
    
    // Right Mob
    x_coord = 800;
    y_coord = 530;
    gameCanvas.trigger(jQuery.Event( "mousedown", { pageX: x_coord, pageY: y_coord } ));
    gameCanvas.trigger(jQuery.Event( "mouseup", { pageX: x_coord, pageY: y_coord } ));
    
    // Center Mob
    x_coord = 650;
    y_coord = 380;
    gameCanvas.trigger(jQuery.Event( "mousedown", { pageX: x_coord, pageY: y_coord } ));
    gameCanvas.trigger(jQuery.Event( "mouseup", { pageX: x_coord, pageY: y_coord } ));
}

function clickRespawn() {
    if($('#player_dead_dialog').css('display') !== 'none' && $('#player_respawn_btn').css('display') !== 'none') {
        $('#player_respawn_btn').trigger('click');
    }
}

setInterval(clickMonsters, 50);
setInterval(clickRespawn, 500);

var ctx = $('#game_container canvas').getContext("2d");
ctx.strokeStyle = '#ff0000';
ctx.beginPath();
ctx.arc(530,390,40,0,2*Math.PI);
ctx.stroke();
