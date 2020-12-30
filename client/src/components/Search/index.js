import React from "react";

const SearchBook = (props) => {
    return (
        <form>
        <div className="form-group">
            <label className="Searchlable"><h2>Search for a Book!</h2></label>
            <input 
            className="col-12 form-control" 
            value={props.search}
            type="text"
            name="searchBook"
            placeholder="Search for a book Title!"
            onChange={props.handleInputChange}
            />
        </div>
        <button type="submit" className="submitBtn btn" onClick={props.handleFormSubmit}> Submit</button>
    </form>

    )
   
}

export default SearchBook