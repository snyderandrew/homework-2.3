import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Even = (props) => {
    return (
        <>
        <header className="number-text">
        <Link to="/page_2">
                <Button>Page 2</Button>
            </Link>

            <Link to="/page_4">
                <Button>Page 4</Button>
            </Link>
        </header>
        </>
    )
}
export default Even;