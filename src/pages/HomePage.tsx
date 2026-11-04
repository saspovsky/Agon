import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'

export default function HomePage() {
	const navigate = useNavigate()

	useEffect(() => {
		navigate('/games/tic-tac-toe/play')
	})

	return (
		<>
			<Outlet />
		</>
	)
}
