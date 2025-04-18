import { Link, useNavigate } from "react-router"
import { useContext, useState } from "react";
import { useRegister } from "../../api/authApi";
import { UserContext } from "../../contexts/UserContext";

import mountainPicture from '../../assets/images/mountain.jpg'
import useSetError from "../../hooks/useSetError";

export default function Register() {
    document.title = 'Register Page';

    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext);
    const [registerError, setRegisterError] = useSetError(null);

    const [inputData, setInputData] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: ''
    });

    const changeHandler = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const authData = await register(inputData.username, inputData.email, inputData.password, inputData.rePassword);
            userLoginHandler({ ...authData });
            navigate('/');
        } catch (err) {
            setRegisterError(err.message);
            setInputData(state => ({ ...state, password: '', rePassword: '' }))

            setTimeout(() => {
                setRegisterError(null);
            }, 6000);
        }
    };
    return (
        <section
            className="relative flex items-center h-screen"
            style={{ backgroundImage: `url(${mountainPicture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-70 sm:mx-auto">

                <div className="mt-50 sm:mx-auto sm:w-full sm:max-w-md rounded-xl bg-gray-100 p-6">
                    {registerError && (
                        <div className="flex items-center justify-center p-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                            <svg className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-3a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                            </svg>
                            <span className="font-medium">{registerError}</span>
                        </div>
                    )}
                    <form onSubmit={formSubmitHandler} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm/6 font-medium text-black">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    name="username"
                                    id="username"
                                    onChange={changeHandler}
                                    value={inputData.username}
                                    type="text"
                                    required
                                    autoComplete="username"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="email" className="block text-sm/6 font-medium text-black">
                                    Email address
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="email"
                                    id="email"
                                    value={inputData.email}
                                    onChange={changeHandler}
                                    type="text"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-black">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="password"
                                    id="password"
                                    value={inputData.password}
                                    onChange={changeHandler}
                                    type="password"
                                    required
                                    autoComplete="password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="rePassword" className="block text-sm/6 font-medium text-black">
                                    Repeat password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="rePassword"
                                    id="rePassword"
                                    value={inputData.rePassword}
                                    onChange={changeHandler}
                                    type="password"
                                    required
                                    autoComplete="rePassword"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Have an Account?{' '}
                        <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Login Here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}