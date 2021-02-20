export default function Skills(props) {
    return <div id="skillspage">

        <p>
            <span className="purple">import</span> React <span className="purple">from</span>
            <span className="green"> "react"</span>;
        </p>
        <p>
            <span className="purple">import</span> Developer <span className="purple">from</span>
            <span className="green"> "Anthony-Ku"</span>;
        </p>
        <br />
        <p>
            <span className="purple">const</span> <span className="blue">Skills = </span>
            <span className="gold">() </span><span className="purple">{"=>"} </span>
            <span className="gold">Developer.create()</span><span className="purple"> {"=>"}</span>
            <span className="gold"> &#123;</span>
        </p>
        <p className="indent1">
            <span className="purple">return </span>
            <span className="gold">(</span>
        </p>
        <p className="indent2">
            <span className="red">{"<"}h1{">"} </span>
            CORE SKILLS
            <span className="red"> {"<"}/h1{">"}</span>
        </p>
        <p className="indent2"><span className="red">{"<"}ul{">"}</span></p>
        <ul>
            <li>Javascript | Ruby | Java | Python</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass(SCSS)</li>
            <li>Git / Repo Management</li>
            <li>Agile Methodology / SCRUM</li>
            <li>OOP</li>
        </ul>
        <p className="indent2"><span className="red">{"<"}/ul{">"}</span></p>
        <br />

        <p className="indent2">
            <span className="red">{"<"}h1{">"} </span>
            FRONT-END TECHNOLOGIES
            <span className="red"> {"<"}/h1{">"}</span>
        </p>

        <p className="indent2"><span className="red">{"<"}ul{">"}</span></p>
        <ul>
            <li>React (Hooks)</li>
            <li>Redux</li>
            <li>Bootstrap</li>
            <li>MaterialUI</li>
            <li>jQuery</li>
            <li>Vanilla JS DOM</li>
        </ul>
        <p className="indent2"><span className="red">{"<"}/ul{">"}</span></p>
        <br />

        <p className="indent2">
            <span className="red">{"<"}h1{">"} </span>
            BACK-END TECHNOLOGIES
            <span className="red"> {"<"}/h1{">"}</span>
        </p>

        <p className="indent2"><span className="red">{"<"}ul{">"}</span></p>
        <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Ruby on Rails</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>AWS S3</li>
        </ul>
        <p className="indent2"><span className="red">{"<"}/ul{">"}</span></p>
        <br />

        <p className="indent2">
            <span className="red">{"<"}h1{">"} </span>
            TESTING TECHNOLOGIES
            <span className="red"> {"<"}/h1{">"}</span>
        </p>

        <p className="indent2"><span className="red">{"<"}ul{">"}</span></p>
        <ul>
            <li>MochaJS</li>
            <li>JUnit Testing</li>
        </ul>
        <p className="indent2"><span className="red">{"<"}/ul{">"}</span></p>
        <br />
        <p className="indent2">
            <span className="gold">)</span>
        </p>
        <p className="indent1">
            <span className="gold"> {"}"}</span>
        </p>
    </div>
}