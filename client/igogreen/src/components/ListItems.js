import React, { Fragment, Component, useEffect, useState } from "react";
import "./ListItems.css";
import red from "../images/red.jpg";
import blue from "../images/blue.jpg";
import yellow from "../images/yellow.jpg";
import green from "../images/green.jpg";

const ListItems = () => {
  const [metal, setMetal] = useState(0.0);
  const [plastic, setPlastic] = useState(0.0);
  const [paper, setPaper] = useState(0.0);
  const [glass, setGlass] = useState(0.0);
  const [total, setTotal] = useState(0);

  const decreaseVariable = (i) => {
    return i <= 0.0 ? 0.0 : i - 1;
  };

  const increaseVariable = (i) => {
    return i + 1;
  };

  return (
    <div className="background">
      <div className="list">
        {" "}
        <div className="images">
          <img src={green} />
          <img src={red} />
          <img src={yellow} />
          <img src={blue} />
        </div>
        <table className="table table-success mt-5 text-center">
          <thead>
            <th>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => setGlass(increaseVariable(glass))}
              >
                + Glass
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => setGlass(decreaseVariable(glass))}
              >
                - Glass
              </button>
            </th>
            <th>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => setMetal(increaseVariable(metal))}
              >
                + Metal
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => setMetal(decreaseVariable(metal))}
              >
                - Metal
              </button>
            </th>
            <th>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => setPaper(increaseVariable(paper))}
              >
                + Paper
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => setPaper(decreaseVariable(paper))}
              >
                - Paper
              </button>
            </th>
            <th>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => setPlastic(increaseVariable(plastic))}
              >
                + Plastic
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => setPlastic(decreaseVariable(plastic))}
              >
                - Plastic
              </button>
            </th>
          </thead>
          <tbody>
            <td style={{ fontSize: "30px" }}>{metal}</td>
            <td style={{ fontSize: "30px" }}>{plastic}</td>
            <td style={{ fontSize: "30px" }}>{paper}</td>
            <td style={{ fontSize: "30px" }}>{glass}</td>
          </tbody>
        </table>
        <div className="submit">
          <button
            className="btn btn-primary"
            onClick={() => setTotal(metal + plastic + paper + glass)}
          >
            Submit
          </button>
        </div>
        <div className="history">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Points Earned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>09/07/2022</td>
                <td>20</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>10/07/2022</td>
                <td>7</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>11/07/2022</td>
                <td>18</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Today</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
