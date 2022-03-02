import React, {useState} from "react";
import { Fragment } from "react/cjs/react.production.min";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

let ContactApp = () => {

     const [state, setstate] = useState({
         selectedCon : {}
     });

     let {selectedCon} = state;

     let dataReceive = (contact) =>{
         setstate((state) => ({
            selectedCon : contact
         }));
     };

    return (
        <Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h3 className="text-success">Contact App</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod perspiciatis eos consequatur dicta rerum, animi omnis sit quidem iure natus corporis vero adipisci qui deleniti quis aliquid soluta alias blanditiis!</p>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-9">
                        <ContactList sendCon = {dataReceive}/>
                    </div>
                    <div className="col-md-3">
                        <ContactCard selectedContact = {selectedCon}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default ContactApp;