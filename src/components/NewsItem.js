import React, { Component, Fragment } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imgUrl, newsUrl} = this.props;
        return (
            <Fragment>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgUrl} className="card-img-top" alt='{title}' />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} target="_blank" className="btn  btn-primary">Read more</a>
                        </div>
                </div>
                
            </Fragment>
        )
    }
}

export default NewsItem