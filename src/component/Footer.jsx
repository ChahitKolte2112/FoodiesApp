import React from "react";
import "./Footer.css";
// import logo from "../../assets/images/favicon.jpeg";

const Footer = () => {
    return (
        <>
            <footer>
                <div
                    className="container grid2"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        width: "1500px",
                    }}
                >
                    <div className="box">
                        <h1
                            style={{
                                width: 100,
                                height: 100,

                                // border: "solid 1px white",
                                margin: "10px",
                                // textDecorationColor: "red",
                            }}
                        >
                            YUMM
                            <span style={{ textColor: "orangered" }}>EATs</span>
                        </h1>

                        <p style={{ maxWidth: 400 }}>
                            We Ensure to Deilvered our best in food and service
                            <br></br>
                        </p>
                        <p>For Contributing to this project</p>
                        <div className="icon d_flex">
                            <a
                                href="http://github.com/ChahitKolte2112"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                            >
                                <div className="img d_flex">
                                    <i class="fa-brands fa-github"></i>
                                    <span>Github</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="box">
                        <h2>About Us</h2>
                        <ul>
                            <li>
                                <a
                                    href="http://github.com/ChahitKolte2112"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        textDecoration: "none",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Chahit Kolte
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Chahit Kolte </li>
                            <li>Email :ChahitKolte@gamil.com</li>
                            <li>Phone : +91 1123 456 780</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
