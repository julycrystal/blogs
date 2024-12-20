import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN</p>
              <p className="text-white mt-3">{bio}</p>
              <p className="text-white mt-1">Email: richardpope995@outlook.com</p>
              <p className="text-white mt-1">Phone: 7 9045568527</p>
              <p className="text-white mt-1">Address: Gertsena street, bld. 43, appt. 93, Kostanay, P00T5C4, Kazakhstan</p>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
