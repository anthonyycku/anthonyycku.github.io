import "../../App.css"

export default function Contact(props) {
    return <div id="contactpage">
        <p className="indent1">

            <span className="grey">
                /* <br />
                Best way to contact me is through email!
                <br /> */
            </span>
        </p>
        <p className="indent1">.
        <span className="blue">contact </span>
            <span className="gold">{"{"}</span>
        </p>

        <p className="indent2">
            email: <span className="gold">anthony.yc.ku@gmail.com</span>;
            <br />
            github: <span className="gold">github.com/anthonyycku</span>;
            <br />
            linkedin: <span className="gold">linkedin.com/in/anthonyycku</span>;
        </p>

        <p className="indent1">
            <span className="gold">{"}"}</span>
        </p>
    </div>
}