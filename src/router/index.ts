import TicTacToeMatchPage from '@/games/tic-tac-toe/pages/TicTacToeMatchPage'
import TicTacToePlayPage from '@/games/tic-tac-toe/pages/TicTacToePlayPage'
import HomePage from '@/pages/HomePage'
import NotFoundPage from '@/pages/NotFoundPage'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
	{
		path: '/',
		Component: HomePage,
		children: [
			{
				path: 'games/tic-tac-toe/play',
				Component: TicTacToePlayPage,
			},
			{
				path: 'games/tic-tac-toe/matches/:matchId',
				Component: TicTacToeMatchPage,
			},
		],
	},
	{
		path: '*',
		Component: NotFoundPage,
	},
])
