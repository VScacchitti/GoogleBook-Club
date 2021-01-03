import React from 'react';

function SavedResultItem(props) {
    const {title, authors, image, link, description, deleteGoogleBook} = props
    return (
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={image} alt="jumbotron"/>
                    <h5 className="card-title" >{title}</h5>
                    <p className="card-text" >{description}</p>
                    <p>Author(s): {authors}</p>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="btn">View Book</a>
                    <button onClick={deleteGoogleBook.bind(this, props)} className="btn btn-warning">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default SavedResultItem;
