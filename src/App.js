import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import logo from "./img/logoabra.png";
import image from "./img/test1.png";

import { Card, Carousel, Col, Container, Nav, NavDropdown, Navbar, Row, Image } from "react-bootstrap";

function WhyChooseUsSection() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>On Time</Card.Header>
            <Card.Body>
              <Card.Title>Card Title </Card.Title>

              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Effective and Efficient </Card.Header>
            <Card.Body>
              <Card.Title>Card Title </Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Competitive Fees</Card.Header>
            <Card.Body>
              <Card.Title>Card Title </Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function ControlledAbraCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} color="black">
      <Carousel.Item>
        <Container>
          <img className="d-block w-100" src={image} height="300" alt="First slide" />
        </Container>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <img className="d-block w-100" src={image} height="300" alt="Second slide" />
        </Container>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Container>
          <img className="d-block w-100" src={image} height="300" alt="Third slide" />
        </Container>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function OurTeamSection() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Responsive Our Team Section</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <section>
          <div class="row">
            <h3 class="ourteam">Our Team</h3>
          </div>
          <div class="row">
            <div class="column">
              <div class="card">
                <div class="img-container">
                  <img src="profile-img-1.png" />
                </div>
                <h3>Chandra Sunaryo</h3>
                <p>Creative and Marketing Manager</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="img-container">
                  <img src="profile-img-2.png" />
                </div>
                <h3>Bernardine D.P.</h3>
                <p>Director</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <div class="img-container">
                  <Image src={logo} />
                </div>
                <h3>Chandra Agung S.</h3>
                <p>Operations Manager</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card">
                <div class="img-container">
                  <img src="profile-img-3.png" />
                </div>
                <h3>Agung Dwi Martha</h3>
                <p>Project Manager</p>
                <div class="icons">
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}

function AbraNavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Container>
              <Navbar.Brand href="#home">
                <img src={logo} width="80" height="40" className="d-inline-block align-top" alt="React Bootstrap logo" />
              </Navbar.Brand>
            </Container>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#aboutus">About Us</Nav.Link>
              <Nav.Link href="#visimisi">vision and mission</Nav.Link>
              <NavDropdown title="Our Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Advertising</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Publishing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Event Organising</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Printing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Portfolio</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

function Section(props) {
  return <h3>{props.string}</h3>;
}

function AboutUs() {
  return (
    <Container>
      <h6 class="aboutus">
        Kisah kami dimulai pada tahun 2006 di Jakarta dengan penawaran iklan untuk company branding dan penerbitan layanan penuh untuk Persatuan Perusahaan Air Minum Indonesia (PERPAMSI) dan Perusahaan Daerah Air Minum (PDAM). Sepanjang
        perjalanan karier, kami bertemu orang-orang baik yang mencoba melakukan pekerjaannya dengan integritas dan kegigihan tinggi dengan kepribadian yang luar biasa. Menyadari kesamaan nilai yang kami anut, dan melihat bahwa kami dapat
        menjadi tim yang dapat bekerja sama, kami memutuskan untuk mendirikan perusahaan periklanan PT Agung Berkah Rejeki Abadi (ABRA) pada tahun 2022 dengan Akta Pendirian No. 01 oleh Notaris Ninik Sukadarwati, SH yang berkedudukan di
        Jakarta Timur setelah mencapai banyak hal selama beberapa tahun dalam penerbitan buku agenda kerja eksklusif, buku profil, buku profil/direktori, kalender, perayaan acara besar perusahaan, surat kabar, dan media luar ruang.
      </h6>
    </Container>
  );
}

function HorizontalLine() {
  return (
    <div class="horizontal">
      <Container>
        <hr></hr>
      </Container>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <Row>
        <Col>
          <Container>
            <Row>
              <Row>
                <h2>Contact Info</h2>
              </Row>
              <Row>
                <Col>
                  <Container>
                    <h5>Address:</h5>
                    <a>
                      Jalan Test
                      <br />
                      RT. 01/03 Kodam
                      <br />
                      Duren Sawit Jakarta Timur
                      <br />
                      1430 DKI Jakarta
                    </a>
                  </Container>
                </Col>
                <Col>
                  <Container>
                    <h5>Phone Number:</h5>
                    <a>
                      Telp. (021) 02349234
                      <br></br>
                      Whatshapp 08123843929
                    </a>
                  </Container>
                </Col>
              </Row>
            </Row>
          </Container>
        </Col>
        <Col>
          <Image src={logo} fluid="true"></Image>
        </Col>
      </Row>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AbraNavBar />
      <Section string="ABRA" />
      <ControlledAbraCarousel />
      <HorizontalLine />
      <Section string="About Us" />
      <AboutUs />
      <OurTeamSection />
      <HorizontalLine />
      <Section string="Why Choose Us?" />
      <WhyChooseUsSection />
      <hr></hr>
      <Footer />
    </div>
  );
}

export default App;
