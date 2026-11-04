import styles from '@/games/tic-tac-toe/styles/playStyles.module.css'

export default function TicTacToePlayPage() {
	return (
		<div className={styles.layout}>
			<div className={styles.header}>Agon.gg</div>

			<div className={styles.main}>
				<div>
               <h3>Размер поля</h3>
					<button>3x3</button>
					<button>4x4</button>
					<button>5x5</button>
					<button>6x6</button>
					<button>Dyn</button>
				</div>

				<div>
               <h3>Режим игры</h3>
					<button>На одном устройстве</button>
					<button>Против бота</button>
					<button>Рейтинговая играа</button>
				</div>

				<div>
               <h3>Контроль времени</h3>
					<button>1/4</button>
					<button>1/2</button>
					<button>3/4</button>
					<button>1</button>
					<button>1.5</button>
					<button>2</button>
				</div>

				<div>
               <h3>Добавочное время</h3>
					<button>0</button>
					<button>1</button>
					<button>2</button>
					<button>3</button>
					<button>4</button>
					<button>5</button>
				</div>

				<div>
               <h3>Сложность бота</h3>
					<button>Новичок</button>
					<button>Любитель</button>
					<button>Средний</button>
					<button>Продвинутый</button>
					<button>Эксперт</button>
					<button>Мастер</button>
				</div>

            <div>
               <h3>Сторона</h3>
					<button>Крестик</button>
					<button>Случайно</button>
					<button>Нолик</button>
				</div>
			</div>

			<div className={styles.footer}>
				<button>Играть!</button>
			</div>
		</div>
	)
}
