import { useEffect, useState } from "react";
import Conference from "../Conference/Conference";

const FeaturedConferences = () => {

    const [conferences, setConferences] = useState([]);

    useEffect(() => {
        fetch('conference.json')
        .then(res => res.json())
        .then(data => setConferences(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl">Featured Conferences: {conferences.length}</h2>
                <p>BASIS SoftExpo is the largest private-sector exposition aimed at showcasing IT and ITES products and services in Bangladesh.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    conferences.map(conference => <Conference key={conference.id} conference={conference}></Conference>)
                }
            </div>
        </div>

        
    );
};

export default FeaturedConferences;