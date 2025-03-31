import { useEffect } from "react";

import useAuth from "../hooks/useAuth";

import request from "../utils/request";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {

    const login = async (email, password) => {
        const response = await request('POST', `${baseUrl}/login`, { email, password });

        if (!response.accessToken) {
            throw new Error(response.message);
        }

        return response;
    }

    return {
        login,
    }
}

export const useRegister = () => {

    const register = async (username, email, password, rePassword) => {

        const usernamePattern = /^[a-z]{3,}@(abv\.bg|email\.com)$/;
        const passwordPattern = /^(?=(.*[a-zA-Z]){5,})(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{7,}$/;

        if (password !== rePassword) {
            throw new Error('Passwords do not match. Please make sure both passwords are identical.');
        }

        if (username.length < 3) {
            throw new Error('Username should be at least 3 characters.');
        }

        if (!usernamePattern.test(email)) {
            throw new Error('Invalid email format! Your email must start with at least 3 lowercase letters and end with @abv.bg or @email.com.');
        }

        if (!passwordPattern.test(password)) {
            throw new Error('Password must be at least 5 letters long, contain at least one uppercase letter, one digit, and one special character.');
        }

        const response = await request('POST', `${baseUrl}/register`, { username, email, password });

        if (!response.accessToken) {
            throw new Error(response.message);
        }

        return response;
    }


    return {
        register,
    }
}

export const useLogout = () => {

    const { authorizationOptions, accessToken, userLogoutHandler } = useAuth();

    useEffect(() => {

        if (!accessToken) {
            return;
        }

        request('GET', `${baseUrl}/logout`, null, authorizationOptions)
            .then(userLogoutHandler)
   
    }, [accessToken, userLogoutHandler])

    return {
        isLoggedOut: !!accessToken,
    }
}