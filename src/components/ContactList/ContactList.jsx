import Contact from '../Contact/Contact.jsx';

const ContactList = ({contacts}) => {
    return (
        <>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <Contact {...contact} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ContactList;