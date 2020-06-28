import React ,{Component} from 'react'

import './sliderComponent.css'
import Hoc from '../../Hoc/hoc';

class SliderComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render(){
        return(<Hoc>
            
                <div class="img-cont">
                <img src={this.props.img}></img>

                
            </div>
        </Hoc>)
    }
}

export default SliderComponent;