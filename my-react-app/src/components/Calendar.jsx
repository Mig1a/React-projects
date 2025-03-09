import React from "react";
import Event from "./Event";
const Calendar =() => {
    return (
        <table>
            <tbody>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
                <tr>
                    <td className="time">8 am</td>
                    <Event event='Starbucks ☕️' color ='green' location='646 Michigan Ave'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Yolk 🍳' color ='green' location='355 E Ohio st'/>
                    <td></td>
                </tr>

                <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' color ='pink' location='Grand station'/>
                    <td></td>
                    <td></td>
                    <Event event='The Bean 🫘' color ='blue' location='Millennium park'/>
                </tr>

                <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <Event event='River cruise' color ='blue' location='Chicago River'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Deep Dish' color ='green' location='Giodanos'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">12 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway' color ='pink' location='Washington Station'/>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">1 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='Art Institute' color ='blue' location='111 S Michigan Ave'/>
                    <td></td>
                    <td></td>
                    <Event event='Girl and the Goat' color ='green' location='809 W Randolph St'/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">3 pm</td>
                    <Event event='Cubs game' color ='blue' location='Wrigley Field'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway' color ='pink' location='Roosevelt Station'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td></td>
                    <Event event='Fancy Dinner' color ='green' location='Maple and ash'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="time">5 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Shopping' color ='blue' location='Magnificent Mile'/>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    
    )
}
export default Calendar;