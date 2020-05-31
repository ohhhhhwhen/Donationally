import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'aos/dist/aos.css';
import { Modal } from 'antd';
import { FacebookOutlined, MessageOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, MoreOutlined, CopyrightCircleOutlined } from '@ant-design/icons';
import Icon from '../images/original_trans.png';

import './style.css';


class Footer extends Component {

    state = {
        open: false,
        width: window.innerWidth,
        modal20Visible: false,
    };

    setModal20Visible(modal20Visible) {
        this.setState({ modal20Visible });
    };

    updateWidth = () => {
        const newState = { width: window.innerWidth };

        if (this.state.open && newState.width > 991) {
            newState.open = false;
        }

        this.setState(newState);
    };

    toggleNav = () => {
        this.setState({ open: !this.state.open });
    };

    componentDidMount() {
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    render() {



        return (


            <section className="contact_lower_div">
                <div>
                    <Modal
                        title="COPYRIGHT NOTICE"
                        centered
                        visible={this.state.modal20Visible}
                        footer={null}
                        onOk={() => this.setModal20Visible(false)}
                        onCancel={() => this.setModal20Visible(false)}
                    >

                        <p id="responsive_h7">
                            All materials contained on this site http://www.donationally.com are protected by United States copyright law and may not be reproduced, distributed, transmitted, displayed, published, or broadcast without the prior written permission of Charity Navigator.
                        </p>
                        <p id="responsive_h7">
                            Donationally® and the Donationally logo®,  are registered trademarks of Donationally, and may not be reproduced without prior written permission of Donationally.
                        </p>



                    </Modal>
                </div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <img src={Icon} alt="" style={{ width: "90px", height: "65px" }} id="contact_photo" ></img>
                    <Navbar.Brand href="/" id="contact_photo">Donationally</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link href="https://www.linkedin.com/in/donationally/" target="blank_" rel="noopener noreferrer"><LinkedinOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" id="contact_photo" />LinkedIn</Nav.Link>
                            <Nav.Link href="https://www.facebook.com/Donationally-100748411673069" target="blank_" rel="noopener noreferrer"><FacebookOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" id="contact_photo" />Facebook</Nav.Link>
                            <Nav.Link href="/contact" target="blank_" rel="noopener noreferrer"><MessageOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" id="contact_photo" />Message Us!</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link>Copyright &copy; 2020 | </Nav.Link>
                            <Nav.Link href="/policy">PRIVACY POLICY</Nav.Link>
                            <Nav.Link href="/policy">
                                DISCLAIMER
                            </Nav.Link>
                            <Nav.Link onClick={() => this.setModal20Visible(true)}>COPYRIGHT NOTICE </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </section>



        );
    }
}

export default Footer;
