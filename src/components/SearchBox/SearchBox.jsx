import { useState } from 'react';

const SearchBox = () => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    };

    return (
        <div>
            <label htmlFor="SearchBar">Find contacts by name</label>
            <input type="text" name="SearchBar" id="SearchBar" onChange={handleChange} value={inputValue}></input>
        </div>
    )
}

export default SearchBox;