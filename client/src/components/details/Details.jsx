import { Link } from "react-router";
import { useGetOneDestination } from "../../api/destinationsApi"

export default function Details() {

    const { destination } = useGetOneDestination();

    return (
        <>
            <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
                <div className="max-w-2xl">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                            <div className="grow">
                                <div className="flex justify-between items-center gap-x-2">
                                    <div>
                                        <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                                            <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                                                <div className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl dark:bg-neutral-950 dark:divide-neutral-700" role="tooltip">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-5 md:space-y-8">

                        <figure>
                            <img className="w-full object-cover rounded-xl" src={destination.imageUrl} alt={destination.name} />
                        </figure>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold dark:text-white font-serif">Country</h3>
                            <p className="text-lg text-gray-800 dark:text-neutral-200">{destination.country}</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold dark:text-white font-serif">Name</h3>
                            <p className="text-lg text-gray-800 dark:text-neutral-200">{destination.name}</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold dark:text-white font-serif">Best season to visit</h3>
                            <p className="text-lg text-gray-800 dark:text-neutral-200">{destination.seasons}</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-semibold dark:text-white font-serif">Description</h3>
                            <p className="text-lg text-gray-800 dark:text-neutral-200">{destination.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky bottom-6 inset-x-0 text-center">
                <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-neutral-800">
                    <div className="flex items-center gap-x-1.5">

                        <div className="hs-tooltip inline-block">
                            <button type="button" className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                875
                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-black" role="tooltip">
                                    Like
                                </span>
                            </button>
                        </div>

                        <div className="block h-3 border-e border-gray-300 mx-3 dark:border-neutral-600"></div>

                        <div className="hs-tooltip inline-block">
                            <button type="button" className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" /></svg>
                                16
                                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-black" role="tooltip">
                                    Comment
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-4 m-10">
                <Link to={`/destination/${destination._id}/edit`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Edit
                </Link>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Delete
                </button>
            </div>
        </>
    )
}