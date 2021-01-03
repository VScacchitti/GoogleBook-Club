import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Search from "../components/Search";
import SearchResult from "../components/SearchResult";



class SearchBooks extends Component {

    state = {
        search:"",
        books:[],
    };

    searchBooks = () => {
      API.getGoogleSearchBooks(this.state.search)
         .then( res => {
           console.log(res.data.items)
           this.setState({
             books: res.data.items,
             search: ""
           })})
         .catch(err=> console.log(err));  
    }

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
        this.searchBooks();
       
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
            <Container fluid>
                <Container>
                    <Row>
                        <Col size="12">
                        <Search 
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                        />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <SearchResult books={this.state.books} handleSavedBook={this.handleSavedBook} />
                </Container>
            </Container>
        )
    }

}

export default SearchBooks;