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
            <div class="searchBar">
                <div class="select">
                <select>
                    <option id="option" defaultValue>Your City</option>
                    <option id="option">Roorkee</option>
                    <option id="option">Haridwar</option>
                    <option id="option">Sharanpur</option>
                    <option id="option">Dehradun</option>
                </select>
                </div>
                <div class="searchArea">
                <input type="text" placeholder="Select products in your City"></input>
        
                </div>
                <div class="searchBtn">
                <button type="submit"> <FontAwesomeIcon className="icon2" icon={faSearch}/><span>Search</span></button>

                </div>

            </div>
        </Hoc>)
    }
}

export default SearchComponent;