import "./App.css";
import { Button, Col, Row } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  const currentDay = new Date();
  const year = currentDay.getFullYear();

  return (
    <div>
      <div className="header-content">
        <div className="content-inside">
          <img
            src="https://illamthedikalvi.tnschools.gov.in/assets/logo/itklogo.png"
            width="190"
            alt="ILLAM THEDI KALVI IMG"
          />
        </div>
      </div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            src="https://illamthedikalvi.tnschools.gov.in/assets/images/Banner%202.png"
            alt="Illam thedi kalvi banner 1"
          />
          <Carousel.Caption>
            <h4>
              <b>இல்லம் தேடிக் கல்வி</b>
            </h4>
            <p>
              <b>தமிழ்நாடு அரசு</b> பள்ளிக் கல்வித் துறையின் ஒரு முன்முயற்சி
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://illamthedikalvi.tnschools.gov.in/assets/images/Banner%201.png"
            alt="illam thedi kalvi banner 2"
          />
          <Carousel.Caption>
            <h4>
              <b>ILLAM THEDI KALVI</b>
            </h4>
            <p>An initiative of the School Education Department</p>
            <b>Tamil Nadu Government</b>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="body-content">
        <Row>
          <Col lg="12" md="12">
            <center>
              <Button color="primary" className="button-styles">
                Programme Guidelines
              </Button>
            </center>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <iframe
              src="https://lmes-content.s3.ap-south-1.amazonaws.com/ANTHEM_SONG_SSA.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4HOG6W4V3VS4CB5U%2F20211117%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20211117T170142Z&X-Amz-Expires=1800&X-Amz-Signature=fcbe04906651db7640eadd3dbc5f0c90cd9128d2cea9f13f7c40363170aaec79&X-Amz-SignedHeaders=host"
              title="frameplaye"
            />
          </Col>
          <Col md="6">
            <b>
              வணக்கம்!
              <br />
              <br /> இல்லம் தேடிக் கல்வி ஒரு தன்னார்வ தொண்டு.
            </b>{" "}
            கொரோனா பெருந்தொற்றுப் பரவல் சார்ந்த பொது முடக்க காலங்களில் அரசு
            பள்ளிகளில் ஒன்று முதல் எட்டாம் வகுப்பு வரை பயிலும் மாணவர்களின்
            கற்றல் இடைவெளி மற்றும் இழப்புகளை சரி செய்ய இல்லம் தேடிக் கல்வித்
            திட்டம் செயல்படுத்தப்பட உள்ளது. பள்ளி முடிந்த பின்பு மாலை நேரங்களில்
            'இல்லம் தேடிக் கல்வி' மையங்களில் கற்பித்தல் சேவையை மேற்கொள்ள உள்ள
            தன்னார்வலர்கள் பதிவு செய்ய ஏதுவாக, படிவம் இவ்விணைய தளத்தில்
            வழங்கப்பட்டு உள்ளது.
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12">
            <b>தன்னார்வலர்கள்..</b>
            <br />
            1. வாரத்திற்கு குறைந்தது ஆறு மணி நேரம் குழந்தைகளுடன் செலவிட தயாராக
            இருக்க வேண்டும் (அல்லது) பகுதி நேரமாகவும் தன்னார்வலராக இருக்கலாம்.
            <br /> 2. கண்டிப்பாக குழந்தைகளுடன் உரையாட தமிழ் தெரிந்திருக்க
            வேண்டும்
            <br /> 3. தமிழ், ஆங்கிலம், மற்றும் கணிதம் கற்றுத்தர வேண்டும்.
            (பயிற்சிகளும் உபகரணங்களும் வழங்கப்படும்) <br />
            4. யார் நிர்பந்தமும் இன்றி தன்முனைப்பாக பங்கேற்க வேண்டும்
            <br /> 5. குறைந்தபட்சம் <b>17 வயது</b> நிரம்பி இருத்தல் அவசியம்
          </Col>
        </Row>
      </div>
      <div className="button-styles">
        <center>
          <Button>
            தன்னார்வலர்களுக்கான பதிவேற்று படிவத்தை தொடங்கு / Click here to start
            the Volunteer Registration Form{" "}
          </Button>
        </center>
      </div>
      <div className="footer-s">
        <div className="footer-content">
          <p>illamthedikalvi@gmail.com</p>
          <sub>
            ©{year} Department of School Education Tamil Nadu All Rights
            Reserved
          </sub>
          <span>
            <img
              className="img-prop"
              src="https://illamthedikalvi.tnschools.gov.in/assets/logo/logo1.png"
              width="190"
              alt="ILLAM THEDI KALVI IMG"
            ></img>
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
