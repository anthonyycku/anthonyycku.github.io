import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import React, { useEffect } from "react";

//Components
import Main from "./components/Main"
import Linebar from "./components/Linebar"
import Nav from "./components/Nav"
import Skills from "./components/pages/Skills"
import Contact from "./components/pages/Contact"
import Projects from "./components/pages/Projects"
import HeaderBar from "./components/HeaderBar"
import Links from "./components/Links"

function App() {

  useEffect(() => {
    let about = document.getElementById("about");
    let projects = document.getElementById("projects");
    let skills = document.getElementById("skills");
    let contact = document.getElementById("contact");

    about.addEventListener("click", () => {
      about.classList.add("activated")
      projects.classList.remove("activated")
      skills.classList.remove("activated")
      contact.classList.remove("activated")
    })
    projects.addEventListener("click", () => {
      projects.classList.add("activated")
      skills.classList.remove("activated")
      contact.classList.remove("activated")
      about.classList.remove("activated")
    })
    skills.addEventListener("click", () => {
      skills.classList.add("activated")
      contact.classList.remove("activated")
      about.classList.remove("activated")
      projects.classList.remove("activated")
    })
    contact.addEventListener("click", () => {
      contact.classList.add("activated")
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

          </Switch>
        </div>

      </Router>
    </div>
  )
}

export default App;
