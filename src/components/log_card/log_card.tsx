import React from 'react';
import Chart from 'react-apexcharts';
import {ApexOptions} from "apexcharts";
import './log_card.css';

const chartOpts: ApexOptions = {
    chart: {
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#3c44b1'],
    stroke: {
        colors: ['#4191ff'],
        curve: 'smooth',
        width: 4
    },
    xaxis: {
        crosshairs: {
            width: 1
        }
    },
    yaxis: {
        min: 0,
        labels: {
            show: false
        }
    },
    legend: {
        show: false
    }
};

const chartData = [
    {
        name: 'Customers',
        data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
];

const chartOpts2: ApexOptions = {
    chart: {
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#f4772e'],
    stroke: {
        colors: ['#f4772e'],
        curve: 'smooth',
        width: 3
    },
    xaxis: {
        crosshairs: {
            width: 1
        }
    },
    yaxis: {
        min: 0,
        labels: {
            show: false
        }
    },
    legend: {
        show: false
    }
};

const chartData2 = [
    {
        name: 'Sales',
        data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
];

function UserStats() {
    return (
        <div className="col-4">
            <div className="log-container">
                <div className="white-circle">
                    <img src={process.env.PUBLIC_URL + '/assets/user.png'} alt="User"/>
                </div>
                <b className="font-size-lg">2,345</b>
                <span className="text-black-50 d-block">users</span>
            </div>
        </div>
    );
}

function ClicksStats() {
    return (
        <div className="col-4">
            <div className="log-container">
                <div className="white-circle">
                    <img src={process.env.PUBLIC_URL + '/assets/keyboard.png'} alt="Clicks"/>
                </div>
                <b className="font-size-lg">3,568</b>
                <span className="text-black-50 d-block">clicks</span>
            </div>
        </div>
    );
}

function RevenueStats() {
    return (
        <div className="col-4">
            <div className="log-container">
                <div className="white-circle">
                    <img src={process.env.PUBLIC_URL + '/assets/graph.png'} alt="Revenue"/>
                </div>
                <b className="font-size-lg">9,693</b>
                <span className="text-black-50 d-block">revenue</span>
            </div>
        </div>
    );
}

export default function LogsCard() {
    return (
        <div className="row gap">
            <div className="logs-card-box">
                <div className="card-body">
                    <div className="row mt-4">
                        <UserStats/>
                        <ClicksStats/>
                        <RevenueStats/>
                    </div>
                    <div className="divider mt-4"/>
                    <div className="text-center py-4">
                        <button className="btn btn-sm btn-primary">
                            <span className="btn-wrapper--label">Generate reports</span>
                        </button>
                    </div>
                </div>
                <div className="card-footer bg-light text-center">
                    <div className="pt-4 pr-4 pl-4">
                        <Chart
                            options={chartOpts}
                            series={chartData}
                            type={'line'}
                            height={100}
                        />
                    </div>
                </div>
            </div>
            <div className="logs-card-box">
                <div className="card-body">
                    <div className="row mt-4">
                        <UserStats/>
                        <ClicksStats/>
                        <RevenueStats/>
                    </div>
                    <div className="pt-4 pr-4 pl-4">
                        <Chart
                            options={chartOpts2}
                            series={chartData2}
                            type="line"
                            height={100}
                        />
                    </div>
                </div>
                <div className="my-2 text-center">
                    <span className="text-danger px-1">15.4%</span>
                    <span className="text-black-50">new sales today</span>
                </div>
                <div className="card-footer bg-light p-4 text-center">
                    <button className="btn btn-primary btn-contained">
                        <span className="btn-wrapper--label">View latest sales</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
