import { Link } from "react-router"

import { useGetAllDestinations } from "../../api/destinationsApi"

import useStateHook from "../../hooks/useStateHook";

export default function Destinations() {
    document.title = 'Destinations Page';

    const { destinations, fetchError, pending } = useGetAllDestinations();
    const [filteredDestinations, setFilteredDestionation] = useStateHook([]);
    const [searchPerformed, setSearchPerformed] = useStateHook(false);
    
    const searchSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const searchedCountry = formData.get('country');
        const result = destinations.filter(destination => destination.country.toLowerCase() === searchedCountry.toLowerCase());
        setFilteredDestionation(result);
        setSearchPerformed(true)
    }
    
    return (
        <div className="bg-gray-100">

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <form onSubmit={searchSubmitHandler} className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" name="country" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by country name..." required />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>

                <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900 font-mono mt-6">Explore by click on picture</h2>

                {fetchError && (
                    <div className="bg-red-100 border-l-4 text-center border-red-500 text-red-700 p-4 rounded-lg shadow-md mt-4">
                        <p>{fetchError}</p>
                    </div>
                )}

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {filteredDestinations.length > 0 ? (
                        filteredDestinations.map((filteredDestination) => (
                            <div key={filteredDestination._id} className="group relative mt-20">
                                <img
                                    alt={filteredDestination.name}
                                    src={filteredDestination.imageUrl}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <Link to={`/destinations/${filteredDestination._id}/details`}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {filteredDestination.name}
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : searchPerformed ? (
                        <div className="flex items-center justify-center min-h-[50vh]">
                            <p className="text-gray-500 dark:text-gray-400 text-center italic">
                                No destinations found for your search.
                            </p>
                        </div>
                    ) : (
                        destinations.length > 0 ? (
                            destinations.map((destination) => (
                                <div key={destination._id} className="group relative">
                                    <img
                                        alt={destination.name}
                                        src={destination.imageUrl}
                                        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                    />
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <Link to={`/destinations/${destination._id}/details`}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {destination.name}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : fetchError
                            ? ''
                            : pending ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                                </div>
                            ) : ((
                                <p className="text-gray-500 dark:text-gray-400 text-center italic mt-6">
                                    No Destinations added yet.
                                </p>
                            ))
                    )}
                </div>
            </div>
        </div>
    )
}