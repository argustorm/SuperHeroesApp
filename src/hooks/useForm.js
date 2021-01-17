import { useState } from "react";

const useForm = () => {

    const [state, setState] = useState({
        name: ''
    });

    const handleInputChange = (e) => {
        setState({
            [e.target.name] : e.target.value
        });
    }

    return {state, handleInputChange};
}

export default useForm;