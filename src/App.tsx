import { useState } from 'react'
import './style.css'

function App() {
	const [buttons, setButtons] = useState(() => initButtons())
	const [isXTurn, setIsXTurn] = useState(false)
	const [isHaveWinner, setIsHaveWinner] = useState(false)
	const [winner, setWinner] = useState('')
	const [isDraw, setIsDraw] = useState(false)
	const [history, setHistory] = useState(() => [])

	function initButtons() {
		return Array(9)
			.fill(null)
			.map((_, itemIndex) => ({
				id: itemIndex,
				value: '',
			}))
	}

	function GameTitle() {
		if (isHaveWinner) {
			return <div className="winner_title">{winner}</div>
		} else if (isDraw) {
			return <div className="draw_title">Draw</div>
		}

		return <div className="turn_title">Turn - {isXTurn ? 'X' : 'O'}</div>
	}

	function PlayButton() {
		function resetGame() {
			setButtons(() => initButtons())
			setIsXTurn(false)
			setIsHaveWinner(false)
			setWinner('')
			setIsDraw(false)
			setHistory(() => [])
		}

		return (
			<button className="play_button" onClick={resetGame}>
				Play!
			</button>
		)
	}

	function GameHistory() {
		const historyItems = history.map((item) => {
			return (
				<div key={item.value} className="item_wrapper">
					<div className="x_data">
						{item.turn === 'X' ? item.value : ''}
					</div>
					<div className="delimiter">|</div>
					<div className="o_data">
						{item.turn === 'O' ? item.value : ''}
					</div>
				</div>
			)
		})

		return <div className="history_wrapper">{historyItems}</div>
	}

	function ButtonsList() {
		const buttonsList = buttons.map((button) => (
			<button
				key={button.id}
				className="tic-tac-toe-button"
				onClick={(event) => handleClick(button)}
			>
				{button.value}
			</button>
		))

		return buttonsList
	}

	function handleClick(button: any) {
		if (isHaveWinner) {
			return
		}

		if (button.value !== '') {
			return
		}

		const updatedButtons = buttons.map((item) => {
			return item.id === button.id
				? { ...item, value: isXTurn ? 'X' : 'O' }
				: item
		})

		setButtons(updatedButtons)
		setIsXTurn(!isXTurn)

		setHistory([
			...history,
			{ turn: isXTurn ? 'X' : 'O', value: button.id + 1 },
		])

		checkWinningRules(updatedButtons)
		checkDrawRules(updatedButtons)
	}

	function checkWinningRules(currentButtons: any[]) {
		const winningRules = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[1, 4, 7],
			[2, 5, 8],
			[3, 6, 9],
			[1, 5, 9],
			[3, 5, 7],
		].map((combination) => {
			return combination.join('')
		})

		const myCombination = currentButtons
			.filter((button) => button.value === 'X')
			.map((button) => button.id + 1)
			.join('')
		const opponentCombination = currentButtons
			.filter((button) => button.value === 'O')
			.map((button) => button.id + 1)
			.join('')

		const isMyCombinationWinning =
			winningRules
				.map((rule) => myCombination.includes(rule))
				.filter(Boolean).length > 0
		const isOpponentCombinationWinning =
			winningRules
				.map((rule) => opponentCombination.includes(rule))
				.filter(Boolean).length > 0

		setIsHaveWinner(isMyCombinationWinning || isOpponentCombinationWinning)
		if (isMyCombinationWinning || isOpponentCombinationWinning) {
			setWinner(isMyCombinationWinning ? 'Победил Я' : 'Победил Оппонент')
		}
	}

	function checkDrawRules(currentButtons: any[]) {
		const isHaveEmptyButton =
			currentButtons.filter((button) => button.value === '').length > 0

		if (!isHaveEmptyButton) {
			setIsDraw(true)
		}
	}

	return (
		<>
			<div className="layout">
				<div className="header">
					<div>Крестики Нолики</div>
				</div>

				<div className="board">
					<div className="board_header">
						<div className="clock">00:00</div>
						<GameTitle />
						<div className="clock">00:00</div>
					</div>
					<div className="board_body">
						<div className="tic-tac-toe-field">
							<ButtonsList />
						</div>
					</div>
					<div className="board_footer">
						<PlayButton />
					</div>
				</div>

				<div className="sidebar">
					<div>История ходов</div>

					<GameHistory />
				</div>
			</div>
		</>
	)
}

export default App
