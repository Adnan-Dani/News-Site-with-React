import React, { Component, Fragment } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d27da09361414dabb372c1d7ee7a0487&page=1&pagesize=7';
    let data = await fetch(url);

    let parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles,
      totalResults:parsedData.totalResults
   });
  }
  handleNextClick = async ()=>{
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/7)){}else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d27da09361414dabb372c1d7ee7a0487&page=${this.state.page + 1}&pagesize=7`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles: parsedData.articles ,
      totalResults:parsedData.totalResults
    
    });

    this.setState({
      page: this.page + 1
    })
  }
  }
  handlePrevClick =async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d27da09361414dabb372c1d7ee7a0487&page=${this.state.page - 1}&pagesize=7`;
   
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.page - 1
    })
  }
  render() {
    return (
      <Fragment>
        <div className='container'>
          <h3>NewsMonkey - Top Headlines</h3>
          <div className='row'>
            {this.state.articles.map((news) => {
              return <div className='col-md-3' key={news.url}>
                <NewsItem title={news.title ? news.title.slice(0, 88) : ""} description={news.description ? news.description.slice(0, 88) : ""} imgUrl={news.urlToImage ? news.urlToImage : "https://ichef.bbci.co.uk/news/1024/branded_news/4855/production/_126471581_p0cwx9tl.jpg"} newsUrl={news.url} />
              </div>
            })}


          </div>
        </div>
        <hr />
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} className='btn btn-primary' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button  className='btn btn-primary'  onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </Fragment>
    )
  }
}

export default News