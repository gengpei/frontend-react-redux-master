import * as React from "react";
import './List.css';
import {Item} from "../Item";
import { FaHeart, FaHeadphones } from 'react-icons/fa';
import { addFavorite, delFavorite, addListened, delListened } from '../actions';

export class PlayList extends React.Component {
    items = [
        new Item('Oasis', 'Half The World Away', true, false),
        new Item('Pink Floyd', 'Wish You Were Here', false, false),
        new Item('Blink-182', 'All The Small Thing', false, true),
        new Item('Third Eye Blind', 'Got Me Out Of Here', false, true),
        new Item('The Chainsmokers', 'Closer', true, true),
        new Item('Sia', 'Cheap Thrills', true, true),
        new Item('Birdy', 'Wild Horse', true, true),
        new Item('Stereophonics', 'Local Boy In The Photograph ', true, true),
    ];
    constructor(props) {
        super(props);
        this.state = {items: this.items};
    }

    render() {
        return <div>
            <div className="Header">Playlist</div>
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
                        <div className={item.favorite?'HeartRed':'HeartGray'} onClick={()=>{
                            item.favorite = !item.favorite;
                            this.setState(this.state.items);
                            console.log(item);
                        }}>
                        <FaHeart/>
                        </div>
                        <div className={item.listened?'HeadphoneGreen':'HeadphoneGray'} onClick={()=>{
                            item.listened=!item.listened;
                            this.setState(this.state.items);
                            console.log(item);
                        }}>
                        <FaHeadphones/>
                        </div>
                    </div>
                )}
            </div>
        </div>;
    }
}

