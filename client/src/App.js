import React from 'react';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './screens/home';
import Login from './screens/login';


function App() {
return (
	<Router>
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/login' element={<Login />} />
	</Routes>
	</Router>
);
}

export default App;
