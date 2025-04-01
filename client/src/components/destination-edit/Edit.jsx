import { useNavigate, useParams } from "react-router";

import { useEditDestination, useGetOneDestination } from "../../api/destinationsApi";
import useSetError from "../../hooks/useSetError";

import video from '../../assets/videos/createPage.mp4'

export default function Edit() {

    const navigate = useNavigate();
    const { destinationId } = useParams();
    const { destination, pending } = useGetOneDestination()
    const { edit } = useEditDestination();
    const [error, setError] = useSetError(null)

    const cancelClickHandler = (e) => {
        e.preventDefault();
        window.history.back()
    };

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            await edit(destinationId, data);
            navigate(`/destinations/${destinationId}/details`);
        } catch (err) {
            setError(err.message);

            setTimeout(() => {
                setError(null);
            }, 6000);
        }
    }

    return (
        <div className="relative h-screen bg-gray-200 blue:bg-blue-500">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source
                    src={video}
                    type="video/mp4"
                />
            </video>

            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="mt-20 container bg-gray-100 w-150 p-8 shadow-lg rounded-lg font-style: italic">

                    {error && (
                        <div className="flex items-center justify-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                            <svg className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-3a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                            </svg>
                            <span className="font-medium">{error}</span>
                        </div>
                    )}

                    {pending ? (
                        <div className="flex items-center justify-center h-100">
                            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <form onSubmit={formSubmitHandler}>
                            <div className="mb-4">
                                <label htmlFor="country" className="block text-gray-700">Country</label>
                                <input
                                    defaultValue={destination.country}
                                    type="text"
                                    name="country"
                                    id="country"
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="town" className="block text-gray-700">Town</label>
                                <input
                                    defaultValue={destination.town}
                                    type="text"
                                    name="town"
                                    id="town"
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700">Name</label>
                                <input
                                    defaultValue={destination.name}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="imageUrl" className="block text-gray-700">Image url</label>
                                <input
                                    defaultValue={destination.imageUrl}
                                    type="text"
                                    name="imageUrl"
                                    id="imageUrl"
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Best season to visit</label>
                                <select id="countries" name="seasons" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected={destination.seasons === "All seasons"} value="All seasons">All seasons</option>
                                    <option selected={destination.seasons === "Spring"} value="Spring">Spring</option>
                                    <option selected={destination.seasons === "Summer"} value="Summer">Summer</option>
                                    <option selected={destination.seasons === "Fall"} value="Fall">Fall</option>
                                    <option selected={destination.seasons === "Winter"} value="Winter">Winter</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700">Description</label>
                                <textarea
                                    defaultValue={destination.description}
                                    name="description"
                                    id="description"
                                    rows="6"
                                    className="w-full px-4 py-2 border rounded resize-y"
                                ></textarea>
                            </div>
                            <div className="flex justify-center gap-4 m-10">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">
                                    Edit
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={cancelClickHandler}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}



