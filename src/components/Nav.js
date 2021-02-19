import "../App.css"

export default function Nav(props) {

    return (
        <div className="row navRow">
            <div className="col-sm-8 navbar">
                <button className="header activated">
                    <img className="filter-markdown" src="markdown.svg" />
                    about.md
                </button>
                <button className="header">
                    <img className="htmlheader" src="html.svg" />
                    projects.html
                </button>
                <button className="header">
                    <img className="htmlheader" src="javascript.svg" />
                    skills.js
                </button>
                <button className="header">
                    <img className="htmlheader" src="css.svg" />
                    contact.css
                </button>
            </div>

        </div>
    )
}