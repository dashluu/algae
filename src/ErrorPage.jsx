import "./ErrorPage.scss"
import {useEffect, useRef} from "react";

const ErrorPage = () => {
    const errorBackground = useRef(null);

    useEffect(() => {
        if (errorBackground.current) {
            if (window.scrollY < errorBackground.current.offsetTop) {
                errorBackground.current.classList.remove("error-background-sticky");
            } else {
                errorBackground.current.classList.add("error-background-sticky");
            }
        }
    });

    return (
        <div className="error-page">
            <div className="error-background" ref={errorBackground}></div>
            <div className="error-container">
                <div className="error-title">Oops!</div>
                <div className="error-body">Sorry, an unexpected error has occurred.</div>
            </div>
        </div>
    );
}

export default ErrorPage;