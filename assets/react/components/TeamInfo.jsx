import React from "react"
import Collapsible from 'react-collapsible';
import { Search, BrowseLearningCircles } from 'p2pu-search-cards';
import Slider from "react-slick";

import 'p2pu-search-cards/dist/build.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = ({ title }) => (
  <div className="trigger-header">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  </div>
)

const DefaultFAQ = props => (
  <div className="faq-questions">
    <div className="faq-container mb-4 aos-init aos-animate" data-aos="fade">
      <div className="question">
        <h3>What is a learning circle?</h3>
      </div>
      <div className="answer">
        <p>A learning circle is a group of people who meet to learn something together. Learning circles are:</p>
        <ul>
          <li>Open to the public</li>
          <li>Free for participants</li>
          <li>Recurring (generally between 6-8 times)</li>
        </ul>
        <p>Additionally, learning circles are led by a facilitator, rather than a teacher. This means that the person who is organizing your learning circle is not an expert in the subject that you are learning. They are there to help guide the group through the course and ensure that the meeting space is ready each week.</p>
      </div>
    </div>

    <div className="faq-container mb-4 aos-init aos-animate" data-aos="fade">
      <div className="question">
        <h3>What learning materials can be used in learning circles?</h3>
      </div>
      <div className="answer">
        <p>Most learning circles use a free, online course as the basis of study. While P2PU creates some courses, the vast majority of materials come from other organizations around the web. You are welcome to use any course you would like for a learning circle, so long as it is free for participants and not in violation of the terms of service of the course provider. A complete list of courses currently being used by learning circle facilitators is available at https://www.p2pu.org/courses/</p>
      </div>
    </div>

    <div className="faq-container mb-4 aos-init aos-animate" data-aos="fade">
      <div className="question">
        <h3>What personal information do I need to provide to participate?</h3>
      </div>
      <div className="answer">
        <p>Learning circle participants do not need to create an account with Peer 2 Peer University. You can sign up for a learning circle with your name and phone number and/or email address. This information is only used by your facilitator to contact you. If you would like to create a learning circle, then you need to create a P2PU account. Additional questions related to user privacy can be answered by contacting support@p2pu.org.</p>
      </div>
    </div>

    <div className="faq-container mb-4 aos-init aos-animate" data-aos="fade">
      <div className="question">
        <h3>Does it cost money to participate in a learning circle?</h3>
      </div>
      <div className="answer">
        <p>No, learning circles are free to participate in.</p>
      </div>
    </div>

    <div className="faq-container mb-4 aos-init aos-animate" data-aos="fade">
      <div className="question">
        <h3>Do I get any certificate at the end of the learning circle?</h3>
      </div>
      <div className="answer">
        <p>P2PU is not a university and does not offer any accredited degree certificates. Some of the online courses that are used in learning circles have degree and/or certificates, but many of these are not free. If you would like a certificate demonstrating the completion of your learning circle, this is possible if you speak with your facilitator.</p>
      </div>
    </div>

    <div className="faq-container mb-4 aos-init aos-animate" data-aos="fade">
      <div className="question">
        <h3>What is Peer 2 Peer University?</h3>
      </div>
      <div className="answer">
        <p>P2PU is a 501c3 non-profit organization registered in California in the United States, with team members in the US, Canada, and South Africa. The mission of the organization is to create equitable, empowering, and liberating alternatives to mainstream higher education. The majority of funding for P2PU comes from philanthropic and public sources including Institute of Museum and Library Services, Open Society Foundations, Siegel Family Endowment, and Knight Foundation. P2PU also accepts donations and offers a variety of services to organizations that are looking to develop thriving nonformal education communities.</p>
      </div>
    </div>

    <div className="faq-container mb-4 aos-init aos-animate" data-aos="fade">
      <div className="question">
        <h3>Who funds this project?</h3>
      </div>
      <div className="answer">
        <p>This project is supported by the European Union Erasmus+ program. “Learning circles in libraries is a 3-year project (2018-2021) led by Fundacja Rozwoju Społeczeństwa Informacyjnego in Poland, with additional partners in Germany (Stadtbibliothek Kőln), Romania (Fundatia Progress), Portugal (Biblioteca Lucio Craveiro da Silva), and Finland (Suomen eOppimiskeskus ry).</p>

        <p>The aim of the project is to facilitate access to useful online learning resources for adults using the learning circle methodology developed by P2PU. Together we are:</p>

        <ul>
          <li>Conducting background research in 2018-19, including writing a white paper on adult learning and scanning for high quality online learning resources in each partner’s language.</li>
          <li>Translating and adapting the learning circle methodology and software in 2019-20.</li>
          <li>Training up to 25 learning circle organizers in 2020, who will lead facilitation workshops in each country.</li>
          <li>Running a series of facilitation training workshops 2021, leading to learning circles happening in libraries across each of the partner countries.</li>
        </ul>
      </div>
    </div>

    <div className="faq-container mb-4 aos-init aos-animate" data-aos="fade">
      <div className="question">
        <h3>Can anybody start and facilitate a learning circle?</h3>
      </div>
      <div className="answer">
        <p>Yes! Learning circles are free to create, all you need is an account with P2PU. We have begun to create some [LANGUAGE]-language resources for facilitators, which you can view and contribute to <a href="/facilitate">here</a></p>
      </div>
    </div>

  </div>
)

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", bottom: "-3rem", right: "0" }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", bottom: "-3rem", left: "0" }}
      onClick={onClick}
    />
  );
}

