Game = require 'chinese_chess'

$boardEl = null
cellSize = 55
strokeWidth = 2.5
game = new Game
board = null
selectedPiece = null

drawBoard = ->
  $boardEl.html ''
  board = new XiangqiViewer.Board '.test-board', cellSize, strokeWidth, false
  for coordinates, piece of game.position
    board.place [placement(coordinates, piece)]

getCode = (piece) ->
  if piece.type is 'Chariot' then return 'r'
  if piece.type is 'Horse' then return 'h'
  if piece.type is 'Elephant' then return 'e'
  if piece.type is 'Advisor' then return 'a'
  if piece.type is 'General' then return 'k'
  if piece.type is 'Soldier' then return 'p'
  if piece.type is 'Cannon' then return 'c'

placement = (coordinates, piece) ->
  code: getCode piece
  red: piece.color is 'red'
  file: coordinates[0]
  rank: 9 - coordinates[2]

getCoordinates = (position) ->
  "#{position.file},#{9 - position.rank}"

getPosition = (coordinates) ->
  file: coordinates[0]
  rank: 9 - coordinates[2]

$ ->
  $boardEl = $ '.test-board'
  drawBoard()

  $(document.body).on 'click', (event) ->
    $boardEl.find('circle').remove()
    $el = $ event.target
    rank = $el.data 'rank'
    file = $el.data 'file'
    if !Number(rank) or !Number(file)
      selectedPiece = null
      return true
    position = rank: rank, file: file
    coordinates = getCoordinates position
    legalMoves = game.legalMoves
    if $el.data 'highlight'
      return false unless selectedPiece 
      return false if selectedPiece.square.coordinates is coordinates
      game.move selectedPiece.square.coordinates, coordinates
      drawBoard()
      if game.isCheckmate
        alert 'checkmate'
      else if game.position.isCheck
        alert 'check'
    else
      if !legalMoves[coordinates]
        selectedPiece = null
        return false
      selectedPiece = game.position[coordinates]
      board.highlight position
      for move in legalMoves[coordinates]
        board.highlight getPosition(move)
