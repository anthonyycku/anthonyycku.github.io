import "../../App.css"

export default function Package(props) {
    return <div id="contactpage">

        <p className="indent1">
            <span className="gold">{"{"}</span>
        </p>

        <p className="indent2">
            "name": <span className="gold">"Anthony Ku"</span>,
            <br />
            "version": <span className="green">0.99</span>,
            <br />
            "private": <span className="blue">false</span>,
            <br />
            "background": <span className="gold">"Born in Boston, Taiwanese by blood, raised in Thailand"</span>,
            <br />
            "dependencies": <span className="red">{"{"}</span>
        </p>
        <p className="indent3">
            "knowledge_diversity": <span className="orange">"Learning is about trying new things. I try to be well-rounded in my knowledge by reading about different disciplines and fields. My go-to is The Economist!"</span>,
            <br />
            "goals": <span className="gold">"Always have a purpose in mind when doing anything."</span>,
            <br />
            "social": <span className="orange">"I'm a self-proclaimed extrovert. Listening to people's opinions and perspectives is fun, prove me otherwise."</span>
        </p>
        <p className="indent2">
            <span className="red">{"}"}</span>
        </p>
        {/*  */}
        <p className="indent2">
            "scripts": <span className="red">{"{"}</span>
        </p>
        <p className="indent3">
            "responsible": <span className="gold">"I believe that, as employees, we have the inherent responsibility to keep ourselves and each other honest and accountable for our actions when representing a company."</span>,
            <br />
            "flexible": <span className="orange">"I'm not stubborn at all. I just go along with anything."</span>,
            <br />
            "growth-minded": <span className="gold">"The moment we decide to stop learning is the moment we become blind to the world around us."</span>,
            <br />
            "respectful": <span className="orange">"I was raised in a culture where respect is of utmost importance. Respecting others costs nothing."</span>,
            <br />
            "time-conscious": <span className="gold">"Always early or on time. I'm weirdly conscious about time - in a good way!"</span>,
            <br />
            "easy-going": <span className="orange">"Oh yeah I'm super chill. Talk to me about anything."</span>
        </p>
        <p className="indent2">
            <span className="red">{"}"}</span>
        </p>
        {/*  */}

        <p className="indent2">
            "FAQ": <span className="red">{"{"}</span>
        </p>
        <p className="indent3">
            "favorite dev technology?":
            <br />
            <span className="gold">"100% React. I can't emphasize it enough. It is by far the coolest thing I have ever seen and I don't know why anyone wouldn't use it."</span>,
            <br />
            "hobbies?":
            <br />
            <span className="orange">"Games are cool, going to the gym pre-covid is cool, cars are cool. I've recently been really into cooking."</span>,
            <br />
            "favorite dog breed?":
            <br />
            <span className="gold">"I grew up with a Golden Retriever so I think they're just the sweetest and cutest dogs. But my goal in the future is to adopt research dogs and give them the best life for their sacrifice to science."</span>,
            <br />
            "favorite language?":
            <br />
            <span className="orange">"I'm most fluent with Javascript, so I'd have to say JS - it just makes sense to me. Python is also cool for its colloquial syntax and organizational structure."</span>,
            <br />
        </p>
        <p className="indent2">
            <span className="red">{"}"}</span>
        </p>
        {/*  */}

        <p className="indent1">
            <span className="gold">{"}"}</span>
        </p>
    </div>
}