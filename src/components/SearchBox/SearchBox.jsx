import css from './SearchBox.module.css';

const SearchBox = ({filter, onChangeFilter}) => {

    return (
        <div className={css.searchContainer}>
            <label htmlFor="SearchBar">Find contacts by name</label>
            <input type="text" name="SearchBar" id="SearchBar" value={filter} onChange={onChangeFilter}></input>
        </div>
    )
}

export default SearchBox;