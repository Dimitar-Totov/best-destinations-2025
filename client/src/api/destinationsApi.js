import { useEffect } from "react"
import { useParams } from "react-router"

import useAuth from "../hooks/useAuth";
import useSetError from "../hooks/useSetError";

import request from "../utils/request";
import useStateHook from "../hooks/useStateHook";

const baseUrl = 'http://localhost:3030/data/destinations';

export const useGetAllDestinations = () => {
    const [destinations, setDestinations] = useStateHook([]);
    const [fetchError, setFetchError] = useSetError(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await request('GET', baseUrl);
                setDestinations(data);
            } catch (err) {
                setFetchError(err.message);
            }
        }
        fetchData();
    }, []);

    return {
        destinations,
        fetchError,
    }
}

export const useGetOneDestination = () => {
    const [destination, setDestination] = useStateHook({});
    const { destinationId } = useParams();
    const [fetchError, setFetchError] = useSetError(null);

    useEffect(() => {
        request('GET', `${baseUrl}/${destinationId}`)
            .then(response => {
                if (response.message) {
                    return setFetchError(response.message);
                }
                setDestination(response);
            })
    }, [])
    return {
        destination,
        fetchError,
    }
}

export const useCreateDestination = () => {
    const { authorizationOptions } = useAuth();

    const create = (country, town, name, imageUrl, seasons, description) => {

        const imageUrlPattern = /^https?:\/\/[a-zA-Z0-9!#$%&'*+./=?^_`{|}~-]+$/;

        if (country.length < 4) {
            throw new Error('Country should be at least 4 characters.')
        }

        if (town.length < 2) {
            throw new Error('Town should be at least 2 characters.')
        }

        if (name.length < 4) {
            throw new Error('Name of destination should be at least 4 characters.')
        }

        if (imageUrl.length === 0) {
            throw new Error('URL address cannot be empty.');
        }

        if (!imageUrlPattern.test(imageUrl)) {
            throw new Error('Invalid URL. Please enter a valid address starting with http:// or https://example.com');
        }

        if (description.length < 20) {
            throw new Error('Description should be at least 20 characters.');
        }

        return request('POST', baseUrl, { country, town, name, imageUrl, seasons, description }, authorizationOptions);
    }

    return {
        create
    }
}

export const useEditDestination = () => {
    const { authorizationOptions } = useAuth()
    const [error, setError] = useSetError(null)
    const edit = (destinationId, destinationData) => {

        const imageUrlPattern = /^https?:\/\/[a-zA-Z0-9!#$%&'*+./=?^_`{|}~-]+$/;

        if (destinationData.country.length < 4) {
            throw new Error('Country should be at least 4 characters.')
        }

        if (destinationData.town.length < 2) {
            throw new Error('Town should be at least 2 characters.')
        }

        if (destinationData.name.length < 4) {
            throw new Error('Name of destination should be at least 4 characters.')
        }

        if (destinationData.imageUrl.length === 0) {
            throw new Error('URL address cannot be empty.');
        }

        if (!imageUrlPattern.test(destinationData.imageUrl)) {
            throw new Error('Invalid URL. Please enter a valid address starting with http:// or https://example.com');
        }

        if (destinationData.description.length < 20) {
            throw new Error('Description should be at least 20 characters.');
        }

        request('PUT', `${baseUrl}/${destinationId}`, { ...destinationData, _id: destinationId }, authorizationOptions);
    }

    return {
        edit
    }
}

export const useDeleteDestination = () => {
    const { authorizationOptions } = useAuth();
    const deleteDestination = (destinationId) => request('DELETE', `${baseUrl}/${destinationId}`, null, authorizationOptions);

    return {
        deleteDestination,
    }
}

export const useLatestDestinations = () => {
    const [latestDestinations, setLatestDestinations] = useStateHook([]);
    const [error, setError] = useSetError(null);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
            select: '_id,imageUrl,country,name',
        });

        request('GET', `${baseUrl}?${searchParams.toString()}`)
            .then(response => setLatestDestinations(response))
            .catch(err => {
                setError(err.message);
            });
    }, []);

    return {
        latestDestinations,
        error,
    }
}


