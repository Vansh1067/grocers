import React from 'react';

import Hoc from '../../../../Hoc/hoc'
const AddressForm=(props)=>{
    return(
        <Hoc>
            <div class="form">
                <h3>Contact Address</h3>
                <form class="reviewForm">
                   
                   <div>
                   <label>Country</label>
                    <input placeholder="India" type="text"></input>
                   </div><div>
                   <label>City</label>
                   <select>
                        <option selected={true} disabled={true}>State</option>
                        <option>Roorkee</option>
                        <option>SharanPur</option>
                        <option>Dehradun</option>
                        <option>Haridwar</option>
                        <option>Rishikesh</option>

                        </select>
                   </div><div>
                   <label>Zip Code</label>
                    <input placeholder="247667" type="text"></input>
                   </div><div>
                   <label>State</label>
                    <select>
                        <option selected={true} disabled={true}>State</option>
                        <option>Uttrakhand</option>
                        <option>Uttrapradesh</option>
                        <option>Himachal</option>
                        <option>Delhi</option>
                        <option>Harayana</option>

                        </select>
                   </div>
                   <div class="textarea">
                   <label>Address 1.</label>
                    <textarea placeholder="Address" rows={5} type="text"></textarea>
                   </div>
                   <div class="textarea">
                   <label>Address 2.</label>
                    <textarea placeholder="Address" rows={5} type="text"></textarea>
                   </div>
                   <div id="checkbox">
                    <input type="checkbox" />
                    <p> Same as contact address</p> 
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
export default AddressForm
