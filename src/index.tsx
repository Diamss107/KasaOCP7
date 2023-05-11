import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { FicheLogement } from './pages/FicheLogement';
import { Apropos } from './pages/Apropos';
import 'normalize.css';
import './style/base.scss';
import { ErrorPage } from './pages/ErrorPage';
import { Layout } from './components/Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Home />
			</Layout>
		),
		ErrorBoundary: ErrorPage,
	},
	{
		path: '/fichelogement/:id',
		element: (
			<Layout>
				<FicheLogement />
			</Layout>
		),
	},
	{
		path: '/apropos',
		element: (
			<Layout>
				<Apropos />
			</Layout>
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
