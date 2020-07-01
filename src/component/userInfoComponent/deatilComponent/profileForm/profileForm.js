import React from 'react';

import Hoc from '../../../../Hoc/hoc'
const ProfileForm=(props)=>{
    return(
        <Hoc>
            <div class="form">
                <h3>My Profile</h3>
                <form class="reviewForm">
                    <div>
                    <label>First Name</label>
                    <input placeholder="Vansh" type="text"></input>
                    </div>
                 <div>
                 <label>Last Name</label>
                    <input type="text" placeholder="Tandon"></input>
                 </div>
                   <div>
                   <label>Phone</label>
                    <input placeholder="9760030288" type="text"></input>
                   </div>
                   <div>
                   <label>Email Address</label>
                    <input placeholder="example@exapmle.com" type="text"></input>
                   </div><div>
                   <label>Country</label>
                    <input placeholder="India" type="text"></input>
                   </div><div>
                   <label>City</label>
                    <input placeholder="Roorkee" type="text"></input>
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
export default ProfileForm
