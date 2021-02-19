export default function Projects(props) {
    return <div id="projectpage">

        <h1>Projects</h1>

        <br />
        <div className="project">
            <h3>Jeffify - A Spotify Clone</h3>
            <img src="/projects/jeffify.png" />

            <h4>OVERVIEW</h4>
            <hr />
            <p><strong>Duration: 14 days</strong></p>
            <p>Jeffify is a Spotify clone I developed from scratch, showcasing Spotify's unique style and features - including
        search, playlists, queues, audio control, and user sign-in.</p>
            <p>This project features a many-to-many relational database to connect users, playlists, albums, artists, and songs. I also developed many bonus features that are similar to Spotify, for example, evolving playlist images.</p>
            <p>Fully functioning audio player - Play/pause, backward/skip, repeat and random - Developed through DOM manipulation</p>
            <p>Please check out the GitHub repo for more details about the application!</p>

            <h4>TECHNOLOGIES</h4>
            <hr />
            <p>React Hooks, Ruby on Rails, PostgreSQL, AWS S3</p>

            <a target="_blank" href="https://jeffify-spotify.herokuapp.com"><h4>Live Demo</h4></a>
            <a target="_blank" href="https://github.com/anthonyycku/jeffify_react"><h4>Github Repo</h4></a>
        </div>
        <hr />

        <div className="project">
            <h3>AutoShow</h3>
            <img src="/projects/autoshow.png" />

            <h4>OVERVIEW</h4>
            <hr />
            <p><strong>Group Project</strong></p>
            <p><strong>Duration: 5 days</strong></p>
            <p><strong>Full CRUD | REST API | Responsive</strong></p>
            <p>AutoShow aims to show users which car companies belong to other car companies - Showing the user all the children companies of a particular car brand (if they do have children). This application also
            includes a sorting/filtering feature where users can sort car brands and their car models based on the user's preferences like price, rating, or type.
            </p>
            <p>This project was built in collaboration with 2 other developers, utilizing Trello to keep track and monitor the development of the app.</p>

            <h4>TECHNOLOGIES</h4>
            <hr />
            <p>React, Ruby on Rails, PostgreSQL, Bootstrap</p>

            <a target="_blank" href="https://vroomreact.herokuapp.com"><h4>Live Demo</h4></a>
            <a target="_blank" href="https://github.com/anthonyycku/vroom_frontend"><h4>Github Repo</h4></a>
        </div>
        <hr />

        <div className="project">
            <h3>Paws R Us</h3>
            <img src="/projects/paws.png" />

            <h4>OVERVIEW</h4>
            <hr />
            <p><strong>Duration: 10 days</strong></p>
            <p><strong>Full CRUD | REST API | Responsive</strong></p>
            <p>Paws R Us is an animal adoption/social site focused on connecting prospective pet owners with their furry friends.
            Users can create new profiles, comment on, and favorite pets they're interested in.
            </p>
            <p>I built pageination from scratch using Mongoose methods, to keep the front page from cluttering with too many profiles.</p>
            <p>I implemented user session and backend username/password validation - and password hashing via BCrypt. </p>
            <p>Other features include dynamic front-end username validation, user commenting and a favorites page that keeps track of all the profiles a user favorites.</p>

            <h4>TECHNOLOGIES</h4>
            <hr />
            <p>EJS, Node.js Express, MongoDB Atlas, Cloudinary, jQuery, Bootstrap</p>

            <a target="_blank" href="https://pawsrus.herokuapp.com"><h4>Live Demo</h4></a>
            <a target="_blank" href="https://github.com/anthonyycku/pawsrus"><h4>Github Repo</h4></a>
        </div>
        <hr />

        <div className="project">
            <h3>The inQUIZitor</h3>
            <img src="/projects/inquizitor.png" />

            <h4>OVERVIEW</h4>
            <hr />
            <p><strong>Group Project</strong></p>
            <p><strong>Duration: 4 days</strong></p>
            <p><strong>Full CRUD | REST API</strong></p>

            <p>Paws R Us is an animal adoption/social site focused on connecting prospective pet owners with their furry friends.
            Users can create new profiles, comment on, and favorite pets they're interested in.
            </p>


            <h4>TECHNOLOGIES</h4>
            <hr />
            <p>React, Node.js Express, CSS animations, Bootstrap</p>

            <a target="_blank" href="https://inquizitor.herokuapp.com"><h4>Live Demo</h4></a>
            <a target="_blank" href="https://github.com/anthonyycku/inquizitor"><h4>Github Repo</h4></a>
        </div>

    </div>
}