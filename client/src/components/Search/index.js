import React from "react";

const Search = (props) => {
    return (
        <form>
          <div className="form-group">
        <label className="BookSearchLabel"><h3>Search For Books</h3></label>
        <br></br>
        <input className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchBook"
          placeholder="Search for a book by Title"
          onChange={props.handleInputChange} />
      </div>
      <button type="submit" className="submitBtn btn" onClick={props.handleFormSubmit}>
        Submit</button>
    </form>

    )
   
}

export default Search