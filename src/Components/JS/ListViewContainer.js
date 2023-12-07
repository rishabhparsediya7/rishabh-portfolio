import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import Progress from "react-progressbar";
import "../CSS/ListView.css";
const ListViewContainer = ({ skills }) => {
  return (
    <div>
      {skills.map((e, index) => (
        <div className="listView" key={index}>
          <div className="tech-stack">{e.key}</div>
          <div className="tech-values">
            {e.values.map((s, ind) => (
              <MDBCard
                style={{
                  width: "100%",
                  height: "60px",
                  margin: "10px",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "14px",
                  background: "#EEF0F4",
                  boxShadow: "inset 9.91px 9.91px 15px #D9DADE, inset -9.91px -9.91px 15px #FFFFFF"
                }}
                key={ind}
              >
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MDBCardImage
                      src={s.image}
                      alt="..."
                      style={{ width: "50px", height: "50px" }}
                    />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody>
                      <MDBCardTitle>{s.name}</MDBCardTitle>
                      <MDBCardText>
                        <Progress completedClassName="barCompleted" completed={s.percentage} />
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListViewContainer;
