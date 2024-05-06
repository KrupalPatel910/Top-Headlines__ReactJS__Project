import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchnewsdata = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=eaa5fa9c8a2547aabd8ad910db06e917`;
      const result = await fetch(url);
      const data = await result.json();
      setArticles(data.articles);
    };

    fetchnewsdata();

    // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.VITE_API_KEY}`;
    // fetch(url).then((response)=>{
    //     response.json();
    // }).then(data => setArticles(data.articles))
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        {" "}
        Latest <span className="badge bg-danger text-light"> News</span>
      </h2>
        {articles.map((news, index) => {
          return (
            <NewsItems
              key={index}
              title={news.title}
              description={news.description}
              url={news.url}
              src={news.urlToImage}
            />
          );
        })}
     
    </div>
  );
};

export default NewsBoard;
