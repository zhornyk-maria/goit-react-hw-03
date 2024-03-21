

const Contact = ({name, number}) => {
    return (
        <>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <div>
                <button>Delete</button>
                {/* <button onClick={() => deleteContact('contactIdToRemove')}>Delete</button> */}
            </div>
        </>
    )
}

export default Contact;