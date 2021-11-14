
import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"


const Banner = () => {
    return (
        <div className="gggg img-fluid">
            <div
                id="carouselExampleControls"
                className="carousel slide "
                data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div
                            className="row banner-bg-info d-flex align-items-center p-5 m-5">
                            <div className="banner-text col-lg-12">
                                <h1 className="text-white mt-5 fs-1">Motor Bikes Is The Best</h1>
                                <h6 className="text-white py-3">
                                    The term motorcycle has different legal definitions depending on jurisdiction
                                </h6>
                                <Link to="/explores">
                                    <button className="btn btn-success">More Explore</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


