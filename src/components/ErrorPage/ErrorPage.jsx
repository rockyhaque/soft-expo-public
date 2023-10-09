import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Opps! No content availavle...</h1>
            <Link className="btn btn-primary" to="/">Go Home</Link>
        </div>
    );
};

export default ErrorPage;