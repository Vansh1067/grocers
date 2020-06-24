import React ,{Component} from 'react'

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
            <p>Search</p>
        </Hoc>)
    }
}

export default SearchComponent;