
import { useEffect, useRef } from 'react';

const useAutoFocus = (isSelectText = false) => {
    const selectValue = useRef(isSelectText);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            if (selectValue.current) {
                inputRef.current.select();
            }
        } else {
            console.error("Auto focus did not work");
        }
    }, []);
    return { ref: inputRef }
}

export default useAutoFocus;