import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Interêts</h3>
            <ul>
               <li className="hobby">
                   <i className="fas fa-running"></i>
                   <span>Course à pied</span>
                </li>
                <li className="hobby">
                   <i className="fas fa-hiking"></i>
                   <span>Randonnées</span>
                </li>
                <li className="hobby">
                   <i className="fas fa-seedling"></i>
                   <span>PErmaculture</span>
                </li>
                <li className="hobby">
                   <i className="fas fa-bitcoin"></i>
                   <span>Crypto-monaies</span>
                </li>
                <li className="hobby">
                   <i className="fas fa-rocket"></i>
                   <span>Espace</span>
                </li>
            </ul>
        </div>
    )
}

export default Hobbies
