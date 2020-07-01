import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Hoc from '../../../Hoc/hoc'
import './detailComponent.css'
const DetailComponent=(props)=>{
    return(
        <Hoc class="details">
            <div class="form">
                <h3>My Profile</h3>
                <form class="reviewForm">
                    <div>
                    <label>First Name</label>
                    <input placeholder="Enter Your Name" type="text"></input>
                    </div>
                 <div>
                 <label>Last Name</label>
                    <input type="text"></input>
                 </div>
                   <div>
                   <label>Phone</label>
                    <input placeholder="Give your review a title " type="text"></input>
                   </div>
                   <div>
                   <label>Email Address</label>
                    <input placeholder="Give your review a title " type="text"></input>
                   </div><div>
                   <label>Country</label>
                    <input placeholder="Give your review a title " type="text"></input>
                   </div><div>
                   <label>City</label>
                    <input placeholder="Give your review a title " type="text"></input>
                   </div><div>
                   <label>Zip Code</label>
                    <input placeholder="Give your review a title " type="text"></input>
                   </div><div>
                   <label>State</label>
                    <input placeholder="Give your review a title " type="text"></input>
                   </div><div class="textarea">
                   <label>Address</label>
                    <textarea placeholder="Give your review a title " rows={5} type="text"></textarea>
                   </div>
                   <div id="btn">
                   <button type="submit">Cancel</button>
                    <button type="submit">Save Changes</button>
                   </div>
                    

                  
                </form>
            </div>
        </Hoc>
    );
}
export default DetailComponent
