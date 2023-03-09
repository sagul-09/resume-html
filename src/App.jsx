import "./App.css";
import { TbBrandVscode, TbBrandJavascript } from "react-icons/tb";
import { SiAdobepremierepro, SiCanva } from "react-icons/si";
import { RxFigmaLogo } from "react-icons/rx";
import {
  GrLanguage,
  GrWorkshop,
  GrProjects,
  GrDomain,
  GrReactjs,
} from "react-icons/gr";
import { BsTools } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { BiBook, BiRename } from "react-icons/bi";
import { BsPersonVcard, BsPersonAdd } from "react-icons/bs";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaCopyright,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container1">
          <div className="title">
            <img src="src/img/pro.jpeg" className="pic"></img>
          </div>
          <div className="info">
            <h1 className="name">
              <BiRename /> :<span> SAGUL</span>
            </h1>
            <h1 className="domain">
              <GrDomain /> :<span> FRONT-END DEVELOPER</span>
            </h1>
          </div>
        </div>
        <hr></hr>

        {/* about */}
        <div className="container1">
          <h4 className="title">
            About <BsPersonVcard /> :
          </h4>
          <div className="content">
            As a front-end web developer, I specialize in the design and
            implementation of user-facing web pages and applications. I have a
            strong understanding of HTML, CSS, and JavaScrip.
          </div>
        </div>

        {/* QUALIFICATION BOX CONTAINER1*/}
        <div className="container1">
          {/* <div className="content"> */}
          <h4 className="title">
            QUALIFICATION <BiBook /> :
          </h4>
          <div className="content">
            <table className="table">
              <tr>
                <th>EDUCATION</th>
                <th>PASS-OUT</th>
                <th>MARKS [%]</th>
              </tr>
              <tr>
                <td>10TH STD</td>
                <td>2008-2018</td>
                <td>74.4%</td>
              </tr>
              <tr>
                <td>12TH STD</td>
                <td>2018-2020</td>
                <td>77.8%</td>
              </tr>
              <tr>
                <td>BE.CSE</td>
                <td>2020-(current)</td>
                <td>90%</td>
              </tr>
            </table>
          </div>
        </div>

        {/* SKILL  */}
        <div className="container1">
          <h4 className="title">
            SKILL'S <GiSkills /> :
          </h4>
          <div className="content">
            <ul>
              <li>
                <div className="list-item">
                  <div className="list-item-name">
                    C <FaCopyright />
                  </div>
                </div>
              </li>
              <div className="progress-bar">
                <div className="c">{/* <span>60%</span> */}</div>
              </div>
              <li>
                <div className="list-item">
                  <div className="list-item-name">
                    HTML <FaHtml5 />
                  </div>
                </div>
              </li>
              <div className="progress-bar">
                <div className="html">{/* <span>75%</span> */}</div>
              </div>
              <li>
                <div className="list-item">
                  <div className="list-item-name">
                    CSS
                    <FaCss3Alt />
                  </div>
                </div>
              </li>
              <div className="progress-bar">
                <div className="css">{/* <span>65%</span> */}</div>
              </div>

              <li>
                <div className="list-item">
                  <div className="list-item-name">
                    JavaScript <TbBrandJavascript />
                  </div>
                </div>
              </li>
              <div className="progress-bar">
                <div className="javascript">{/* <span>45%</span> */}</div>
              </div>

              <li>
                <div className="list-item">
                  <div className="list-item-name">
                    React <GrReactjs />
                  </div>
                </div>
              </li>
              <div className="progress-bar">
                <div className="react">{/* <span>45%</span> */}</div>
              </div>

              <li>
                <div className="list-item">
                  <div className="list-item-name">
                    Python <FaPython />
                  </div>
                </div>
              </li>
              <div className="progress-bar">
                <div className="python">{/* <span>45%</span> */}</div>
              </div>
            </ul>
            <div className="content">
              <span className="bar-info">
                The above bar represents my skill level
              </span>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="container1">
          <h4 className="title">
            TOOL'S <BsTools /> :
          </h4>
          <div className="content">
            <ul>
              <li>
                <div className="list-item">
                  <div className="list-item-name">
                    Figma
                    <RxFigmaLogo />
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <div className="list-item-name">
                    VsCode
                    <TbBrandVscode />
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <div className="list-item-name">
                    Premier Pro
                    <SiAdobepremierepro />
                  </div>
                </div>
              </li>
              <li>
                <div className="list-item">
                  <div className="list-item-name">
                    Canva
                    <SiCanva />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* certification */}
        <div className="container1">
          <h4 className="title">
            WORKSHOP & CERTIFICATION <GrWorkshop />:
          </h4>
          <div className="content">
            <ul>
              <li>React-js</li>
              <li>HTML</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div className="container1">
          <h4 className="title">
            PROJECTS <GrProjects /> :
          </h4>
          <div className="content">
            <ul>
              <li>Resume using HTML & CSS</li>
              <li>Simple lane detection system </li>
            </ul>
          </div>
        </div>

        {/* Language */}
        <div className="container1">
          <h4 className="title">
            LANGUAGE'S KNOWN <GrLanguage /> :
          </h4>
          <div className="content">
            <ul>
              <li>English</li>
              <div className="progress-bar">
                <div className="english">{/* <span>60%</span> */}</div>
              </div>
              <li>Tamil</li>
              <div className="progress-bar">
                <div className="tamil">{/* <span>60%</span> */}</div>
              </div>
              <li>Hindi</li>
              <div className="progress-bar">
                <div className="hindi">{/* <span>60%</span> */}</div>
              </div>
              <li>Urdu</li>
              <div className="progress-bar">
                <div className="urdu">{/* <span>60%</span> */}</div>
              </div>
            </ul>
            <span className="bar-info">
              The above bar represents my language level
            </span>
          </div>
        </div>

        <div className="container1">
          <h4 className="title">
            SOCIAL'S <BsPersonAdd /> :
          </h4>
          <ul>
            <li>
              <div className="list-item">
                <div className="list-item-name">
                  LinkedIn <FaLinkedin />
                </div>
                <div className="id"> @sagul </div>
              </div>
            </li>
            <li>
              <div className="list-item">
                <div className="list-item-name">
                  Github <FaGithub />
                </div>

                <span className="id"> @sagul-09 </span>
              </div>
            </li>
            <li>
              <div className="list-item">
                <div className="list-item-name">
                  Instagram <FaInstagram />
                </div>
                <span className="id"> @detail_snap_ </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
