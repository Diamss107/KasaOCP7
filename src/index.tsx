import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { FicheLogement } from './pages/FicheLogement';
import { Apropos } from './pages/Apropos';
import './style/base.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') ??
		(() => {
			throw new Error('Root element as not been found');
		})()
);
root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/fichelogement' element={<FicheLogement />} />
				<Route path='/apropos' element={<Apropos />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);
