import { useState, useEffect, useCallback } from 'react'

export const useGameStatus = ({ rowsCleared }) => {
  const [score, setScore] = useState(0)
  const [rows, setRows] = useState(0)
  const [level, setLevel] = useState(0)
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const calcScore = useCallback(() => {
    const linePoints = [40, 100, 300, 1200]
    if (rowsCleared > 0) {
      setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1))
      setRows(prev => prev + rowsCleared)
    }
  }, [level, rowsCleared])

  const resetGameStatus = () => {
    setScore(0)
    setLevel(0)
    setRows(0)
    setGameOver(false)
    setDropTime(1000)
  }

  const increaseSpeed = () => setDropTime(1000 / (level + 1) + 200)

  const increaseDificulty = () => {
    setLevel(prev => prev + 1)
    setDropTime(1000 / (level + 1) + 200)
  }

  const finishGame = () => {
    setGameOver(true)
    setDropTime(null)
  }

  const playerMoveDown = () => setDropTime(null)

  useEffect(() => {
    calcScore()
  }, [calcScore, rowsCleared, score])

  return { score, rows, level, resetGameStatus, increaseDificulty, increaseSpeed, finishGame, playerMoveDown, dropTime, gameOver }
}
