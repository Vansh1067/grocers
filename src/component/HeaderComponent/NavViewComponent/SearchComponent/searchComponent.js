import React ,{Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

import './searchComponent.css'
import Hoc from '../../../../Hoc/hoc'
class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(<Hoc className="search">
            <div className="searchBar">
                <div className="select">
                <select>
                    <option id="option" defaultValue>Your City</option>
                    <option id="option">Roorkee</option>
                    <option id="option">Haridwar</option>
                    <option id="option">Sharanpur</option>
                    <option id="option">Dehradun</option>
                </select>
                </div>
                <div className="searchArea">
                <input type="text" placeholder="Search products "></input>
        
                </div>
                <div className="searchBtn">
                <button type="submit"> <FontAwesomeIcon className="icon2" icon={faSearch}/></button>

                </div>

            </div>
        </Hoc>)
    }
}

export default SearchComponent;