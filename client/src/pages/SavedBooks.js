import React, { Component } from "react";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import API from '../utils/API';
import SavedResult from "../components/SavedResult"
import Footer from "../components/Footer"


class SavedBook extends Component {

    state = {
        savedBooks : []
    };
  //calls to the API to get saved books
  componentDidMount = () => {
    this.getBooks()
}

    //handle Delete Book
    deleteGoogleBook = currentBook => {
        API.deleteBook( currentBook.id )
        .then(res => {
            console.log("You deleted this book:", res);
            this.getBooks();
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    getBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log("This is the res from getBooks", res);
        })
        .catch(err => {
            console.log("This is the error", err);
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                <Jumbotron />
                {this.state.savedBooks.length ? (
                    <SavedResult
                    bookState={this.state.savedBooks}
                    deleteGoogleBook={this.deleteGoogleBook}
                    >
                    </SavedResult>
                ) : (
                    <h5>No results to display</h5>
                )}
                </Container>
                <Footer/>
            </div>
        )
            
    }

}

export default SavedBook