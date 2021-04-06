import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AllNum = (props) => {
    return (
        <>
        <header className="number-text">
            <Link to="/page_1">
                <Button>Page 1</Button>
            </Link>
            <Link to="/page_2">
                <Button>Page 2</Button>
            </Link>
            <Link to="/page_3">
                <Button>Page 3</Button>
            </Link>
            <Link to="/page_4">
                <Button>Page 4</Button>
            </Link>
        </header>
        </>
    );
};
export default AllNum;