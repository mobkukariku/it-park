import { Toaster } from 'react-hot-toast'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CoursesPage from './pages/CoursesPage'
import MainPage from './pages/MainPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
	return (
		<Router>
			<Toaster />
			<Navbar />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/courses' element={<CoursesPage />} />
				<Route path='/projects' element={<ProjectsPage />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
