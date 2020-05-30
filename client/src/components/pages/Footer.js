import React, { Component } from "react";

import 'aos/dist/aos.css';

import { Space } from 'antd';
import { FacebookOutlined, MessageOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, MoreOutlined, CopyrightCircleOutlined } from '@ant-design/icons';
import Icon from '../images/original_trans.png';

import './style.css';


class Footer extends Component {

    state = {
        open: false,
        width: window.innerWidth
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

        let linked = "https://www.linkedin.com/in/donationally-uw-full-stack-development-bootcamp-60bb911aa/";

        return (


            <section className="contact_lower_div">

                <Space size="large" style={{ color: "white" }}>
                    <p>Contact Us</p>
                    <p>Want to Volunteer?</p>
                </Space>

                <MoreOutlined style={{ fontSize: '50px', color: "white" }} className="contact_icon" />

                <Space size="large" style={{ color: "white" }}>
                    <p type="button" href="/policy">PRIVACY POLICY</p>
                    <p>DISCLAIMER</p>
                    <p>DISCLOSURE</p>
                </Space>

                <MoreOutlined style={{ fontSize: '50px', color: "white" }} className="contact_icon" />

                <LinkedinOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" type="button" onClick={() => window.open(linked)} />
                <FacebookOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" />
                <MessageOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" />
                <TwitterOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" />
                <InstagramOutlined style={{ fontSize: '40px', color: "white" }} className="contact_icon" />

                <MoreOutlined style={{ fontSize: '50px', color: "white" }} className="contact_icon" />

                <Space size="small" style={{ color: "white" }}>
                    <p>Copyright</p><CopyrightCircleOutlined style={{ fontSize: '10px', color: "white" }} /><p> donationally 2020</p>
                    <img src={Icon} alt="" style={{ width: "90px", height: "65px" }} id="contact_photo" ></img>

                </Space>

            </section>



        );
    }
}

export default Footer;
