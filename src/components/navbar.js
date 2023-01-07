import "../components/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Loader from "react-loaders";

const Navbar = () => {
  document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav-bar");
    const navbarHeight = 265;

    const distFromTop = Math.abs(document.body.getBoundingClientRect().top);

    if (distFromTop >= navbarHeight) navbar.classList.add("fixed-top");
    else navbar.classList.remove("fixed-top");
  });

  return (
    <>
      <div className="navbar">
        <div className="nav-bar">
          <div className="title">
            <FontAwesomeIcon icon={faMedium} className="icon" />
            <h1>Medium</h1>
          </div>
          <div className="nav-content">
            <Link to="/" className="nav-content-1">
              Our Story
            </Link>
            <Link to="/" className="nav-content-2">
              Membership
            </Link>
            <Link to="/" className="nav-content-3">
              Write
            </Link>
            <Link to="/" className="nav-content-4">
              Sign In
            </Link>
            <Link to="/" className="nav-content-5">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="workspace">
        <div className="post-navbar">
          <h1 className="heading">Keep Grossing</h1>
          <h2 className="post-heading">
            Explore and share your experiences, favourite topics, & trending
            blogs!
          </h2>
          <Link to="/" className="reading">
            Start Reading
          </Link>
        </div>
        <div className="trending">
          <div className="trending-title">
            <FontAwesomeIcon icon={faArrowTrendUp} className="trend-icon" />
            <h2>TRENDING ON MEDIUM</h2>
          </div>
          <div className="trending-content top">
            <div className="content 1">
              <h2 className="number">01</h2>
              <Link to="/" className="content1 s d">
                <h2>
                  Brazilian and Football legend Pelé dies at the age 82.
                  Thousands of supporters gathered.
                </h2>
              </Link>
            </div>
            <div className="content 2">
              <h2 className="number">02</h2>
              <Link to="/" className="content2 s d">
                <h2>
                  Learning to Cope with Estrangement: When Children “Cancel”
                  Their Parents
                </h2>
              </Link>
            </div>
            <div className="content 3">
              <h2 className="number">03</h2>
              <Link to="/" className="content3 s d">
                <h2>Ukraine War, 5 January 2023: Part 1</h2>
              </Link>
            </div>
          </div>
          <div className="trending-content bottom">
            <div className="content 4">
              <h2 className="number">04</h2>
              <Link to="/" className="content4 s d">
                <h2>How to Make Money While Learning Data Science in 2023.</h2>
              </Link>
            </div>
            <div className="content 5">
              <h2 className="number">05</h2>
              <Link to="/" className="content5 s d">
                <h2>How senior product managers think differently</h2>
              </Link>
            </div>
            <div className="content 6">
              <h2 className="number">06</h2>
              <Link to="/" className="content6 s d">
                <h2>2022: A Review of the Year in Neuroscience</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="blogs-filters">
          <div className="blogs">
            <div className="blogs-title">
              <h1 className="hot">HOT POSTS</h1>
            </div>
            <div className="blogs-content">
              <div className="blog 1">
                <Link to="/" className="s d">
                  <h2>
                    What I was selling wasn’t even really a ticket. I mean, it
                    wasn’t a scam, either. Not exactly. Here’s how it worked:
                    Comedy clubs, at the time, were never fully booked. So they
                    permitted promotions companies to print discount “tickets” —
                    laminated cards with a phone number printed on them. The
                    customer would call the number on the card, and the comedy
                    club would pack them in whenever they could.
                  </h2>
                  <h5>Jan 6 | 5 mins read</h5>
                </Link>
              </div>
              <div className="blog 2">
                <Link to="/" className="s d">
                  <h2>
                    You know, I know it feels like we just did this, and that’s
                    because we did. You did a buy one, get one free deal on
                    elections this year. But I’m here today for the same reason
                    that I was here the last time, to ask you to vote one more
                    time for my friend and your outstanding senator, Raphael
                    Warnock
                  </h2>
                  <h5>Jan 1 | 3 mins read</h5>
                </Link>
              </div>
              <div className="blog 3">
                <Link to="/" className="s d">
                  <h2>
                    PRES. BARACK OBAMA: Or is it the party that’s trying to put
                    people back to work and lower costs, and make healthcare
                    more affordable, and keep our community safe, and save our
                    planet, and give every woman the ability to make her own
                    decisions about her own body?
                  </h2>
                  <h5>Jan 3 | 7 mins read</h5>
                </Link>
              </div>
              <div className="blog 4">
                <Link to="/" className="s d">
                  <h2>
                    Let me talk about Warnock just a second. Let me say good
                    things about Warnock. Let me testify. As your senator,
                    Reverend Warnock hasn’t been off chasing wacky conspiracy
                    theories. He has not been drumming up fear and division. In
                    Washington, they talk about some folks being show horses and
                    some folks being workhorses. And you got a workhorse here.
                  </h2>
                  <h5>Jan 4 | 10 mins read</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="filters">
            <h1 className="hot topics">Discover your favourite topics here:</h1>
            <div className="topic">
              <Link to="/" className="d topics t">
                <h2>Sports</h2>
              </Link>
              <Link to="/" className="d topics t">
                <h2>Politics</h2>
              </Link>
              <Link to="/" className="d topics t">
                <h2>Technology</h2>
              </Link>
              <Link to="/" className="d topics t">
                <h2>Programming</h2>
              </Link>
              <Link to="/" className="d topics t">
                <h2>Career</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale" />
    </>
  );
};

export default Navbar;
