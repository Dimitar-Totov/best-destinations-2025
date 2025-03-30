import { Link } from "react-router"

import { useGetAllDestinations } from "../../api/destinationsApi"

import Search from "../destination-search/Search";

export default function Destinations() {

    const { destinations, fetchError } = useGetAllDestinations();

    return (
        <div className="bg-gray-100">

            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                <Search />

                <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900 font-mono mt-6">Explore by click on picture</h2>

                {fetchError && (
                    <div className="bg-red-100 border-l-4 text-center border-red-500 text-red-700 p-4 rounded-lg shadow-md mt-4">
                        <p>{fetchError}</p>
                    </div>
                )}

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {destinations.length > 0
                        ? destinations.map((destination) => (
                            <div key={destination._id} className="group relative">
                                <img
                                    alt={destination.name}
                                    src={destination.imageUrl}
                                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                                />
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700 ">
                                            <Link to={`/destinations/${destination._id}/details`}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {destination.name}
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))
                        : fetchError ? '' : <p className="text-gray-500 dark:text-gray-400 text-center italic mt-6">No destinations yet.</p>
                    }
                </div>
            </div>
        </div>
    )
}