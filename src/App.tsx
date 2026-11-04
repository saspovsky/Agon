import '@/normalize.css'
import { router } from '@/router/index.ts'
import '@/styles/style.css'
import { RouterProvider } from 'react-router/dom'

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
