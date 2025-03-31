
import { Link } from 'react-router';

import { useLatestDestinations } from '../../api/destinationsApi'

import video from '../../assets/videos/homePage.webm'

export default function Home() {
    document.title = 'Home Page';

    const { latestDestinations, error } = useLatestDestinations();

    return (
        <>

            <div className="relative isolate w-screen h-screen px-6 pt-14 lg:px-8">
                <div className="absolute inset-0">
                    <video className="w-full h-full object-cover" src={video} autoPlay loop muted />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold">Explore the world with us</h1>
                </div>
            </div>
            <p className="text-2xl mt-20 text-center font-serif">The last 3 destinations added</p>

            <div className='flex flex-row mb-20 mt-5 min-h-100 justify-center items-center gap-10 bg-gray-100'>

                {error && (
                    <div className="bg-red-100 border-l-4  text-center border-red-500 text-red-700 p-4 rounded-lg shadow-md mt-4">
                        <p>{error}</p>
                    </div>
                )}

                {!error && (
                    latestDestinations.length > 0
                        ? <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                            {latestDestinations.map(destination => (
                                <div
                                    key={destination._id}
                                    className="w-80 h-[450px] flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <img
                                        className="w-full h-60 object-cover rounded-t-lg"
                                        src={destination.imageUrl}
                                        alt={destination.name}
                                    />
                                    <div className="flex flex-col flex-grow p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {destination.name}
                                        </h5>
                                        <p className="mb-2 font-serif text-xl text-gray-700 dark:text-gray-400">
                                           Country:
                                        </p>
                                        <p className="mb-3 flex-grow font-normal text-gray-700 dark:text-gray-400">
                                            {destination.country}
                                        </p>
                                        <Link
                                            to={`/destinations/${destination._id}/details`}
                                            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Read more
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                            ))}
                        </div>
                        : <p className="text-gray-500 dark:text-gray-400 text-center italic mt-6">No destinations yet.</p>
                )}
            </div>


        </>
    )
}
