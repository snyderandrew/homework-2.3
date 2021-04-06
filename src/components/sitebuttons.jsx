import React from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

function SiteButtons() {
    return (
        <>
        <div className="buttons">
            <Link to="/All_Numbers">
                <Button>All Numbers</Button>
            </Link>

            <Link to="/Odd_Numbers">
                <Button>Even #'s</Button>
            </Link>

            <Link to="/Even_Numbers">
                <Button>Odd #'s</Button>
            </Link>
        </div>
        </>
    )
}
export default SiteButtons;