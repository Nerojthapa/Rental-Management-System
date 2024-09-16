import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import successAnimation from "./success-animation.json"; // Import the animation file

function SuccessScreen() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Navigate to home or wherever you want after success
  };

  // Lottie options
  const defaultOptions = {
    loop: false, // Play the animation only once
    autoplay: true, // Start playing on render
    animationData: successAnimation, // JSON animation file
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Adjust the aspect ratio
    },
  };

  return (
    <Container className="text-center my-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Lottie options={defaultOptions} height={200} width={200} /> {/* Animation */}
          <h1>Order Successful!</h1>
          <p className="my-4">
            Thank you for your order. Your payment method has been successfully processed.
          </p>
          <p>
            We have received your order and it will be delivered soon. You will receive
            further updates via email or SMS.
          </p>
          <Button
            type="button"
            className="btn-block my-3"
            onClick={handleGoHome}
          >
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SuccessScreen;