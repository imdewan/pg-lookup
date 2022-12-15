//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages/home';
import NavBarHead from './nav';
import About from './pages/about';
import Login from './pages/login';


function App() {
return (
	<Router>
	<NavBarHead />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/about' element={<About />} />
		<Route path='/login' element={<Login />} />
	</Routes>
	</Router>
);
}

export default App;
