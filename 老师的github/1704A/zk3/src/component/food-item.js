import React, { Component } from 'react'
 class FoodItem extends Component {
     state = {
         arr:['常吃','不吃','偶尔','']
     }
    render() {
        let {item,handleClick,handleType} = this.props;
        let {arr} = this.state;
        console.log(item);
        return (
            <div className="foods">
                <dl>
                    <dt>
                        <img src={item.img}/>
                    </dt>
                    <dd>
                        <div>
                            <h3>{item.name}</h3>
                            <span>{item.weight}/千克</span>
                        </div>
                        <div onClick={()=>{handleClick(item.id)}}>
                            <span>星星</span>
                            <span>{arr[item.flag]}</span>
                        </div>
                    </dd>
                </dl>
                {
                    item.check ?  <ul>
                    {
                        arr.map((item1,index)=> <li
                        onClick={()=>{handleType(index,item.id)}}
                        key={index}>{item1}</li>)
                    }
                </ul> : null
                }
            </div>
        )
    }
}
export default FoodItem;