import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCar, 
  faOilCan, 
  faTools, 
  faTachometerAlt, 
  faPaintRoller, 
  faCarBattery
} from '@fortawesome/free-solid-svg-icons';

export const Services = (props) => {
  const icons = [faCar, faOilCan, faTools, faTachometerAlt, faPaintRoller, faCarBattery];

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
                  <FontAwesomeIcon icon={icons[i % icons.length]} size="4x" />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
