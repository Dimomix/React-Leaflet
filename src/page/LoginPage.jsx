import React, { useState } from 'react';
import LoginPage, { Username, Password, TitleSignup, TitleLogin, Submit, Title, Logo } from '@react-login-page/page8';
import LoginLogo from 'react-login-page/logo';

const styles = {
    height: 690,
    backgroundColor: '#5941A2'
};

const Demo = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log('handleLogin called');
        console.log('Email:', email);
        console.log('Password:', password);

        const data = {
            email,
            password
        };

        try {
            const response = await fetch('http://192.168.208.68:8888/api/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log('Response status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);
            // Обработка успешного ответа
        } catch (error) {
            console.error('Error:', error);
            // Обработка ошибки
        }
    };

    return (
        <div style={styles}>
            <LoginPage>
                <Title />
                <TitleSignup>Регистрация</TitleSignup>
                <TitleLogin>Авторизоваться</TitleLogin>
                <Logo>
                    <LoginLogo />
                </Logo>
                <form onSubmit={handleLogin}>
                    <Username
                        label="E-mail"
                        placeholder="E-mail"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Password
                        label="Пароль"
                        placeholder="Пароль"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Submit keyname="submit" onClick={handleLogin}>Войти</Submit>
                </form>

                <Username panel="signup" label="E-mail" placeholder="E-mail" keyname="signup-email" />
                <Password panel="signup" label="Пароль" placeholder="Пароль" keyname="signup-password" />
                <Password panel="signup" label="Подтвердите пароль" placeholder="Подтвердите пароль" keyname="signup-confirm-password" />
                <Submit panel="signup" keyname="signup-submit">Зарегистрироваться</Submit>
            </LoginPage>
        </div>
    );
};

export default Demo;
