import React, { Component } from 'react';



class SearchResultItem extends Component {
    state = {
        mounted: false,
        text: "Save"
    }

    componentDidMount = () => {
        this.setState({
            mounted:true
        })
        console.log("mounted")
    }

    onClickFunc = () => {
        this.props.saveGoogleBook(this.props)
    }

    render () {
        const {book} = this.props

        return (
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={this.props.image} alt="book"/>
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <p>Author(s): {this.props.authors}</p>
                    <a href={this.props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Book</a>
                    <button onClick={this.onClickFunc} className="btn">{this.state.text}</button>
                </div>
            </div>
        )
    }
}

export default SearchResultItem;