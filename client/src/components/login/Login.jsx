import { Link, useNavigate } from "react-router";
import { useContext, useState} from "react";

import { useLogin } from "../../api/authApi";
import { UserContext } from "../../contexts/UserContext";

import mountainPicture from '../../assets/images/mountain.jpg'
import useSetError from "../../hooks/useSetError";

export default function Login() {

    const navigate = useNavigate();
    const { login } = useLogin();
    const { userLoginHandler } = useContext(UserContext);
    const [loginError, setLoginError] = useSetError(null);

    const [inputData, setInputData] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const authData = await login(inputData.email, inputData.password);
            userLoginHandler(authData);
            navigate('/');
        } catch (err) {
            setLoginError(err.message);
            setInputData(state => ({ ...state, password: '' }))

            setTimeout(() => {
                setLoginError(null);
            }, 6000);
        }

    }


    return (
        <section
            className="relative flex items-center h-screen"
            style={{ backgroundImage: `url(${mountainPicture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-70 sm:mx-auto">

                {loginError && (
                    <div className="flex items-center justify-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                        <svg className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-3a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                        </svg>
                        <span className="font-medium">{loginError}</span>
                    </div>
                )}

                <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm rounded-xl bg-gray-100 p-6">
                    <form onSubmit={formSubmitHandler} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    name="email"
                                    value={inputData.email}
                                    onChange={changeHandler}
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="password"
                                    value={inputData.password}
                                    onChange={changeHandler}
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a Member?{' '}
                        <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
