import React, { Component } from 'react';
import './css/pure-min.css';
import './css/marketing.css';
import './css/marketing-myConfig.css';

class Home extends Component {

    constructor() {
        super();

    }

    render(){
        return (
            <>
                <div className="header">
                    <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                        <a className="pure-menu-heading" href="https://github.com/afiliart/desafio-front-end" target="_blank">
                            Desafio Front-End
                        </a>
                    </div>
                </div>



                <div className="footer l-box is-center">
                    Conteúdo meramente ilustrativo.
                </div>


            </>
        );
    }

}

export default Home;

























