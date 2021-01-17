import React from 'react';

const LoginPage = ({history}) => {
    
    const handleClickLogin = () => {
        history.replace('/');
    }


    return (
        <div className='content animated fadeIn'>
            <h1>Login Page</h1>
            <hr/>
            <button className='btn-primary'
                    onClick={handleClickLogin}>
                Login
            </button>
        </div>
    )
}

export default LoginPage;