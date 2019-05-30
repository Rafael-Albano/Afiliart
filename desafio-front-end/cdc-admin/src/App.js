import React, { Component } from 'react';
import './css/pure-min.css';
import './css/marketing.css';
import './css/marketing-myConfig.css';
import {LoginBox} from './Login';
import {Home} from './Home'
//import $ from 'jquery';

class App extends Component {
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

                        <LoginBox/>

                    </div>
                </div>

                <div className = "splash-container">
                    <div className = "splash" >
                            <h1 className = "splash-head" > Afiliart - Cursos </h1>
                        <p className="splash-subhead">
                            Os Melhores cursos Tecnológicos para o seu desenvolvimento pessoal e profissional.
                        </p>
                    </div>
                 </div>

                <div className="footer l-box is-center">
                    Conteúdo meramente ilustrativo.
                </div>


            </>
        );
    }

}

export default App;

























