import React from "react";
import "../style/SizeChart.css";

// This is the section of the "size cahrt"

function SizeChart() {

    return (
        <div className = "size">
            <p className="text" >Sizes</p>
            <div className="size-row">
                <div classname="row4">
                    <button>
                        <span className="size-button">2.5</span>
                    </button>
                    <button>
                        <span className="size-button">3</span>
                    </button>
                    <button>
                        <span className="size-button">3.5</span>
                    </button>
                    <button>
                        <span className="size-button">4</span>
                    </button>
                    <button>
                        <span className="size-button">4.5</span>
                    </button>
                </div>
                <div classname="row1">
                    <button>
                        <span className="size-button">5</span>
                    </button>
                    <button>
                        <span className="size-button">5.5</span>
                    </button>
                    <button>
                        <span className="size-button">6</span>
                    </button>
                    <button>
                        <span className="size-button">6.5</span>
                    </button>
                    <button>
                        <span className="size-button">7</span>
                    </button>
                </div>
                <div className="row2">
                    <button>
                        <span className="size-button">7.5</span>
                    </button>
                    <button>
                        <span className="size-button">8</span>
                    </button>
                    <button>
                        <span className="size-button">8.5</span>
                    </button>
                    <button>
                        <span className="size-button">9</span>
                    </button>
                    <button>
                        <span className="size-button">9.5</span>
                    </button>
                <div className="row3">
                    <button>
                        <span className="size-button">10</span>
                    </button>
                    <button>
                        <span className="size-button">10.5</span>
                    </button>                        <button>
                        <span className="size-button">11</span>
                    </button>
                    <button>
                        <span className="size-button">11.5</span>
                    </button>
                    <button>
                        <span className="size-button">12</span>                        
                    </button>
                    </div>
                </div>
                <a href = "https://image.shutterstock.com/image-vector/set-shoes-chart-size-socks-260nw-1632069205.jpg">Size guide </a>
            </div>
            
        </div>

    );
}

export default SizeChart; 