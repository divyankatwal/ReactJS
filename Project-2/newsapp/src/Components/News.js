import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className="container my-3">
                <h2>NewsFoxy - Top Headlines</h2>
                <div className="row my-3">
                    <div className="col-md-4">
                        <NewsItem title="29 Best Black Friday Gaming Deals (2024), Consoles and Games" description="A Nintendo Switch bundle for $225? A PS5 Slim for more than $100 off? These Black Friday gaming deals are bonkers." imageUrl="https://media.wired.com/photos/6744d0d61e9fed2ec33b4229/191:100/w_1280,c_limit/black-friday-gaming-deals.png" 
                        newsUrl="https://www.wired.com/story/black-friday-gaming-deals-2024/"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc" imageUrl="https://media.wired.com/photos/67476900e61d335fbb0f07b5/191:100/w_1280,c_limit/cyber-monday-laptop-deals.png"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc" imageUrl="https://gizmodo.com/app/uploads/2024/11/asus-rog-strix-g16.jpg"/>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="myDesc"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
