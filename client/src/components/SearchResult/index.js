
import React from "react";
import { Container, Row, Col } from "../Grid";
import "./style.css";

const SearchResult = (props) => {
    return (
        <Container>
            <h3>Book Results</h3>
            {props.books.map(book => {
                return (
                    <div className="card mb-5">
                        <div className="card-body">
                            <Row className="row" id={book.title + "Card"} key={book._id}>
                                <Col size="2">
                                    <img src={book.image} alt={book.title}/>
                                </Col>
                                <Col size="10" className="pl-2">
                                <h3>{book.title}</h3>
                                <h4>{book.author}</h4>
                                <p className="pr-3">{book.desciption}</p>
                                </Col>
                            </Row>
                            <Row>
                                <button className="save btn mt-4 ml-3 mr-1" id={book.id} onClick={(event) => props.handleSavedBook(event)}>Save Book</button>
                                <a href={book.link} target="_blank" rel="noopener noreferrer">
                                <button className="view btn mt-4">View Book</button>
                                </a>
                            </Row>

                        </div>
                    </div>
                )
            })}

        </Container>
    )
}

export default SearchResult