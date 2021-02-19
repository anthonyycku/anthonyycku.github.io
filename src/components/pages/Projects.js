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
            <p>This project is constructed through a many-to-many relational database to connect users, playlists, albums, artists, and songs. I also developed many bonus features that are similar to Spotify, for example, evolving playlist images.</p>
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
            <p>Other features include dynamic front-end username validation, user commenting and a favorites page that keeps track of all the profiles a user favorites. I integrated the application with Cloudinary active storage for users to upload their own images.</p>

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

            <p>The InQUIZitor is a dynamic, multiple choice quiz game to challenge your mind! I built this project with another developer over a weekend as my first React project.</p>
            <p>The game utilizes React to dynamically render a game-like atmosphere, utilizing CSS animations and set intervals to create a timer that the player has to beat before it hits 0!</p>
            <p>Both question and answers are randomized to make the game more interesting and fun.</p>

            <p>You can add new questions and edit existing questions.</p>


            <h4>TECHNOLOGIES</h4>
            <hr />
            <p>React, Node.js Express, CSS animations, Bootstrap</p>

            <a target="_blank" href="https://inquizitor.herokuapp.com"><h4>Live Demo</h4></a>
            <a target="_blank" href="https://github.com/anthonyycku/inquizitor"><h4>Github Repo</h4></a>
        </div>
        <hr />

        <div className="project">
            <h3>Recipe Buddy</h3>
            <img src="/projects/recipebuddy.png" />

            <h4>OVERVIEW</h4>
            <hr />
            <p><strong>Duration: 5 days</strong></p>
            <p><strong>Responsive | API Integrated</strong></p>

            <p>This is where it all began! My first project ever made using sticks and stones. Recipe Buddy is a cook-book helper that allows users to search for recipes, and displays all ingredients and nutritional facts about the meal - with a link to the instructional page!</p>
            <p>API used: <a href="https://developer.edamam.com/">Edamam</a></p>

            <h4>TECHNOLOGIES</h4>
            <hr />
            <p>HTML, CSS, jQuery, Edamam API</p>

            <a target="_blank" href="https://anthonyycku.github.io/recipe-buddy-app/index.html"><h4>Live Demo</h4></a>
            <a target="_blank" href="https://github.com/anthonyycku/recipe-buddy-app"><h4>Github Repo</h4></a>
        </div>
        <hr />

    </div>
}