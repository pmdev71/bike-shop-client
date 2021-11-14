import React from "react";
import { Accordion } from "react-bootstrap";
import "./About.css"

const About = () => {
  return (
    <div className="container my-5">


      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <img className="w-100" src="https://images.thrillophilia.com/image/upload/s--jnuk3Kyg--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/092/996/original/1585827931_Untitled12.jpg.jpg" alt="" />
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 className="fw-bold">ADVENTURE TRAVEL?</h1>
          <p className="text-danger">PROFESSIONAL TOUR</p>

          <Accordion defaultActiveKey="0">

            <Accordion.Item eventKey="0">
              <Accordion.Header>Life-changing travel </Accordion.Header>
              <Accordion.Body>
                Life-changing travel must also be sustainable travel. By bringing together a growing community of people committed to traveling thoughtfully and considerately, we help shape the adventure and eco-tourism industry as it grows. In response to travelers’ desires,
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Around the world.!!</Accordion.Header>
              <Accordion.Body>
                outstanding commitments to responsible travel, we have everything you need to make sure your adventures align with your values.

                Life-changing travel must also be sustainable travel. By bringing together a growing community of people committed to traveling
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Be a Human For Travel</Accordion.Header>
              <Accordion.Body>
                Through compelling images and well-crafted stories, research and curated news of interest, Adventure.Travel inspires the curious to try new destinations, branch out in their activities, interact deeply with nature, and experience different cultures in the most respectful way
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>


        </div>
      </div>

      {/* service section  */}

      <div className="container1 my-5">
        <h1 className="text-center fw-bold p-4 text-dark">Travel Alert</h1>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://kidshelpline.com.au/sites/default/files/bdl_image/header-T-AAR_0.png" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>RESPECTING COMMUNITY FIRST</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://minedu.fi/documents/1410845/7466598/team_638.jpg/6533f5f7-1614-583f-5994-a80ddb3ad91c?t=1588832374000" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>PROMOTING CULTURAL</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/09/04/606434-bikes-gps-090417.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>SAVING WILD PLACES</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://dkt6rvnu67rqj.cloudfront.net/cdn/ff/Kdd8YiNLBsYXiaTu_KHCQf3JdbQWnY_IzoBE70uS2wA/1581516987/public/styles/600x400/public/media/1017253.jpg?itok=UF-gFvqH" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>PROTECTING ANIMALS</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://www.thetinybook.com/wp-content/uploads/2016/04/kids-travel-2.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>PROTECTING CHILDREN</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card  shadow p-2 mb-5 bg-body rounded">
              <img src="https://img.etimg.com/thumb/msid-81811650,width-300,imgsize-94933,,resizemode-4,quality-100/bike-agencies.jpg" class="card-img-top" alt="..." />
              <div class="card-body1">
                <div class="card-body">
                  <div className="about-details">
                    <h5>LOCAL ECONOMIES</h5>
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

export default About;
