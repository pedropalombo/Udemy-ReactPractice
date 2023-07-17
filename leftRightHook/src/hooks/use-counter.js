import { useEffect, useState } from "react";

//Hooks must start with 'use-'
const useCounter = (forwards) => {
    // -| vv old (remixed) logic from ForwardCounter vv |-
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(forwards){
                setCounter((prevCounter) => prevCounter + 1);
            
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);
    // -| ^^ |-

    return counter; //so other counters may reuse values from hook
}

export default useCounter;