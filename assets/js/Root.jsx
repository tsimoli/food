import React from "react";
import ReactDOM from "react-dom";
import Day from './Day';

export default class App extends React.Component {
    render() {
        var spanStyle = {
            color: 'tomato',
            margin: '10px'
        };

        return (
            <div className="wrapper">
                <h1><strong>Viikonruokalista</strong></h1>
                <div className="container">
                    <hr />
                    <div className="day-card-container">
                        <div>
                            <Day name="Maanantai" />
                        </div>
                        <div>
                            <Day name="Tiistai" />
                        </div>
                        <div>
                            <Day name="Keskiviikko" />
                        </div>
                        <div>
                            <Day name="Torstai" />
                        </div>
                        <div>
                            <Day name="Perjantai" />
                        </div>
                        <div>
                            <Day name="Lauantai" />
                        </div>
                        <div>
                            <Day name="Sunnuntai" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}