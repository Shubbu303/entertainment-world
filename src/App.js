import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import request from './ApiCalls/request';
import './App.css';
import { Header } from './component/Header';
import Login from './component/Login/Login';
import Movie from './component/Movie/Movie';
import NabBar from './component/NavBar/NabBar';
import { Results } from './component/Results/Results';
import Signup from './component/SignUp/Signup';

function App() {
	// TODO:Add prop types in all the component
	// TODO:Refactor the code, keep all url at one place
	// TODO: Add Lazy Loading, and improve the performance
	// TODO:Add action creator, and need to support loading please wait
	return (
		<div className='app'>
			{/* header */}
			<Header />
			<Routes>
				<Route path='/' element={<NabBar />}></Route>
				<Route
					path='/movies/:content'
					element={
						<>
							{' '}
							<NabBar />
							<Results />
						</>
					}
				/>
				<Route
					path='/:content'
					element={
						<>
							<Results />
						</>
					}
				/>
				<Route
					path='/movie/:id'
					element={
						<>
							<NabBar />
							<Movie />
						</>
					}
				/>
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
			<Outlet />
		</div>
	);
}

export default App;
