import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { FicheLogement } from './pages/FicheLogement';
import { Apropos } from './pages/Apropos';
import './style/base.scss';
import { ErrorPage } from './pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<Home />
				<Footer />
			</>
		),
		ErrorBoundary: ErrorPage,
	},
	{
		path: '/fichelogement/:id',
		element: (
			<>
				<Header />
				<FicheLogement />
				<Footer />
			</>
		),
	},
	{
		path: '/apropos',
		element: (
			<>
				<Header />
				<Apropos />
				<Footer />
			</>
		),
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') ??
		(() => {
			throw new Error('Root element as not been found');
		})()
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
