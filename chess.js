var page = new tabris.Page({
  topLevel: true
});

tabris.ui.set("toolbarVisible", false);

var numb = 0;
var num = 0;
var top = 2;
var left = "prev() 2";
var back = "white";
var red = "transparent";
var on = 0;

var time = setInterval(CreateCreateCell, 0);

var comp = new tabris.Composite({
  layoutData:{height: 350, width: 350, centerX: 0, centerY: 0},
  background: "black"
}).appendTo(page);

function createCell(text, widget){
 var cell = new tabris.Composite({
  layoutData: {height: 41.5, width: 41.5, top: top, left: left},
  background: back
 }).on("tap", function(widget){
}).appendTo(comp);
 var i = new tabris.TextView({
  text: num,
  textColor: "black",
  }).appendTo(cell);
  if (num == 59 || num == 62) {
    var bishopWhite = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_white_bishop_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
  if (num == 3 || num == 6) {
    var bishopBlack = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_black_bishop_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
   if (num >= 49 && num <= 56) {
    var pawnWhite = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_white_pawn_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
  if (num >= 9 && num <= 16) {
    var pawnBlack = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_black_pawn_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
   if (num == 60) {
    var queenWhite = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_white_queen_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
  if (num == 4) {
    var queenBlack = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_black_queen_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
  if (num == 61) {
    var kingWhite = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_white_king_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
  if (num == 5) {
    var kingBlack = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_black_king_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
  if (num == 58 || num == 63) {
    var knightWhite = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_white_knight_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
  if (num == 2 || num == 7) {
    var knightBlack = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_black_knight_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
  if (num == 57 || num == 64) {
    var rookWhite = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_white_rook_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
  if (num == 1 || num == 8) {
    var rookBlack = new tabris.ImageView({
      image: {src: "http://www.wpclipart.com/recreation/games/chess/chess_set_1/chess_piece_black_rook_T.png"},
      background: "transparent",
      highlightOnTouch: true
  }).on("tap", function(widget){
      redCell(widget)
    }).appendTo(cell)};
};
  
page.open();

function redCell(widget){
       if (back == "white" || back == "#CFD8DC") {
        if (red == "transparent" && on == 0) {
          red = "red"
        widget.set("background", red)
        on = 1
      } else {
        if (red == "red" && on == 1){
          red = "transparent"
          widget.set("background", red)
        on = 0
        }
       }
     }
}


function CreateCreateCell(widget){
if (numb == 0){
 for (var i = 1; i <= 1; i++)
  createCell(i + (++num))
  newRow(widget)
 }
}
function newRow(widget){
  if (num == 8 || num == 16 || num == 24 || num == 32 || num == 40 || num == 48 || num == 56){
 top = top + 43.5
 left = 2
  } else {
    top = top
    left = "prev() 2"
  }
 if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12 || num == 14 || num == 17 || num == 19 || num == 21 || num == 23 || num == 24 || num == 26 || num == 28 || num == 30 || num == 33 ||num == 35 || num == 37 || num == 39 || num == 40 || num == 42 || num == 44 || num == 46 || num == 49 || num == 51 || num == 53 || num == 55 || num == 56 || num == 58 || num == 60 || num == 62){
     back = "#CFD8DC"
     } else {
       back = "white"
 }
 if (num > 63) {
   clearInterval(time)
   numb = 1 
 }
}
