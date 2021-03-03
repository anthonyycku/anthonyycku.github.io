import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import React, { useEffect } from "react";
import axios from "axios";

//Components
import Main from "./components/Main"
import Linebar from "./components/Linebar"
import Nav from "./components/Nav"
import Skills from "./components/pages/Skills"
import Contact from "./components/pages/Contact"
import Projects from "./components/pages/Projects"
import HeaderBar from "./components/HeaderBar"
import Links from "./components/Links"
import Package from "./components/pages/Package"

function App() {

  useEffect(() => {
    try {
      axios.get("https://jeffify.herokuapp.com")
      axios.get("https://jeffify-spotify.herokuapp.com")
    } catch (err) { }

    let about = document.getElementById("about");
    let projects = document.getElementById("projects");
    let skills = document.getElementById("skills");
    let contact = document.getElementById("contact");
    let packagejson = document.getElementById("package");

    about.addEventListener("click", () => {
      about.classList.add("activated")
      projects.classList.remove("activated")
      skills.classList.remove("activated")
      contact.classList.remove("activated")
      packagejson.classList.remove("activated")
    })
    projects.addEventListener("click", () => {
      projects.classList.add("activated")
      skills.classList.remove("activated")
      contact.classList.remove("activated")
      about.classList.remove("activated")
      packagejson.classList.remove("activated")
    })
    skills.addEventListener("click", () => {
      skills.classList.add("activated")
      contact.classList.remove("activated")
      about.classList.remove("activated")
      projects.classList.remove("activated")
      packagejson.classList.remove("activated")
    })
    contact.addEventListener("click", () => {
      contact.classList.add("activated")
      about.classList.remove("activated")
      projects.classList.remove("activated")
      skills.classList.remove("activated")
      packagejson.classList.remove("activated")
    })
    packagejson.addEventListener("click", () => {
      packagejson.classList.add("activated")
      contact.classList.remove("activated")
      about.classList.remove("activated")
      projects.classList.remove("activated")
      skills.classList.remove("activated")

    })

  }, [])

  return (
    <div className="App container">

      <Router>
        {/* Header Bar */}
        <HeaderBar />

        {/* Line of numbers */}
        <div className="lineContainer">
          <Linebar />
        </div>

        {/* Link bar */}
        <Links />

        {/* Navigation */}
        <Nav />

        {/* Switches */}
        <div id="content">
          <Switch>
            {/* About page */}
            <Route exact path="/">
              <Main />
            </Route>
            {/* Projects page */}
            <Route exact path="/projects">
              <Projects />
            </Route>
            {/* Skills page */}
            <Route exact path="/skills">
              <Skills />
            </Route>
            {/* Contact page */}
            <Route exact path="/contact">
              <Contact />
            </Route>
            {/* Package.json */}
            <Route exact path="/package">
              <Package />
            </Route>

          </Switch>
        </div>

      </Router>
    </div>
  )
}

export default App;
