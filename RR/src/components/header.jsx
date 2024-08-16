import React from "react";

export const Header = (props) => {
  return (
    <header
      id="header"
      style={{
        background: "url('/img/24591f7a356e5181b737c74077a148b3.jpg') center center no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text text-center">
              <h1>
                {props.data ? props.data.title : "Loading"}
                <span></span>
              </h1>
              <p>{props.data ? props.data.paragraph : "Loading"}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
