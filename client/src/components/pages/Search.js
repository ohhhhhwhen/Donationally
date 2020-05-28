import React, { Component } from "react";
import Map from "./Map";
import TopChar from '../layout/TopChar';
import Heading from "../Heading";
import SearchBar from "../SearchBar";
import { Col, Row, Container } from "../Grid";
import { Form, Navbar, Button, Nav, FormControl } from "react-bootstrap";
import { Input, FormBtn } from "../Form";
import { QuestionCircleOutlined } from '@ant-design/icons';
import API from "../../utils/API";
import Results from "../Results";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";
import "./style.css";
import "./Boxes.css";

class Search extends Component {
  state = {
    search: "",
    search2: "",
    results: []
  };

  searchrapidapi = query => {
    let query1 = query.replace(" ", "+");
    console.log("1. " + query1);
    API.search(query1)

      .then(res => this.setState({ results: res.data, search: "" }))
      .catch(err => console.log(err));
  };

  handleCharitySearch = event => {
    event.preventDefault();
    this.searchrapidapi(this.state.search);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCharitySave = event => {
    console.log(event, this.state);
    API.saveCharity({
      name: event.charityName,
      description: event.tagLine,
      cause: event.cause.causeName,
      image: event.currentRating.ratingImage.large,
      link: event.websiteURL
    })
      .then(res => this.setState({ search: "" }))
      .catch(err => console.log(err));
  };

  searchrapidapi2 = query => {
    let query1 = query.replace(" ", "+");
    console.log("1. " + query1);
    API.searchName(query1)

      .then(res => this.setState({ results: res.data, search2: "" }))
      .catch(err => console.log(err));
  };

  handleCharitySearchByName = event => {
    event.preventDefault();
    this.searchrapidapi2(this.state.search2);
  };

  handleInputChange2 = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCharitySave2 = event => {
    console.log(event, this.state);
    API.saveCharity({
      name: event.charityName,
      description: event.tagLine,
      cause: event.cause.causeName,
      image: event.currentRating.ratingImage.large,
      link: event.websiteURL
    })
      .then(res => this.setState({ search2: "" }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="normal">
        <div className="page_inner_div">
          <TopChar />
          <Map />


          <div style={{ paddingTop: "20px" }}>
            <Navbar bg="info" expand="lg">
              <Navbar.Brand href="" style={{ color: "white" }}>Search by:</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="" id="map_nav_font">
                    Relevance:{" "}
                  </Nav.Link>
                  <FormControl
                    id="search2"
                    type="text"
                    value={this.state.search2}
                    onChange={this.handleInputChange2}
                    name="search2"
                    placeholder="charity name"
                    className="mr-sm-2"
                  />
                  <Button
                    variant="secondary"
                    disabled={!this.state.search2}
                    onClick={this.handleCharitySearchByName}
                    id="geoButton"
                  >
                    Search
                  </Button>
                </Nav>
                <Form inline>
                  <Nav.Link href="" id="map_nav_font">
                    Category:{" "}
                  </Nav.Link>
                  <FormControl
                    id="search"
                    type="text"
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="category name"
                    className="mr-sm-2"
                  />
                  <Button
                    variant="secondary"
                    disabled={!this.state.search}
                    onClick={this.handleCharitySearch}
                    id="geoButton"
                  >
                    Search
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
          </div>

          <Container fluid>
            <Row>
              <Col size="md-12">
                <Results>
                  <ul className="list-group">
                    {this.state.results &&
                      this.state.results.map(result => (
                        <li className="list-group-item" key={result.ein}>
                          <Row>
                            <Col size="md-2">
                              {result.currentRating ? (
                                <img
                                  alt="rating stars"
                                  className="img-fluid"
                                  src={result.currentRating.ratingImage.large}
                                />
                              ) : (
                                  <p>No image</p>
                                )}
                              <br />
                              Info <QuestionCircleOutlined />
                            </Col>
                            <Col size="md-7" className="text-justify">
                              <b>{result.charityName}</b>
                              <br />
                              {result.cause && result.cause.causeName}
                              <br />
                              <i>{result.tagLine}</i>
                              <br />
                              {result.mailingAddress.city + " , " + result.mailingAddress.stateOrProvince + " " + result.mailingAddress.postalCode}
                            </Col>
                            <Col size="md-3">
                              <ViewBtn
                                style={{ margin: "20px" }}
                                onClick={() => window.open(result.websiteURL)}
                              />
                              <SaveBtn
                                style={{ margin: "20px", color: "white" }}
                                onClick={() => this.handleCharitySave(result)}
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

export default Search;
