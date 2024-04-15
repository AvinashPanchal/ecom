import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-6">
                    <p className="mt-3"> 2024 &copy; Easy Bazaar. All Right Reserved.</p>
                
                </div>
                <div className="col-6 col-md-6">
                <p className=" text-end mt-3">
                <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
                <Link to="/policy">Privacy Policy</Link>
                </p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;