import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Search from "../components/Search";
import SearchResult from "../components/SearchResult";
import SearchBook from "../components/Search";


class SearchBooks extends Component {

    state = {
        search: "",
        books:[],
        error:"",
    };

    //handle input chnage on our search
    handleInputChange = event => {
        this.setState({search: event.target.value})
    }

    //Handles the submissio of the form
    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleBooks(this.state.search)
           .then(res => {
               if (res.data.items === "error") {
                   throw new Error(res.data.items)
               }
               else {
                   let results = res.data.items

                   results = results.map( result => {
                       result = {
                           key: result.id,
                           id: result.id,
                           title: result.volumeInfo.title,
                           authors: result.volumeInfo.authors,
                           description: results.volumeInfo.description,
                           image: results.volumeInfo.imageLinks.thumbnail,
                           link: result.volumeInfo.infoLink
                       }
                       return result
                   })
                   this.setState({books: results, search:""})
               }
           })
           .catch(err=>this.setState({error:err.items}))
    }

    //handles saving a book

    handleSavedButton = event => {
        event.preventDefault();
        let savedBooks = this.state.books.filter(book => book.id===event.target.id)
        API.saveBook(savedBooks)
           .then(console.log(savedBooks))
           .catch(err => console.log(err))
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
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }

}

export default SearchBooks;