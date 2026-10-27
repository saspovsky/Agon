import './style.css'

function App() {
	return (
		<>
			<div className="layout">
				<div className="header">
					<div>Крестики Нолики</div>
				</div>

				<div className="board">
					<div className="tic-tac-toe-field">
						<button className="tic-tac-toe-button">O</button>
						<button className="tic-tac-toe-button">X</button>
						<button className="tic-tac-toe-button"></button>
						<button className="tic-tac-toe-button"></button>
						<button className="tic-tac-toe-button"></button>
						<button className="tic-tac-toe-button"></button>
						<button className="tic-tac-toe-button"></button>
						<button className="tic-tac-toe-button"></button>
						<button className="tic-tac-toe-button"></button>
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
