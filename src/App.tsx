import { useState } from 'react'
import './style.css'

function App() {
	const [isXTurn, setIsXTurn] = useState(false)
	const [buttons, setButtons] = useState(() => initButtons())

	function initButtons() {
		return Array(9)
			.fill(null)
			.map((_, itemIndex) => ({
				id: itemIndex,
				value: '',
			}))
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
		if (button.value === '') {
			setButtons((previousButtons) => {
				return previousButtons.map((item) => {
					return item.id === button.id
						? { ...item, value: isXTurn ? 'X' : 'O' }
						: item
				})
			})

			setIsXTurn(!isXTurn)
		}
	}

	return (
		<>
			<div className="layout">
				<div className="header">
					<div>Крестики Нолики</div>
				</div>

				<div className="board">
					<div className="tic-tac-toe-field">
						<ButtonsList />
					</div>
				</div>

				<div className="sidebar">
					<div>История ходов</div>
				</div>
			</div>
		</>
	)
}

export default App
