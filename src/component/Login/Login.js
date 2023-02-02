import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';
const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const Login = () => {};
	// {TODO: Setup firebase for login and store login data in redux}
	return (
		<div className='login'>
			<div className='login__form'>
				<h2>Login</h2>
				<div className='login__email'>
					<input type='text' placeholder='Email' />
				</div>
				<div className='login__password'>
					<input type='password' placeholder='Password' />
				</div>
				<div className='login__button'>
					<button
						onClick={() => {
							login()
						}}
					>
						Login
					</button>
				</div>
				<div className='login__signup'>
					<button
						onClick={() => {
							navigate('/signup');
						}}
					>
						Don't have Account? Sign up
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
