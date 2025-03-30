
import { Link } from 'react-router';
import { useLatestDestinations } from '../../api/destinationsApi'
import video from '../../assets/videos/homePage.webm'

export default function Home() {

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
            <p className="text-2xl text-center font-serif">The last 3 destinations added</p>

            <div className='flex flex-row min-h-100 justify-center items-center gap-10 bg-gray-100'>

                {error && (
                    <div className="bg-red-100 border-l-4  text-center border-red-500 text-red-700 p-4 rounded-lg shadow-md mt-4">
                        <p>{error}</p>
                    </div>
                )}

                {!error && (
                    latestDestinations.length > 0
                        ? latestDestinations.map(destination => (
                            <div key={destination._id} className="bg-base-100 w-96 shadow-sm justify-center">
                                <figure>
                                    <img
                                        src={destination.imageUrl}
                                        alt={destination.name} />
                                </figure>
                                <div className="card-body content-center">
                                    <h2 className="card-title">{destination.country}</h2>
                                    <p>{destination.name}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/destinations/${destination._id}/details`} className="btn btn-primary">Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                        : <p className="text-gray-500 dark:text-gray-400 text-center italic mt-6">No destinations yet.</p>
                )}
            </div>


        </>
    )
}
