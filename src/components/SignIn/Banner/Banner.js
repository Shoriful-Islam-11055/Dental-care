import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../../images/banner/banner1.jpg";
import Banner2 from "../../../images/banner/banner2.jpg";
import Banner3 from "../../../images/banner/banner3.jpg";
import Banner4 from "../../../images/banner/banner4.jpg";
import Banner5 from "../../../images/banner/banner5.jpg";
import dentist from "../../../images/others/dentist1.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner-contain">
        <div className="card mb-3 carousal-card">
          <div className="row g-0">
            <div className="col-md-8">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="carousal-img d-block w-100"
                    src={Banner5}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h1 className="text-warning">
                      More than 10 years of Experience
                    </h1>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h1 className="text-warning">
                      More than 5000 Satisfied patents
                    </h1>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Banner3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h1 className="text-warning">
                      More then 14 years of implant practice Experience
                    </h1>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Banner4}
                    alt="Fourth slide"
                  />

                  <Carousel.Caption>
                    <h1 className="text-warning">
                      More than 2000 successful implant surgery
                    </h1>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="Fourth slide"
                  />

                  <Carousel.Caption>
                    <h1 className="text-warning">
                      More than 2000 successful Wisdom Tooth Surgery
                    </h1>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h2 className="card-title title-cart text-center py-2">
                  HAPPY SMILE <br />
                  <span className="care-text">DENTAL CARE</span>
                </h2>
                <div>
                  <div className="card border-0">
                    <img src={dentist} className="card-img-top profile" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        Assoc. Prof. Dr. Rabiul Islam
                      </h5>
                      <p className="card-text">
                        Ph.D. (Periodontal Plastic Surgery) Tokyo, Japan M.S.
                        (Oral & Maxillofacial Surgery/Medicine) Korea <br />
                        B.D.S. (Dhaka Dental College & Hospital) Dhaka <br />
                        FIAOO (UK), FICD (USA), Postdoc (Australia) <br />
                        Delta Medical College & Hospital Dental Unit <br />
                        Periodontal Plastic & Maxillofacial Surgeon <br />
                        Bangladesh Medical & Dental Council Reg.No.871
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
