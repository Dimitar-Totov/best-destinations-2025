import { useState } from "react";

export default function useStateHook(initialValues) {
    const [state, setState] = useState(initialValues);

    return [
        state,
        setState,
    ]
}