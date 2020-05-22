import React, { Component } from "react";
import Heading from "../Heading";
import SearchBar from "../SearchBar";
import { Col, Row, Container } from "../Grid";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";
import Results from "../Results";
import ViewBtn from "../ViewBtn";
import DeleteBtn from "../DeleteBtn";

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
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Heading>
              <h1>Saved Charities</h1>
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Results>
              <ul className="list-group">
                {this.state.results &&
                  this.state.results.map(result => (
                    <li className="list-group-item" key={result.ein}>
                      <Row>
                        <Col size="md-2">
                          {result.image ? (
                            <img
                              alt="rating stars"
                              className="img-fluid"
                              src={result.image}
                            />
                          ) : (
                            <p>No image</p>
                          )}
                        </Col>
                        <Col size="md-9" className="text-justify">
                          <b>{result.name}</b>
                          <br />
                          {result.cause}
                          <br />
                          {result.description}
                        </Col>
                        <Col size="md-1">
                          <ViewBtn
                            onClick={() => window.open(result.link)}
                          />
                          <DeleteBtn
                            onClick={() => this.handleCharityRemove(result._id)}
                          />
                        </Col>
                      </Row>
                    </li>
                  ))}
              </ul>
            </Results>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Saved;
