import React from "react";

export const Header = (props) => {
  const backgroundImage = process.env.PUBLIC_URL + '/img/24591f7a356e5181b737c74077a148b3.jpg';

  return (
    <header id="header">
      <div className="intro" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <div className="section-title">
                  <h2>{props.data ? props.data.subtitle : "Loading"}</h2>
                  <h1>{props.data ? props.data.title : "Loading"}</h1>
                </div>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
