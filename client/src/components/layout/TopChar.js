import React, { useEffect } from "react";
import Aos from 'aos';
import { Divider } from 'antd';
import '../../components/pages/style.css';
import Who from '../../components/images/who.png'
import Unicef from '../../components/images/unicef.png';
import Direct from '../../components/images/direct.png';
import Red from '../../components/images/red.png';
import Task from '../../components/images/task.png';
import Doc from '../../components/images/doc.png';


const TopChar = (props) => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);


    return (
        <div data-aos="fade-up" style={{ paddingTop: "100px", paddingBottom: "100px" }}>

            <div className="page_intro_div">
                <Divider><h3 style={{ fontWeight: "900", marginTop: "50px", paddingBottom: "20px" }} id="responsive_h1">Top National Charities</h3></Divider>

                <section id="search_table">
                    <div className="page_intro_div">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 mb-4" data-aos="fade-right" data-aos-delay="100" >
                                <div className="core-item">
                                    <img src={Who} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                    <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}>W.H.O</h6>
                                    <p id="responsive_h7">The World Health Organization is a specialized agency of the United Nations responsible for international public health.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 mb-4" data-aos="zoom-in" data-aos-delay="100" >
                                <div className="core-item">
                                    <img src={Red} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                    <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}><b>AMERICAN RED CROSS</b></h6>
                                    <p id="responsive_h7">is a humanitarian organization that provides emergency assistance, disaster relief, and
                                    disaster preparedness education in the United States.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 mb-4" data-aos="fade-left" data-aos-delay="100" >
                                <div className="core-item">
                                    <img src={Direct} alt="" style={{ height: "auto", width: "100%" }} />
                                </div>
                                <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                    <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}>DIRECT RELIEF</h6>
                                    <p id="responsive_h7">mission is to improve the health and lives of people affected by poverty or emergency
                                    situations by providing essential medical resources.</p>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-4 col-sm-12 mb-4" data-aos="fade-right" data-aos-delay="100" >
                                <div className="core-item">
                                    <img src={Task} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                    <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}>THE TASK FORCE FOR GLOBAL HEALTH</h6>
                                    <p id="responsive_h7">is an international, nonprofit organization that works to improve health of people most in need,
                                    primary in developing countries.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 mb-4" data-aos="zoom-in" data-aos-delay="100" >
                                <div className="core-item">
                                    <img src={Unicef} alt="" style={{ width: "100%" }} />
                                </div>
                                <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                    <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}><b>UNICEF</b></h6>
                                    <p id="responsive_h7">The United Nations Children's Fund is a United Nations agency responsible for providing
                                    humanitarian and developement aid to children worldwide.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 mb-4" data-aos="fade-left" data-aos-delay="100" >
                                <div className="core-item">
                                    <img src={Doc} alt="" style={{ height: "auto", width: "100%" }} />
                                </div>
                                <div className="search_caption" style={{ backgroundColor: "#f7f7f7" }}>
                                    <h6 id="responsive_h7" style={{ fontStyle: "italic", fontWeight: "700" }}>DOCTORS WITHOUT BORDERS</h6>
                                    <p id="responsive_h7">is a humanitarian medical organization of French origin best
                                    known for its projects in conflict zones affected by endemic diseases.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>

    );
}

export default TopChar;
