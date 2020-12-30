import React from "react";
import { Container, Row, Col } from "../Grid";

const SavedBooks = (props) => {
    return (
        <Container>
            <h3>Saved Books</h3>
            {props.savedBooks.map(savedbook => {
                return (
                    <div className="card mb-5">
                        <div className="card-body">
                            <Row className="row" id={savedbook.title + "Card"} key={savedbook._id}>
                                <Col size="2">
                                    <img src={savedbook.image} alt={savedbook.title}/>
                                </Col>
                                <Col size="10" className="pl-2">
                                <h3>{savedbook.title}</h3>
                                <h4>{savedbook.author}</h4>
                                <p className="pr-3">{savedbook.desciption}</p>
                                </Col>
                            </Row>
                            <Row>
                                <button className="save btn mt-4 ml-3 mr-1">Save Book</button>
                                <a href={savedbook.link} target="_blank" rel="noopener noreferrer">
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

export default SavedBooks;