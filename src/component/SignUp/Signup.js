import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
const Signup = () => {
	const navigate = useNavigate();
	// TODO: Make sigup work, store the login data in firebase
	return (
		<div className='signup'>
			<div className='signup__form'>
				<h2>Signup</h2>
				<div className='signup__email'>
					<input type='text' placeholder='Email' />
				</div>
				<div className='signup__password'>
					<input type='password' placeholder='Password' />
				</div>
				<div className='signup__confirm'>
					<input type='password' placeholder='Confirm Password' />
				</div>
				<div className='signup__button'>
					<button
						onClick={() => {
							console.log('btn');
						}}
					>
						Signup
					</button>
				</div>
				<div className='signup__signup'>
					<button
						onClick={() => {
							navigate('/login');
						}}
					>
						Already have Account? Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default Signup;
