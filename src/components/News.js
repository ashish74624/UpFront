/*------------------Code To Change Pages Using Next and Previous Buttons--------------*/

import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
import PropTypes from 'prop-types'


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const [progress, setProgress] = useState(0);
  const [totalResults, setTotalResults] = useState(0);


  // static defaultProps = {
  //   country: 'in',
  //   pageSize: 8,
  //   category: 'general'
  // }
  //   static propTypes = { // PropTypes Specifies the DATATYPE of the props Pased in the Code if we give any other datatype it will throw an Error
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string,
  // }


  // constructor(props) = {
  //   super(props);

  //   // document.title = `NewsMonkey-${props.category}`

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d7f6e15f6f3d49a498bc306c3999a81a&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });/* Loading is true till API is fetched*/
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults)
    // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    props.setProgress(100);
    console.log(articles[0].author);

  }

  useEffect(() => {
    updateNews();
  }, [])

  // const componentDidMount = async () => {
  //   this.updateNews();
  // }
  const handleNextClick = async () => {
    if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
      // this.setState({ page: this.state.page + 1 });
      setPage(page + 1);
      updateNews();
    }

  }
  const handlePrevClick = async () => {
    // this.setState({ page: this.state.page - 1 })
    setPage(page - 1);
    updateNews();
  }

  return (
    <>
      <div className="container my-3">
        <h2 style={{ marginTop: '90px' }}>NewsMonkey - {props.category}</h2>
        <div className="row">
          {!loading && articles.map((element) => {
            return (
              <div className="col md-3 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description
                      ? element.description.slice(0, 88)
                      : "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                  }
                  imageUrl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1R8l6xir6h1yWG4MqWlKR5V9Y-914Qd55TxVee2V4&s"}
                  newsUrl={element.url} author={element.author} date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>
            Previous
          </button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </>
  );

}
News.defaltProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News