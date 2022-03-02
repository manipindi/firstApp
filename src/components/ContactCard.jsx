import React from "react";
import { Fragment } from "react/cjs/react.production.min";

let ContactCard = (props) => {

    let {selectedContact} = props;

    return (
        <Fragment>
            <div className="card shadow-lg sticky-top">
                <img src={selectedContact.image} className="image-fluid"/>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">{selectedContact.name}</li>
                        <li className="list-group-item">{selectedContact.email}</li>
                        <li className="list-group-item">{selectedContact.website}</li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
};

export default ContactCard;