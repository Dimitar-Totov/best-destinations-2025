import { Link } from 'react-router'

import { useGetOwnCreatedDestinations } from '../../api/destinationsApi';

import useAuth from "../../hooks/useAuth"
import useStateHook from '../../hooks/useStateHook';

export default function Profile() {

    const { username, email } = useAuth();
    const { ownCreated, pending, fetchError } = useGetOwnCreatedDestinations();
    const [currentIndex, setCurrentIndex] = useStateHook(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ownCreated.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + ownCreated.length) % ownCreated.length);
    };

    return (
        <div className="flex flex-col items-center p-4 space-y-10">
            {/* Profile Card */}
            <div className="w-full mt-50 max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden pt-16 relative">
                <div className="absolute h-0 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                        className="h-28 w-28 bg-white p-2 rounded-full border-4 border-gray-300 shadow-md m-3"
                        src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                        alt="User Profile"
                    />
                </div>
                <div className="text-center p-6 mt-12">
                    <h2 className="text-gray-800 dark:text-white text-2xl font-semibold">{username}</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 inline-block transition duration-300">
                        {email}
                    </p>
                </div>
            </div>

            {fetchError ? (
                <div className="bg-red-100 border-l-4 text-center border-red-500 text-red-700 p-4 rounded-lg shadow-md mt-4">
                    <p>{fetchError}</p>
                </div>
            ) : pending ? (
                <div className="flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                </div>
            ) : ownCreated.length > 0 ? (
                <div className="relative w-80 h-[450px] flex flex-col mb-30 items-center">
                    <button
                        onClick={prevCard}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110"
                        aria-label="Previous destination"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-800 dark:text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <p className="text-gray-700 text-lg font-medium p-2">The destinations you have created.</p>

                    <div className="w-80 h-[450px] flex flex-col bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition-transform duration-500 ease-in-out">
                        <img className="w-full h-60 object-cover rounded-t-lg" src={ownCreated[currentIndex].imageUrl} alt={ownCreated[currentIndex].name} />
                        <div className="flex flex-col flex-grow p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {ownCreated[currentIndex].name}
                            </h5>
                            <p className="mb-2 font-serif text-xl text-gray-700 dark:text-gray-400">
                                {ownCreated[currentIndex].country}
                            </p>
                            <Link
                                to={`/destinations/${ownCreated[currentIndex]._id}`}
                                className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <button
                        onClick={nextCard}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-all duration-300 hover:scale-110"
                        aria-label="Next destination"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-800 dark:text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            ) : (
                <p className="text-gray-700 text-lg font-medium p-2">You haven't created any destinations yet.</p>
            )}
        </div>
    )
}