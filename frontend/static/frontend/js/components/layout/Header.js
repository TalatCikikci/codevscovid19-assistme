import React, { Component } from 'react';

export default class ProviderHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-xl">
            <a className="navbar-brand" href="/">
                <img className="img-fluid img-responsive" src={"/static/frontend/img/hand-icon-75x75.png"} alt=""/>
                AssistMe
                </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL"
                    aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample07XL">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    )
  }
}