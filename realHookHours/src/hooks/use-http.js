import { useCallback, useState } from "react";

const useHttp = () => {
    //vv old 'NewTask' logic vv
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url,
                //making request params flexible
                {
                    method: requestConfig.method ? requestConfig.method : 'GET', //ternary to check if 'method' was given, otherwise sets it to 'GET'
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body? JSON.stringify(requestConfig.body) : null,
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            //getting tasks from request & populating an array with such
            //using Custom Hooks
            applyData(data);

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    //if key & value is the same, it may be written as a single word
    // \-> same as 'isLoading: isLoading'
    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp;