import React from "react";
import formalImage from '../../images/others/formal-pic.jpg'

const About = () => {
  return (
    <div className="vh-100">
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-5">
            <img src={formalImage} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h2 class="card-title title-cart text-center p-2">Hello ! This SHORIFUL ISLAM</h2>
              <p class="card-text fs-4">
              Everyone has dreams, so I am no exception. I want to be a successful web developer in the future and stand by the side of poor and helpless people. I am studying and researching the things I need to know and learn to be a successful web developer. Research paper based on machine learning is also in progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
