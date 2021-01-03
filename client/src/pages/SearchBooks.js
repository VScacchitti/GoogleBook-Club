import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import {Input, SubmitBtn} from "../components/Search";
import SearchResult from "../components/SearchResult";
import Footer from "../components/Footer"



class SearchBooks extends Component {

    state = {
        search:"",
        books:[],
    };

    searchBooks = () => {
      API.googleBooks(this.state.search)
          .then(res => {
              console.log("This is res.data", res.data.items)
              this.setState({
              books: res.data.items,
              search: ""
          })})
          .catch(err => console.log(err));
          
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