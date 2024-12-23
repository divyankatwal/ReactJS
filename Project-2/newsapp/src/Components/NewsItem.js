import React, { Component } from 'react'

export class NewsItem extends Component {

    

    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl?"https://media.wired.com/photos/6744d0d61e9fed2ec33b4229/191:100/w_1280,c_limit/black-friday-gaming-deals.png":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
