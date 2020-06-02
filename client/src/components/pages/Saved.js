import React, { Component } from "react";
import { Divider } from "antd";
import { Col, Row, Container } from "../Grid";

import API from "../../utils/API";
import Results from "../Results";
import ViewBtn from "../ViewBtn";
import DeleteBtn from "../DeleteBtn";
import './style.css';

class Saved extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    API.getCharities()
      .then(res => {
        console.log(res.data);
        this.setState({ results: res.data });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCharityRemove = event => {
    API.deleteCharity(event)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Divider><h3 style={{ fontWeight: "900", marginTop: "50px", paddingBottom: "20px" }} id="responsive_h1">Favorites</h3></Divider>
        <div className="page_inner_div">
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Results>
                  <ul className="list-group">
                    {this.state.results &&
                      this.state.results.length > 0 &&
                      this.state.results.slice(this.state.minValue, this.state.maxValue).map(result => (
                        <li className="list-group-item" key={result.ein}>
                          <Row>
                            <Col size="md-2">
                              <b>Rating: </b>
                              <br />
                              {result.image ? (
                                <img
                                  alt="rating stars"
                                  className="img-fluid"
                                  src={result.image}
                                />
                              ) : (
                                  <p>No image</p>
                                )}
                              <br />
                            </Col>
                            <Col size="md-7" className="text-justify">
                              <b>{result.name}</b>
                              <br />
                              {result.description}

                            </Col>
                            <Col size="md-3">
                              <ViewBtn
                                style={{ margin: "20px" }}
                                onClick={() => window.open(result.link)}
                              />

                              <DeleteBtn
                                onClick={() => this.handleCharityRemove(result._id)}
                              />
                            </Col>
                          </Row>
                          <hr></hr>
                        </li>
                      ))}
                  </ul>

                </Results>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Saved;
