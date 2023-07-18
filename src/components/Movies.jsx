import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../components/Movies.css";

import React from "react";

import Data from "../mData.js";

const Movies = () => {
  return (
    <>
      <h1 className="text-center my-5">TOP RATED MOVIES</h1>
      <div className="container">
        <div className="row">
          {Data.map((cvalue, index) => {
            return (
              <div className="col-md-4">
                <Card style={{ width: "18rem" }}>
                  <h4 className="text-center my-2">Rating: {cvalue.rating}</h4>
                  <Card.Img variant="top" src={cvalue.cover} />
                  <Card.Body>
                    <Card.Title>
                      <strong>Name:</strong> {cvalue.name}
                    </Card.Title>
                    <Card.Text>
                      <strong>Description:</strong> {cvalue.description}
                    </Card.Text>
                    <Card.Text>
                      <strong>Duration:</strong> {cvalue.duration}
                    </Card.Text>
                    <Card.Text>
                      <strong>Realease-Date:</strong> {cvalue.release}
                    </Card.Text>
                    <Button variant="dark">Watch Now</Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movies;
