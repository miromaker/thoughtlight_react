import React from "react";
import intervalCb from "../utils/lightcode";

import './Wordbulbs.css';


export default class Wordbulbs extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            opacity: [{
                opacity1: 100,
                opacity2: 100
            }]
        }; //hold style variables influenced by twitter api as a state? 
    }



    // const style1 = {
    // }; // create style variable that holds the opacity criteria for each bulb, which pulls twitter api variable 

    // const style2 = {
    // }; // create style variable that holds the opacity criteria for each bulb, which pulls twitter api variable 



    


    render() {

    console.log(intervalCb.word1Ratio)
    console.log(intervalCb.word2Ratio)
    
    return (
        <div className="lightbox">
            <h3>More people are currently talking about:</h3>
            <div id = "light1">
                <div class = "lightext">
                    <p>Word 1</p>
                </div>
            </div>
            <div id = "light2">
                <div class = "lightext">
                    <p>Word 2</p>
                </div>
            </div>
            <div id = "secondheader">
            <h2>Glimpse into the global mind.</h2>
            <p>WE LIVE IN AN AGE OF EXPONENTIAL INFORMATION CREATION AND CONNECTIVITY ONLINE, ALLOWING US TO SEE THINKING AT GLOBAL SCALE. THE BRIGHTER THE TERM, THE MORE PEOPLE ON TWITTER ARE USING IT AT THIS VERY MOMENT.</p>
            </div>
        </div>
    )
    }
};

