import React from 'react';
import ReactDOM from "react-dom";
import FoodImage from './FoodImage';

export default class Day extends React.Component {

    render() {
        return (
            <div className="day-card">
                <div className="card-title-row">
                    <h2>{this.props.name}</h2>
                    <button className="add-button"><i className="fas fa-plus"></i></button>
                </div>
                <FoodImage />
            </div>
        );
    }
}