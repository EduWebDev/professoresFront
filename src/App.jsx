import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Professores from './pages/Professores.jsx'
import Professor from './pages/Professor.jsx'

function App() {
return (
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/professores' element={<Professores/>}/>
				<Route path='/professor/:id' element={<Professor/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
)
}

export default App
