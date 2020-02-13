import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom'
const App = () => {
return (
<div>
	<Route path="/" exact component={Home} />
	<Route path="/contact" exact component={Contact} />
	<Route path="/about" exact component={About} />

	<Navigation />
</div>
	);
	}
	export default App;