class TeamInfo extends React.Component {
  constructor(props) {
    super(props)
    console.log('props', props)
  }

  render() {
    const { teamData } = this.props;
    const organizers = teamData.organizers
    const sliderSettings = {
      arrows: true,
      autoplay: false,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            pauseOnHover: false,
            swipe: true,
          }
        },
      ]
    }

    return(
      <div>
        <Collapsible trigger={<Header title="Organization and Contact Information" />} key="contact">
          <div className="container pt-4 pb-4 contact">
            <div className="row">
              <div className="col-lg-8">
                <p>{teamData.description}</p>
                <div className="text-xs d-flex align-items-center mb-2">
                  <i className="fas fa-map-marker"></i>
                  <p className="mb-0">{teamData.address || "Address"}</p>
                </div>

                <div className="text-xs d-flex align-items-center mb-2">
                  <i className="fas fa-envelope" aria-hidden="true"></i>
                  <p className="mb-0">{teamData.email || "Email"}</p>
                </div>

                <div className="text-xs d-flex align-items-center mb-2">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                  <p className="mb-0">{teamData.twitter || "Twitter"}</p>
                </div>

                <div className="text-xs d-flex align-items-center mb-2">
                  <i className="fab fa-facebook" aria-hidden="true"></i>
                  <p className="mb-0">{teamData.facebook || "Facebook"}</p>
                </div>

                <div className="text-xs d-flex align-items-center mb-2">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                  <p className="mb-0">{teamData.instagram || "Instagram"}</p>
                </div>

                <div className="text-xs d-flex align-items-center mb-2">
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                  <p className="mb-0">{teamData.linkedin || "LinkedIn"}</p>
                </div>
              </div>

              <div className="col-lg-4 profile d-none d-lg-flex align-items-center">
                <div className="card">
                  <div className="card-header bg-secondary">
                    <p className="minicaps text-right mb-0 text-muted">Organizer</p>
                  </div>

                  <div className="card-body">
                    <Slider className="slide-container" settings={sliderSettings}>

                    {
                      organizers.map(organizer => (
                        <div className="slide" key={`${organizer.first_name}-${organizer.city}`}>
                          <div className="d-flex align-items-center">
                            <div className="profile-image mr-2">
                              <div className="img-container">
                                <img className="" src={organizer.avatar_url || "https://www.p2pu.org/assets/images/default_avatar.png"} />
                              </div>
                            </div>
                            <div className="profile-info">
                              <h4 className="mt-0 mb-2">{ organizer.first_name }</h4>
                              { Boolean(organizer.city) && <p className="minicaps text-left mb-1">{ organizer.city }</p>}

                              {
                                Boolean(organizer.contact_url) &&
                                <p className="minicaps text-left mb-1">
                                  <a href={ organizer.contact_url }>Contact page</a>
                                </p>
                              }
                            </div>
                          </div>
                          { Boolean(organizer.bio) && <p className="small mb-0 mt-3">{ organizer.bio }</p>}
                        </div>
                      ))
                    }

                    </Slider>
                    <div className="arrows pos-relative d-flex justify-content-center"></div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </Collapsible>

        <Collapsible trigger={<Header title="Frequently Asked Questions" />} key="faq">
          <div className="container pt-4 pb-4" id="faq">
            <div className="row">
              <div className="col-12">
                <DefaultFAQ />
              </div>
            </div>
          </div>
        </Collapsible>

        <Collapsible trigger={<Header title={`Learning Circles at ${teamData.name}`} />} open={true} key="search">
          <div className="container pt-4 pb-4">
            <div className="row">
              <div className="col-12">
                <Search
                  initialState={{ team_id: teamData.id }}
                  searchSubject={'learningCircles'}
                  Browse={BrowseLearningCircles}
                />
              </div>
            </div>
          </div>
        </Collapsible>
      </div>
    )
  }
}

export default TeamInfo