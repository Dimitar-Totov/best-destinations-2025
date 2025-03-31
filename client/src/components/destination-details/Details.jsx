import { Link, useNavigate, useParams } from "react-router";

import { useDeleteDestination, useGetOneDestination } from "../../api/destinationsApi"
import { useCreateLike, useGetLikes } from "../../api/likesApi";

import useAuth from "../../hooks/useAuth";
import useStateHook from "../../hooks/useStateHook";
import useSetError from "../../hooks/useSetError";

import Comments from "../destination-comments/Comments";

export default function Details() {

    const navigate = useNavigate();
    const { destinationId } = useParams();
    const { destination, fetchError } = useGetOneDestination();
    const { deleteDestination } = useDeleteDestination();
    const { _id: userId, isAuthenticated } = useAuth();
    const [guestLikeError, setGuestLikeError] = useStateHook(false);
    const [deleteError, setDeleteError] = useSetError(null);
    const { create } = useCreateLike();
    const { likes, setLikes } = useGetLikes(destinationId);
    const [likeError, setLikeError] = useSetError(null);
    const [creatorLikeError, setCreatorLikeError] = useSetError(null);

    const isCreator = userId === destination._ownerId;
    let alreadyLiked = null;
    if (likes) {
        alreadyLiked = likes.find(like => like.userId === userId);
    }

    const deleteClickHandler = async () => {
        const hasConfirm = confirm('Are you sure you want to delete this destination ?');
        if (!hasConfirm) {
            return;
        }
        try {
            await deleteDestination(destinationId);
            navigate('/destinations');
        } catch (err) {
            setDeleteError(err.message);

            setTimeout(() => {
                setDeleteError(null);
            }, 4000);
        }
    }

    const likeButtonHandler = async (e) => {
        if (!isAuthenticated) {
            setGuestLikeError(true);

            setTimeout(() => {
                setGuestLikeError(false);
            }, 4000);
            return;
        }

        if (isCreator) {
            setCreatorLikeError(true);

            setTimeout(() => {
                setCreatorLikeError(null);
            }, 4000);
            return;
        }

        if (alreadyLiked) {
            setLikeError(true);

            setTimeout(() => {
                setLikeError(null);
            }, 4000);
            return;
        }

        try {
            const response = await create(destinationId, userId);
            setLikes(state => ([...state, response]));
        } catch (err) {
            setLikeError(err.message);
        }
    }

    return (
        <>
            {!fetchError && (
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
                                    <h3 className="text-2xl font-semibold dark:text-white font-serif">Town</h3>
                                    <p className="text-lg text-gray-800 dark:text-neutral-200">{destination.town}</p>
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

                    <div className="sticky bottom-6 inset-x-0 text-center gap-10">
                        <div className="inline-block bg-white shadow-md rounded-full py-3 px-4 dark:bg-neutral-800">
                            <div className="flex items-center gap-x-1.5">

                                <div className="hs-tooltip inline-block">
                                    <button onClick={likeButtonHandler} type="button" className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={alreadyLiked ? "red" : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                                        {likes?.length}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {guestLikeError && (
                        <div className="bg-red-100 border-l-4 text-center border-red-500 text-red-700 p-4 rounded-lg shadow-md mt-4">
                            <p>Sorry, you must be logged in to like this.</p>
                        </div>
                    )}

                    {creatorLikeError && (
                        <div className="bg-red-100 border-l-4 text-center border-red-500 text-red-700 p-4 rounded-lg shadow-md mt-4">
                            <p>Owners cannot like their own publications.</p>
                        </div>
                    )}

                    {likeError && (
                        <div className="bg-red-100 border-l-4 text-center border-red-500 text-red-700 p-4 rounded-lg shadow-md mt-4">
                            <p>You have already liked this destination.</p>
                        </div>
                    )}

                    {deleteError && (
                        <div className="bg-red-100 border-l-4 text-center border-red-500 text-red-700 p-4 rounded-lg shadow-md mt-4">
                            <p>{deleteError}</p>
                        </div>
                    )}

                    {isCreator && (
                        <div className="flex justify-center gap-4 m-10">
                            <Link to={`/destinations/${destination._id}/edit`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Edit
                            </Link>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={deleteClickHandler}>
                                Delete
                            </button>
                        </div>
                    )}
                    <Comments />
                </>
            )}

            {fetchError && (
                <div className="mt-50 flex h-150  items-center justify-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                    <svg className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-3a1 1 0 011 1v3a1 1 0 11-2 0V8a1 1 0 011-1zm0 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                    </svg>
                    <span className="font-medium">{fetchError}</span>
                </div>
            )}


        </>
    )
}