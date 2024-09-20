import { useRouteError } from "react-router-dom";

const ErrorElement = ()=>{

    const err = useRouteError();
    console.log(err);

    return(
        <div>
            <h1>OOPs Something went wrong</h1>
            <p>{err.status} : {err.statusText}</p>
        </div>
    );
};

export default ErrorElement;