import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardImage,
} from "mdb-react-ui-kit";
import image from "../pf.jpg";
const CustomCardCertification = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header-c">
        <div className="header-row">
          <div className="round-image">
            <img className="rounded-circle" src={image} alt="" />
          </div>
          <div className="header-heading">
            <div className="card-heading">
              <p>{data.name}</p>
            </div>
            <div className="mains">
              <p>{data.mains}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-image">
        <img src={data.image} alt="" />
      </div>
      <div className="card-body">{data.description}</div>
    </div>
  );
};

export default CustomCardCertification;
