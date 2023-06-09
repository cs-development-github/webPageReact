import React, {FC} from 'react';
import {CardModel} from "../../models/card.model";
import './card.css';

const Card: FC<CardModel> = ({
                                 title,
                                 value,
                                 trend,
                                 image,
                                 trendColor,
                                 trendText,
                                 backgroundColors,
                             }) => {

    const cardStyle = {
        background: `linear-gradient(135deg, ${backgroundColors[0]} 0%, ${backgroundColors[1]} 100%)`,
    };

    return (
        <div className="card-box pb-4" style={cardStyle}>
            <div className="card-content p-3">
                <div className="align-box-row align-items-start">
                    <div className="font-weight-bold align-box-column">
                        <small className="text-white-50 d-block mb-1 text-uppercase">
                            {title}
                        </small>
                        <span className="font-size-xxl mt-1 text-white">{value}</span>
                    </div>
                    <div className="ml-auto">
                        <div className="white-circle">
                            <img src={process.env.PUBLIC_URL + '/assets/' + image + '.png'} alt="user"/>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <span className={`text-${trendColor} px-1`}>{trend}</span>
                    <span className="text-white-50">{trendText}</span>
                </div>
            </div>
        </div>
    );
};

export default function CardsContainer() {
    return (
        <div className="container">
            <div className="align-box-row gap align-items-start">
                <Card
                    title="New Accounts"
                    value="586,356"
                    trend="15.4%"
                    image="graph2"
                    trendColor="success"
                    trendText="increase this month"
                    backgroundColors={['#424242', '#010101']}
                />
                <Card
                    title="Sales"
                    value="23,274"
                    trend="5.9%"
                    image="bulb"
                    trendColor="warning"
                    trendText="same as before"
                    backgroundColors={['#474676', '#315476']}
                />
                <Card
                    title="Orders"
                    value="345"
                    trend="5.9%"
                    image="graph3"
                    trendColor="danger"
                    trendText="lower order numbers"
                    backgroundColors={['#6876df', '#7452aa']}
                />
            </div>
        </div>
    );
}
