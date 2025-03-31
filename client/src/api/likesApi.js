import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import useStateHook from "../hooks/useStateHook"
import request from "../utils/request";

const baseUrl = 'http://localhost:3030/data/likes'

export const useGetLikes = (destinationId) => {
    const [likes, setLikes] = useStateHook(null);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `destinationId="${destinationId}"`,
        })
        request('GET', `${baseUrl}?${searchParams.toString()}`)
            .then(setLikes);
    }, [])

    return {
        likes,
        setLikes,
    }
}

export const useCreateLike = () => {
    const { authorizationOptions } = useAuth();
    const create = (destinationId, userId) => request('POST', baseUrl, { destinationId, userId }, authorizationOptions);

    return {
        create
    }
}