import React from 'react';
import Bestitem from './Bestitem';
import supermarket from '../asset/images/kharobar.png';
import hotel from '../asset/images/hotel.png';
import resturant from '../asset/images/restaurant.png';
import bread from '../asset/images/bread.png';


 const Best = ({titrLable}) => {
    return (
        <div className="bestBody">
            <p className="titr" >{titrLable}</p>
            <div className="best">
                <Bestitem title={"سوپرمارکت"} icon={<img src={supermarket} width="70px" alt="supermarket"/> } />
                <Bestitem title={"هتل "} icon={<img src={hotel} width="70px" alt="hotel"/>}/>
                <Bestitem title={ "رستوران و کافه "} icon={<img src={resturant} width="70px" alt="resturant"/>} className="activ"/>
                <Bestitem title={ "نانوایی و قنادی "} icon={<img src={bread} width="70px" alt="bread"/>}/>

            </div>
            
        </div>
    )
}
export default Best;