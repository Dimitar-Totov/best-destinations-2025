import { useParams } from "react-router";
import { useOptimistic } from "react";

import { useCreateComment, useGetAllComments } from "../../api/commentsApi";

import useAuth from "../../hooks/useAuth";
import useSetError from "../../hooks/useSetError";

import formatDate from "../../utils/formatDate";
import { v4 as uuid } from 'uuid'

export default function Comments({
    isCreator,
}) {

    const { destinationId } = useParams();

    const { username, isAuthenticated, _id } = useAuth()
    const { create } = useCreateComment();
    const { comments, setComments, pending } = useGetAllComments(destinationId);
    const [error, setError] = useSetError(null);
    const [optimisticComment, setOptimisticComment] = useOptimistic(comments, (state, newComment) => [...state, newComment]);

    const formActionHandler = async (formData) => {

        const comment = formData.get('comment')

        const newOptimisticComment = {
            _ownerId: _id,
            destinationId,
            comment,
            pending: true,
            author: username,
            _id: uuid(),
        }

        try {
            setOptimisticComment(newOptimisticComment);

            const newComment = await create(destinationId, comment, username);
            setComments(state => [...state, newComment]);

        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null)
            }, 4000)
        }
    }

    return (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">

            {error && (
                <div className="bg-red-100 border-l-4 text-center border-red-500 text-red-700 p-4 mb-10 rounded-lg shadow-md mt-4">
                    <p>{error}</p>
                </div>
            )}

            <div className="max-w-2xl mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments about this destination ({comments.length})</h2>
                </div>
                {isAuthenticated
                    ? (
                        !isCreator
                            ? ((
                                (
                                    <form action={formActionHandler} className="mb-6">
                                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                            <label htmlFor="comment" className="sr-only">Your comment</label>
                                            <textarea id="comment" name="comment" rows="6"
                                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                                placeholder="Write a comment..." required></textarea>
                                        </div>
                                        <button type="submit"
                                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                            Post comment
                                        </button>
                                    </form>
                                )
                            )) : ''
                    )
                    : ''
                }
                {comments.length > 0
                    ? optimisticComment.map(comment => (
                        <article key={comment._id} className={`p-6 text-base ${comment.pending ? "bg-gray-200" : "bg-white"} rounded-lg  dark:bg-gray-900`}>
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">{comment.author}</p>
                                    {comment.pending ? '' : <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate(comment._createdOn)}</p>}
                                </div>
                            </footer>
                            {comment.pending ? <p className="text-gray-500 dark:text-gray-400">Loading...</p> : <p className="text-gray-500 dark:text-gray-400">{comment.comment}</p>}
                            <hr className="my-4 border-gray-300 dark:border-gray-700" />
                        </article>
                    ))
                    : pending ? (
                        <div className="flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                        </div>
                    ) : <p className="text-gray-500 dark:text-gray-400 text-center italic mt-6">No comments yet.</p>
                }
            </div>
        </section>
    )
}