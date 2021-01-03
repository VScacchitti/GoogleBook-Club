import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"



class SearchBooks extends Component {

    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //handle input chnage on our search
    handleInputChange = event => {
        const {name, value} =event.target;
        this.setState({
          [name]: value
        });
    };

    //Handles the submissio of the form
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // store response in a array
                    let results = res.data.items
                    //map through the array 
                    results = results.map(result => {
                        //store each book information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    //handles saving a book

    handleSavedBook = currentBook => {
      console.log("This is the current book", currentBook);
      API.saveBook({
          id: currentBook.id,
          title: currentBook.title,
          authors: currentBook.authors,
          description: currentBook.description,
          image: currentBook.image,
          link: currentBook.link
      })
      .then(res => console.log("Successful POST to DB!", res))
      .catch(err => console.log("this is the error", err));
      };

    render() {
      return (
        <div>
            <Nav />
            <Container fluid>
            <Jumbotron />
            <form>
                <h5>Search for a Book!</h5>
                <Input 
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="Search for a Book"
                />
                <SubmitBtn onClick={this.handleFormSubmit}/>
            </form>
            
            {this.state.books.length ? (
                <SearchResult 
                bookState={this.state.books}
                saveGoogleBook={this.saveGoogleBook}>
                </SearchResult>
            ) : (
                <div>
                    <hr/>
                <p style={{fontStyle: "italic"}}>No results to display</p>
                </div>
            )} 
            </Container>
            <Footer/>
        </div>
    )
    }

}

export default SearchBooks;