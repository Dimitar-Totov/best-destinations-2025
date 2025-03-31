import { useEffect } from "react";

import useAuth from "../hooks/useAuth";
import useStateHook from "../hooks/useStateHook";

import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/comments';

export const useGetAllComments = (destinationId) => {
    const [comments, setComments] = useStateHook([]);

    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;

        const searchParams = new URLSearchParams({
            where: `destinationId="${destinationId}"`,
        });

        request('GET', `${baseUrl}?${searchParams.toString()}`, null, { signal })
            .then(setComments);

        return () => controller.abort();

    }, [destinationId]);

    return {
        comments,
        setComments,
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