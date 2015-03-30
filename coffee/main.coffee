Game = window.Game = require 'chinese_chess'

$ ->
  board = new XiangqiViewer.Board '.test-board', 55, 2.5, false
  board.defaultSetup()
