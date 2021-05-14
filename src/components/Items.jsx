import React from 'react';
import Item from './Item';
import coin from '../asset/images/coins.png';
import leaf from '../asset/images/leaf.png';
import user from '../asset/images/multipleUsers.png';

 const Items = () => {
    return (
        <div>
            <div className="items">
                <Item title={"درآمد بیشتر"} icon={<img src={coin} width="70px"/>}/>
                <Item title={"مشتریان جدید"} icon={<img src={user} width="70px"/>}/>
                <Item title={ "اسراف کمتر"} icon={<img src={leaf} width="70px"/>}/>

            </div>
            
        </div>
    )
}
export default Items;