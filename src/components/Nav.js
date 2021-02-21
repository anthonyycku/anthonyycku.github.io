import "../App.css"
import { Link } from "react-router-dom"

export default function Nav(props) {

    return (
        <div className="row navRow">
            <div className="col-sm-10 navbar">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <button id="about" className="header activated">
                        <img className="filter-markdown" src="markdown.svg" />
                    about.md
                </button>
                </Link>
                <Link to="/projects" style={{ textDecoration: "none" }}>
                    <button id="projects" className="header">
                        <img className="htmlheader" src="html.svg" />
                    projects.html
                </button>
                </Link>
                <Link to="skills" style={{ textDecoration: "none" }}>
                    <button id="skills" className="header">
                        <img className="htmlheader" src="javascript.svg" />
                    skills.js
                </button>
                </Link>
                <Link to="contact" style={{ textDecoration: "none" }}>
                    <button id="contact" className="header">
                        <img className="htmlheader" src="css.svg" />
                    contact.css
                </button>
                </Link>
                <Link to="package" style={{ textDecoration: "none" }}>
                    <button id="package" className="header">
                        <img className="htmlheader packagejson" src="code.svg" />
                    package.json
                </button>
                </Link>
            </div>

        </div>
    )
}