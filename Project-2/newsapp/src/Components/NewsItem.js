import React, { Component } from 'react'

export class NewsItem extends Component {

    articles = [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Brad Bourque",
            "title": "29 Best Black Friday Gaming Deals (2024), Consoles and Games",
            "description": "A Nintendo Switch bundle for $225? A PS5 Slim for more than $100 off? These Black Friday gaming deals are bonkers.",
            "url": "https://www.wired.com/story/black-friday-gaming-deals-2024/",
            "urlToImage": "https://media.wired.com/photos/6744d0d61e9fed2ec33b4229/191:100/w_1280,c_limit/black-friday-gaming-deals.png",
            "publishedAt": "2024-11-29T04:38:03Z",
            "content": "The holidays are close. That means its time to settle in for some serious winter gaming. These Black Friday gaming deals can help. Seriously, this is one of the best times of the year to make those h… [+9908 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Scott Gilbertson",
            "title": "36 Best Cyber Monday Laptop Deals (2024), MacBooks Included",
            "description": "Time to upgrade your rig? Take advantage of these Cyber Monday laptop deals on our favorite models, whether it's a MacBook, gaming laptop, or Chromebook.",
            "url": "https://www.wired.com/story/best-cyber-monday-laptop-deals-2024/",
            "urlToImage": "https://media.wired.com/photos/67476900e61d335fbb0f07b5/191:100/w_1280,c_limit/cyber-monday-laptop-deals.png",
            "publishedAt": "2024-12-02T14:50:30Z",
            "content": "This is the best time of the year to buy a new laptop. You'll rarely get a better chance to nab a computer, so we've rounded up the best Cyber Monday laptop deals we've seen on all the models our rev… [+17615 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Jeff Dunn",
            "title": "Black Friday gaming deals 2024: The best sales from PlayStation, Xbox, Nintendo and others",
            "description": "Black Friday is often a good time to restock on video games and gaming gear on the cheap, and this year is no exception. While the event itself is still a few days away, several retailers have already rolled out their official holiday sales. That means many o…",
            "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_f2c6c75b-82da-46fc-a6c5-554efb52bcd1",
            "urlToImage": null,
            "publishedAt": "2024-11-26T17:17:41Z",
            "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Gizmodo Deals",
            "title": "Amazon Is Clearing out Stock of The ASUS ROG Strix G16 (RTX 4060) at a Record Low Price For Black Friday",
            "description": "For just over $1,000, this gaming PC is simply excellent.",
            "url": "https://gizmodo.com/amazon-is-clearing-out-stock-of-the-asus-rog-strix-g16-rtx-4060-at-a-record-low-price-for-black-friday-2000531400",
            "urlToImage": "https://gizmodo.com/app/uploads/2024/11/asus-rog-strix-g16.jpg",
            "publishedAt": "2024-11-28T15:25:15Z",
            "content": "If youre looking for a high-performance gaming laptop, now is the perfect time to invest in the newest ASUS ROG Strix G16. As Black Friday has kicked off, Amazon is offering huge discounts on a range… [+2267 chars]"
        }
    ]

    constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
