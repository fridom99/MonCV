import React, { Component } from 'react'
import { portfolioData } from '../../data/portfolioData'
import Project from './Project';

export default class ProjectList extends Component {
    state = {
        projects:portfolioData,
        radios: [
            {id: 1, value: "javascript"},
            {id: 2, value: "css"},
            {id: 3, value: "react"},
            {id: 4, value: "php"}
        ],
        selectedRadio: 'javascript'
    }
    // QUEL ELEMENT EST CHECKED
    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    }
    
    
    
    render() {
        let {projects, radios, selectedRadio} = this.state;
 
        console.log(radios[0].value);
        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    
                {radios.map(lang => (<li id={lang.value}>
                                    <input
                                        type="radio" 
                                        name="radio" 
                                        checked={lang.value === selectedRadio} 
                                        value={lang.value} 
                                        id={lang.value} 
                                        onChange={this.handleRadio} 
                                    />
                                    <label htmlFor={lang.value}>{lang.value}</label>
                                </li>  ))}

                </ul>
                <div className="projects">
        {/* FILTRER LES PROGET ET PARCOURIR LE TABLEAU */}
                    {projects.filter(item => item.languages.includes(selectedRadio)).map((keyName, i) => (

                        <Project 
                        key={projects[i].id}
                        item={projects[i]}
                        />


                    ))}

                    


                    
                </div>

            </div>
        )
    }
}








