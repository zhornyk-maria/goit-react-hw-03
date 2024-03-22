import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from './Contact.module.css';

const Contact = ({name, number, id, onDeleteContact}) => {
    return (
        <>
            <div>
                <p><FaUser /> {name}</p>
                <p><FaPhone /> {number}</p>
            </div>
            <div>
                <button className={css.buttonDelete} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
            </div>
        </>
    )
}

export default Contact;