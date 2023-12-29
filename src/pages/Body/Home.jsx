
import React from 'react';
import './Home.css';
import { Table ,Container, Row, Col, Carousel,Form, Button } from 'react-bootstrap'; 
import aboutUsImage from './images/aboutUs.png';
import Slider from 'react-slick';
import { FaCalendarAlt, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
 
    const services = [
      {
        image: 'https://images.pexels.com/photos/4677854/pexels-photo-4677854.jpeg',
      
      },
      {
        image: 'https://images.pexels.com/photos/4969866/pexels-photo-4969866.jpeg',
       
      },
      
      {
        image: 'https://images.pexels.com/photos/6663565/pexels-photo-6663565.jpeg',
       
      },
    ];

    


  const handleSubmit = (event) => {
    event.preventDefault();

  };

    const branches = [
        { id: 1, name: 'Branch 1', tables: 10, services: ['Haircut', 'Manicure', 'Pedicure'] },
        { id: 2, name: 'Branch 2', tables: 8, services: ['Facial', 'Massage', 'Waxing'] },
        { id: 3, name: 'Branch 3', tables: 8, services: ['Facial', 'Massage', 'Waxing'] },
        { id: 3, name: 'Branch 4', tables: 12, services: ['Facial', 'Massage', 'Waxing'] },
        { id: 3, name: 'Branch 5', tables: 10, services: ['Facial', 'Massage', 'Waxing'] },
      
      ];

  return (
    <div className="Body-page">
    <div className="landing-page-body">

    <div class="content-firstP">
    <div className="content-firstP">
    <h1>The Beauty Salon</h1>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    <div className="mini-button"><p> Book An Appointment</p></div>
    </div>
    </div>
    <div className="slider-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="https://images.pexels.com/photos/6724446/pexels-photo-6724446.jpeg" // Replace with your image path
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="https://images.pexels.com/photos/6724357/pexels-photo-6724357.jpeg" // Replace with your image path
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block w-100 slider-image"
        src ="https://images.pexels.com/photos/6628810/pexels-photo-6628810.jpeg"
        alt="Third-Slide"
        />
        </Carousel.Item>
      </Carousel>
    </div>
    </div>

    <div className="services-page">
      <div className="description-page">
      <h1 id="service-header">Services Offered</h1>
       <p id="paragraph-description"> We offer state-of-the-art services to cater to your needs. Our experienced team is dedicated to providing high-quality
       and personalized solutions. Explore our range of services designed to enhance your well-being and beauty.</p> 
      </div>
      <div className="slider-container-services">
      <Carousel>
      
        {services.map((service, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 slider-image" src={service.image} alt={`${service.title} slide`} />
            <Carousel.Caption>
              <h4>{service.title}</h4>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h4>Massage</h4>
    </div>

    <div className="slider-container-services">
    <Carousel>
    {services.map((service, index) => (
    <Carousel.Item key={index}>
    <img className="d-block w-100 slider-image" src={service.image} alt={`${service.title} slide`} />
    <Carousel.Caption>
    <h4>{service.title}</h4>
    </Carousel.Caption>
    </Carousel.Item>
    ))}
    </Carousel>

    <h5 className="services-Headers">Hair Treatment</h5>
    </div>

    <div className="slider-container-services">
     <Carousel>
      {services.map((service, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 slider-image" src={service.image} alt={`${service.title} slide`} />
          <Carousel.Caption>
            <h4>{service.title}</h4>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      </Carousel>
      <h4>Body Treatment</h4>
      </div>
    
    </div>
    <div className="about-icons">
        <div className="about-icon">
          <FaCalendarAlt size={30} />
          <p>Date</p>
          <p className="icon-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="about-icon">
          <FaCheckCircle size={30} />
          <p>Quality</p>
          <p className="icon-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="about-icon">
          <FaMapMarkerAlt size={30} />
          <p>Map</p>
          <p className="icon-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="about-icon">
          <BsFillGridFill size={30} />
          <p>Services</p>
          <p className="icon-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      
    <div className="about-us-section">
  <div className="content">
    <div className="about-us">
      <img src={aboutUsImage} alt="About Us" />
    </div>
    <div className="about-caption">
      <h2>About Us</h2>
      <p className="about-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida massa ut ante ullamcorper,
        eget egestas velit vulputate. Sed vitae ipsum non mauris eleifend imperdiet vel sit amet justo.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida massa ut ante ullamcorper,
        eget egestas velit vulputate. Sed vitae ipsum non mauris eleifend imperdiet vel sit amet justo.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida massa ut ante ullamcorper,
        eget egestas velit vulputate. Sed vitae ipsum non mauris eleifend imperdiet vel sit amet justo.
      </p>

      </div>
      </div>
    </div>

    <div className="testimonials-page">
      <h1>Testimonials</h1>

      <div className="testimonial-container">
        <div className="testimonial">
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida massa ut ante ullamcorper."
          </p>
          <p className="testimonial-author">- John Doe</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          </p>
          <p className="testimonial-author">- Jane Smith</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          </p>
          <p className="testimonial-author">- Alex Johnson</p>
        </div>
      </div>
      
    </div>
    <div className="branch-services-section">
      <Container>
        <h1>Branch Services</h1>
        <Row>
          <Col md={6}>
            <Table striped bordered hover className="custom-table">
              <thead>
                <tr>
                  <th>Branch</th>
                  <th>Available Tables</th>
                  <th>Services Offered</th>
                </tr>
              </thead>
              <tbody>
                {branches.map((branch, index) => (
                  <tr key={branch.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                    <td>{branch.name}</td>
                    <td>{branch.tables}</td>
                    <td>{branch.services.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <div className="table-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida massa ut ante ullamcorper, eget egestas
                velit vulputate. Sed vitae ipsum non mauris eleifend imperdiet vel sit amet justo. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Proin gravida massa ut ante ullamcorper, eget egestas velit vulputate. Sed vitae
                ipsum non mauris eleifend imperdiet vel sit amet justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin gravida massa ut ante ullamcorper, eget egestas velit vulputate. Sed vitae ipsum non mauris eleifend
                imperdiet vel sit amet justo.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="contact-us-section">
      <Container>
        <Row>
          {/* Left column for Contact Us information */}
          <Col md={6}>
            <div>
              <h2>Contact Us</h2>
              <p>
                For inquiries and support, please feel free to contact us via email at{' '}
                <a href="mailto:info@example.com">info@example.com</a> or call us at +1 (555) 123-4567.
              </p>
            </div>
          </Col>

          {/* Right column for the contact form */}
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default  Home;
