import * as React from "react";
import './List.css';
import {FaHeadphones, FaHeart} from "react-icons/fa";

export class Listened extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items:[]};
    }

    render() {
        return <div>
            <div className="Header">Listened</div>
            <div className="List">
                {this.state.items.map((item, index) =>
                    <div className="Item" key={index}>
                        <div>
                            <div className="Singer">
                                {item.singer}
                            </div>
                            <div className="Title">
                                {item.title}
                            </div>
                        </div>
                        <div className={item.favorite?'HeartRed':'HeartGray'}>
                            <FaHeart/>
                        </div>
                        <div className={item.listened?'HeadphoneGreen':'HeadphoneGray'}>
                            <FaHeadphones/>
                        </div>
                    </div>
                )}
            </div>
        </div>;
    }
}
