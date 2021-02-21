import "../../App.css"

export default function Package(props) {
    return <div id="contactpage">

        <p className="indent1">
            <span className="gold">{"{"}</span>
        </p>

        <p className="indent2">
            "name": <span className="gold">"Anthony Ku (AK)"</span>,
            <br />
            "version": <span className="green">0.99</span>,
            <br />
            "age": <span className="green">26</span>,
            <br />
            "private": <span className="blue">false</span>,
            <br />
            "background": <span className="gold">"Born in Boston, Taiwanese by blood, raised in Thailand"</span>,
            <br />
            "dependencies": <span className="red">{"{"}</span>
        </p>
        <p className="indent3">
            "dogs": <span className="gold">"I love dogs and all animals. I volunteer at rescue foundations and shelters. I think compassion and empathy are very important traits in any person."</span>,
            <br />
            "knowledge_diversity": <span className="orange">"Learning is about trying new things. I try to be well-rounded in my knowledge by reading about different disciplines and fields. My go-to is The Economist!"</span>,
            <br />
            "sports": <span className="gold">"I'm primarily a badminton player, but I like any racket sports (tennis, ping-pong). I'm horrible at soccer. Don't make me play soccer."</span>,
            <br />
            "social": <span className="orange">"I'm a very social person. I like listening to people's opinions and stories - it's all about gaining perspective!"</span>
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
            "flexible": <span className="orange">"I like to keep an open mind and consider every facet before passing judgment, as I think everyone should do."</span>,
            <br />
            "growth-minded": <span className="gold">"The moment we decide to stop learning is the moment we become blind to the world around us."</span>,
            <br />
            "respectful": <span className="orange">"I was raised in a culture where respect is of utmost importance. Respecting others costs nothing."</span>
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
            <span className="gold">"100% React. I can't emphasize enough the power of React. It is by far the coolest thing I have ever seen and I don't know why anyone wouldn't use it."</span>,
            <br />
            "hobbies?":
            <br />
            <span className="orange">"Games are cool, going to the gym pre-covid is cool, cars are cooler. I enjoy cooking but you'd regret making me cook for you."</span>,
            <br />
            "favorite dog breed?":
            <br />
            <span className="gold">"I grew up with a Golden Retriever so I think they're just the sweetest and cutest dogs. But my goal in the future is to adopt research dogs and give them the best life for their sacrifice to science."</span>,
            <br />
            "favorite language?":
            <br />
            <span className="orange">"I'm most fluent with Javascript, so I'd have to say JS - it just makes sense to me. I'm currently learning python as a secondary language."</span>,
            <br />
            "ultimate goal?":
            <br />
            <span className="gold">"To live a life of fulfillment, knowing I did everything I possibly could to make life easier for those around me - and I want to start a non-profit organization to help animals when I retire."</span>

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