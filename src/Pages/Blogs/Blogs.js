import "./Blogs.css";
import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What is the difference between authorization and authentication?
            </Accordion.Header>
            <Accordion.Body>
              Both Authentication and Authorization area unit utilized in
              respect of knowledge security that permits the safety on an
              automatic data system. Each area unit terribly crucial topics
              usually related to the online as key items of its service
              infrastructure. However, each the terms area unit terribly
              completely different with altogether different ideas. whereas it’s
              true that they’re usually employed in an equivalent context with
              an equivalent tool, they’re utterly distinct from one another. In
              authentication process, the identity of users are checked for
              providing the access to the system. While in authorization
              process, person’s or user’s authorities are checked for accessing
              the resources. Authentication is done before the authorization
              process, whereas authorization process is done after the
              authentication process.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Why are you using firebase and what other option do you have to
              implement authentication?
            </Accordion.Header>
            <Accordion.Body>
             I am using firebase because it's authentication system is very secure protected than my server.Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What other serrvices does firebase provide other than
              authentication?
            </Accordion.Header>
            <Accordion.Body>
              Firebase provide a lot's of other things than authentication. There are Cloud Firestore,Cloud Function,Cloud Massaging,Cloud Storage,Realtime Database and many more things.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blogs;
