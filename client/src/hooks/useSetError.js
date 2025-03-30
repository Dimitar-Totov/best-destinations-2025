import { useState } from "react";

export default function useSetError(initialValue) {

    const [error, setError] = useState(initialValue);

    return [
        error,
        setError,
    ]
}