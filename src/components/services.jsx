import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Expert care for your vehicle's every need.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <img 
                    src={d.img} 
                    alt={d.imgAlt} 
                    className={d.imgClass}
                    style={{width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover'}}
                  />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p dangerouslySetInnerHTML={{__html: d.text.replace(/\n/g, '<br>')}}></p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
