import React, {useState,useEffect} from "react";
import { Fragment } from "react/cjs/react.production.min";
import ConService from "../services/ConService";

let ContactList = (props) => {

    const [state, setstate] = useState({
        contacts : []
    });

    useEffect(async () => {
        try {
            let response = await ConService.getContacts();
            setstate(() => ({
                contacts : response.data
            }));
        } catch (error) {
            console.log(error);
        }
    }, []);

    let {contacts} = state;

    let clickCon = (contact) =>{
        props.sendCon(contact);
    };

    return (
        <Fragment>
            <table className="table table-hover text-center table-striped">
                <thead className="bg-dark text-white">
                    <tr>
                        <th>SNO</th>
                        <th>NAME</th>
                        <th>COMPANY</th>
                        <th>EMAIL</th>
                        <th>WEBSITE</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            contacts.map(contact => {
                                return(
                                    <tr key={contact.id} onClick={() => clickCon(contact)}>
                                        <td>{contact.id}</td>
                                        <td>{contact.name}</td>
                                        <td>{contact.company.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.website}</td>
                                    </tr>
                                )
                            })
                        }
                </tbody>
            </table>
        </Fragment>
    )
};

export default ContactList;