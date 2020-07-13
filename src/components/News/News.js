import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";
import Layout from './../Layout.js'


//api key 9d95875f934f4559bf6f92ea4028e522

// 0: Object { author: "Abram L. Wagner", title: "What makes a ‘wave’ of disease? An epidemiologist explains - Inverse", description: "Daily deaths from COVID-19 have rarely been below 600 in the U.S. since March.", … }
// import "./News.css";

function NewsList({ article }) {
    return (
        
            


            <div className=" col-md-6">
                <div class="card" style={{width:"18rem;"}}>
                <div class="card-body">
                    <h5 class="card-title"> {article.title}</h5>
                    {/* <h6 class="card-subtitle mb-2 text-muted">{article.description}</h6> */}
                    <hr></hr>
                    <p class="card-text">{article.content}</p>
                    <p className="dashboard-text Capitalize">Posted at {article.publishedAt}</p>
                    <div className="read-more-button">
                        <a className="read-more-button btn btn-warning" href={article.url} role="button">Read More</a>
                    </div>
                </div>
                </div>                        
                
                </div>
            
    );
}

export default function News() {


    const [news, setNews] = useState([]);
        
    useEffect(() => {
    var url = 'http://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey=9d95875f934f4559bf6f92ea4028e522'

    axios
      .get(url)
      .then((response) => {
        setNews(response.data.articles);
        console.log(response.data);

        console.log(response.data);

            
      });
  }, []);
  return (
    <Layout>
        <div style={{marginBottom:"70px"}}></div>
        <div className="body">
        <div className="tasks">
        <p className="dashboard-text">
            COVID-19 Virus Outbreak: Nigeria
        </p>

        <h2 className="dashboard-title">
            News & Updates
        </h2>
        <div className="container">
            <div className="row">

            {news.map((article, index) => (
                <NewsList
                    article={article}
                    index={index}
                    key={index}
                />
            ))}
            </div>
            </div>
        </div>
    </div>
    </Layout>
);

}



