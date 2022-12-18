import React from 'react';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './screens/home';
import Login from './screens/login';
import Form from './screens/form';
import Details from './screens/details';

function App() {
return (
	<Router>
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/login' element={<Login />} />
		<Route path='/form' element={<Form />} />
    <Route path='/details' element={<Details />} />
	</Routes>
	</Router>
);
}

export default App;
