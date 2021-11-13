import ProgressBar from './ProgressBar';
import React, { Component } from 'react'


class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.8},
            {id: 2, value: "Css", xp:2},
            {id: 3, value: "Php", xp:0.7},
            {id: 4, value: "Sass", xp:0.4}
        ],
        frameworks: [
            {id: 1, value: "React", xp:1.8},
            {id: 2, value: "Bootstrap", xp:2},
            {id: 3, value: "Tailwind", xp:0.7},
            {id: 4, value: "Axios", xp:0.4}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className= "languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar 
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Framework & bibliothèques"
                />
            </div>
        )
    }
}

export default Languages;
