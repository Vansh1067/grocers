import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faThLarge, faLeaf} from '@fortawesome/free-solid-svg-icons'

import './filterComponent.css'
import Hoc from '../../../Hoc/hoc'

class FilterComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            List:false
        }
        this.element=''
    }
    styleHandler(){
        this.setState({...this.state,List:!this.state.List})
        this.props.onChange()
    
    } 

           
       
   
  
    render(){
        const GridClass=!this.state.List?'show':'';
        const ListClass=this.state.List?'show':'';
    

        return(
            <Hoc class="FilterBox">
                {this.element}
                <div class="displayOpt">
            
                <FontAwesomeIcon className={ListClass} onClick={()=>{this.styleHandler()}} icon={faBars}/>
                <FontAwesomeIcon  className={GridClass} onClick={()=>{this.styleHandler()}} icon={faThLarge}/>
    
                </div>
                <div class="options">
    
                    <p >Sort By</p>
                    <select>
                        <option id="option" defaultValue >Default</option>
                        <option id="option">Name</option>
                        <option id="option">L-t-H Price</option>
                        <option id="option">Rating</option>
                        <option id="option">H-t-L Price</option>
                    </select>
            
                </div>
            </Hoc>
        );
    }
   
}
export default FilterComponent