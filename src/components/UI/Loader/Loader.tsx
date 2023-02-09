import React from 'react';
import cl from './loader.module.scss';

const Loader = () => {
    return (
        <div className={cl.loader}>
            <svg xmlns="http://www.w3.org/2000/svg" width="400px" height="400px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="rotate(0 50 50)">
                    <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.7254464285714285s" repeatCount="indefinite"></animate>
                    </rect>
                </g><g transform="rotate(25.714285714285715 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.6696428571428571s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(51.42857142857143 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.6138392857142857s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(77.14285714285714 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.5580357142857142s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(102.85714285714286 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.5022321428571428s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(128.57142857142858 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.4464285714285714s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(154.28571428571428 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.39062499999999994s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(180 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.33482142857142855s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(205.71428571428572 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.2790178571428571s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(231.42857142857142 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.2232142857142857s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(257.14285714285717 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.16741071428571427s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(282.85714285714283 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.11160714285714285s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(308.57142857142856 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="-0.055803571428571425s" repeatCount="indefinite"></animate>
                </rect>
            </g><g transform="rotate(334.2857142857143 50 50)">
                <rect x="48.5" y="25.5" rx="0" ry="0" width="3" height="11" fill="currentColor">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.78125s" begin="0s" repeatCount="indefinite"></animate>
                </rect>
            </g>
            </svg>
        </div>
    );
};

export default Loader;