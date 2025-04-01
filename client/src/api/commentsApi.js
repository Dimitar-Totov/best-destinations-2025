import { useEffect } from "react";

import useAuth from "../hooks/useAuth";
import useStateHook from "../hooks/useStateHook";

import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/comments';

export const useGetAllComments = (destinationId) => {
    const [comments, setComments] = useStateHook([]);
    const [pending, setPending] = useStateHook(true);

    useEffect(() => {

        const searchParams = new URLSearchParams({
            where: `destinationId="${destinationId}"`,
        });

        request('GET', `${baseUrl}?${searchParams.toString()}`)
            .then(response => {
                setComments(response);
                setPending(false)
            });

    }, [destinationId]);

    return {
        comments,
        setComments,
        pending,
    };
}

export const useCreateComment = () => {
    const { authorizationOptions } = useAuth();

    const create = (destinationId, commentData, author) => {

        if (commentData.length < 5) {
            throw new Error('Your comment should be at least 5 letters long.');
        }

        return request('POST', baseUrl, { destinationId, comment: commentData, author }, authorizationOptions);
    };

    return {
        create
    }
}