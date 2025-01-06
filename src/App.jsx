import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <body>
      <div className="navbar">
        <header className="header">
          <a href="#logo" className="logo">
            <img
              src="src\assets\Black and White Minimalist Professional Initial Logo (2).png"
              alt=""
              className="image"
            />
            <span>Optimistic</span>
          </a>

          <nav className="nav">
            <a href="#Home" className="but">
              Home
            </a>
            <a href="Target" className="but">
              Target
            </a>
            <a href="Pricing" className="but">
              Pricing
            </a>
            <a href="Blog" className="but">
              Blog
            </a>
            <a href="#Sign Up" className="but">
              Sign Up
            </a>
            <a href="#Login" className="but">
              Login
            </a>
          </nav>

          <a href="#contact" className="button">
            Contact Us
          </a>

          <button className="menu">
            <img
              src="src\assets\menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
              alt="menu"
            />
          </button>
        </header>
        <div className="allPart">
          <div className="hero">
            <div className="left">
              <span>very proud to introduce</span>
              <h1>Seamless Learning for Brighter Future</h1>
              <div className="para">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate adipisci perspiciatis pariatur, maiores sint
                  excepturi nulla ullam aspernatur ipsum tenetur, molestiae a.
                  Maxime dignissimos natus, suscipit modi quibusdam, sunt hic
                  consectetur sit qui delectus quam quae, provident quaerat
                  laborum rerum!
                </p>
              </div>
              <div className="buttons">
                <a href="#start" className="a1">
                  Start Now
                </a>
                <a href="#tour" className="a2">
                  Take tour
                </a>
              </div>
            </div>
            <div className="right">
              <img src="src\assets\3d-svgrepo-com.svg" alt="" />
            </div>
          </div>

          <div className="foot">
            <span>Trusted by the best</span>
            <div className="footersection">
              <div className="client">
                <img
                  src="src\assets\70d584e3-4eb3-4ed1-8df8-944e9b123089.svg"
                  alt="github"
                />
                <span>Git Hub</span>
              </div>
              <div className="client">
                <img
                  src="src\assets\a07d8150-2a82-4e9d-82a5-28a4b324f6d0.svg"
                  alt=""
                />
                <span>Microsoft</span>
              </div>
              <div className="client">
                <img
                  src="src\assets\23f3b83f-87fd-41d0-9aac-2b8706c2bfe9.svg"
                  alt=""
                />
                <span>Linkedin</span>
              </div>
              <div className="client">
                <img
                  src="src\assets\b2c1e79e-b0c3-4cc2-b22e-ff5e1e662599.svg"
                  alt=""
                />
                <span>Whatsapp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="other">
        <div className="upper">
          <span>Our competitive Advantage</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            illum cumque enim sit nisi velit et reprehenderit ullam assumenda
            amet.
          </p>
        </div>
        <div className="lower">
          <div className="lower1" id="colorFont1">
            <img
              src="src\assets\idea-lamp-svgrepo-com.svg"
              alt=""
              className="gridImage"
            />
            <span>Personalized Learning</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima
              fuga illo sint cupiditate? Saepe.
            </p>
          </div>
          <div className="lower1" id="colorFont2">
            <img
              src="src\assets\achievement-finance-goal-svgrepo-com.svg"
              alt=""
              className="gridImage"
            />
            <span>Affordability</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima
              fuga illo sint cupiditate? Saepe.
            </p>
          </div>
          <div className="lower1" id="colorFont3">
            <img
              src="src\assets\business-partnership-svgrepo-com.svg"
              alt=""
              className="gridImage"
            />
            <span>Industry Partnership</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima
              fuga illo sint cupiditate? Saepe.
            </p>
          </div>
          <div className="lower1" id="colorFont4">
            <img
              src="src\assets\rocket-svgrepo-com.svg"
              alt=""
              className="gridImage"
            />
            <span>Innovation Technology</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima
              fuga illo sint cupiditate? Saepe.
            </p>
          </div>
          <div className="lower1" id="colorFont5">
            <img
              src="src\assets\phone-call-svgrepo-com.svg"
              alt=""
              className="gridImage"
            />
            <span>Responsive Support</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima
              fuga illo sint cupiditate? Saepe.
            </p>
          </div>
          <div className="lower1" id="colorFont6">
            <img
              src="src\assets\graph-svgrepo-com.svg"
              alt=""
              className="gridImage"
            />
            <span>Analytics and Insights</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut minima
              fuga illo sint cupiditate? Saepe.
            </p>
          </div>
        </div>
      </div>
      <div className="allTest">
        <div className="testimonial">
          <span className="userName">What Other Say About Us</span>
          <div className="test">
            <div className="testicon">
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolore ullam quidem officia beatae quia."
              </p>
              <img src="src\assets\lady-5323329_1280.png" alt="" />
              <span>Sara Johnson</span>
              <p className="qualify">
                8<sup>th</sup> grade English Teacher
              </p>
            </div>
            <div className="testicon">
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolore ullam quidem officia beatae quia."
              </p>
              <img src="src\assets\lady-5323329_1280.png" alt="" />
              <span>Mark Devis</span>
              <p className="qualify">Parent</p>
            </div>
            <div className="testicon">
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolore ullam quidem officia beatae quia."
              </p>
              <img src="src\assets\lady-5323329_1280.png" alt="not found" />
              <span>Dr. James Carter</span>
              <p className="qualify">School Administrator</p>
            </div>
          </div>
          <div className="imageicon">
            <div className="iconImage">
              <img
                src="src\assets\triangles-1430105_1920.png"
                alt="Icon Image"
              />
            </div>
            <div className="iconImageSide">
              <span>Get The Latest Updates</span>
              <p>Sign Up for our newsletter</p>
              <form className="form">
                <input type="email" placeholder="  Email" />
                <button>Send</button>
              </form>
              <div className="lower_input">
                <p>
                  by signing up to our newsletter you agree to our{" "}
                  <a href="#Term ofservices"> Term of services </a> and{" "}
                  <a
                    href="#privacy
                  policy"
                  >
                    {" "}
                    privacy policy{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerSectionDoc">
        {" "}
        <footer className="footer">
          <div className="footerleft">
            <div className="footerlogo">
              <img
                src="src\assets\Black and White Minimalist Professional Initial Logo (2).png"
                alt=""
              />
              <span>Optimistic</span>
            </div>
            <span> Seamless Learning for Brighter Future</span>
            <div className="footerImages">
              <div>
                {" "}
                <a href="#Whatsapp">
                  <img
                    src="src\assets\b2c1e79e-b0c3-4cc2-b22e-ff5e1e662599.svg"
                    alt="whatsapp"
                  />
                </a>
              </div>
              <div>
                {" "}
                <a href="#Linkedin">
                  <img
                    src="src\assets\23f3b83f-87fd-41d0-9aac-2b8706c2bfe9.svg"
                    alt="Linkedin"
                  />
                </a>
              </div>
              <div>
                {" "}
                <a href="#Microsoft">
                  <img
                    src="src\assets\a07d8150-2a82-4e9d-82a5-28a4b324f6d0.svg"
                    alt="Microsoft"
                  />
                </a>
              </div>
              <div>
                {" "}
                <a href="#Git Hub">
                  <img
                    src="src\assets\70d584e3-4eb3-4ed1-8df8-944e9b123089.svg"
                    alt="Git Hub"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footerright">
            <div className="footerleftobject">
              <span>products</span>
              <a href="#Overview">Overview</a>
              <a href="#Solution">Solution</a>
              <a href="#Pricing">Pricing</a>
              <a href="#Customers">Customers</a>
            </div>
            <div className="footerleftobject">
              {" "}
              <span>Company</span>
              <a href="#About">About</a>
              <a href="#Jobs">Jobs</a>
              <a href="#Press">Press</a>
              <a href="#Blog">Blog</a>
            </div>
            <div className="footerleftobject">
              {" "}
              <span>Support</span>
              <a href="#Contact">Contact</a>
              <a href="#Documentation">Documentation</a>
              <a href="#Chat">Chat</a>
              <a href="#FAQ">FAQ</a>
            </div>
            <div className="footerleftobject">
              {" "}
              <span>Legal</span>
              <a href="#privacy">privacy policy</a>
              <a href="#Term">Term of services </a>
              <a href="#Cookies">Cookies Setting</a>
            </div>
          </div>
        </footer>
      </div>
    </body>
  );
}

export default App;
