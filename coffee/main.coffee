window.Game = Game = require 'chinese_chess'

cellSize = 55
strokeWidth = 2.5
game = new Game
board = null

window.drawBoard = ->
  $('.test-board').html ''
  board = new XiangqiViewer.Board '.test-board', cellSize, strokeWidth, false
  for location, piece of game.position
    board.place [placement(location, piece)]

getCode = (piece) ->
  if piece.type is 'Chariot' then return 'r'
  if piece.type is 'Horse' then return 'h'
  if piece.type is 'Elephant' then return 'e'
  if piece.type is 'Advisor' then return 'a'
  if piece.type is 'General' then return 'k'
  if piece.type is 'Soldier' then return 'p'
  if piece.type is 'Cannon' then return 'c'

placement = (location, piece) ->
  code: getCode piece
  red: piece.color is 'red'
  file: location[0]
  rank: 9 - location[2]

$ ->
  drawBoard()
