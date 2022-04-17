import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../../images/banner/banner1.jpg";
import Banner2 from "../../../images/banner/banner2.jpg";
import Banner3 from "../../../images/banner/banner3.jpg";
import Banner4 from "../../../images/banner/banner4.jpg";
import './Banner.css'


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
                    src={Banner1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Banner3}
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Banner4}
                    alt="Fourth slide"
                  />

                  <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
