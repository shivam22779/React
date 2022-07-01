import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description, url, urlToImage} = this.props
        return (
            
                <div className="card" >
                    <img src={urlToImage} className="card-img-top" alt="Some error occured"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={url} rel="noreferrer" target="_blank" className="btn btn-primary">Read more...</a>
                        </div>
                </div>

        
        )
    }
}
