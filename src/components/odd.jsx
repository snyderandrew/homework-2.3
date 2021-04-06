import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Odd = (props) => {
    return (
        <>
        <header className="number-text">
            <Link to="/page_1">
                <Button>Page 1</Button>
            </Link>

            <Link to="/page_3">
                <Button>Page 3</Button>
            </Link>
        </header>
        </>
    );
};
export default Odd;