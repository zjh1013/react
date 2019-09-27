import React, { Component } from 'react'
import axios from 'axios'
import '../../mock/index'
export default class Home extends Component {
    state = {
        list:[]
    }
    render() {
        let {list} = this.state;
        return (
            <div>
                {
                    list && list.map((item,index) => <dl key={index}>
                        <dt>
                            <img src={item.img}/>
                        </dt>
                        <dd>
                            <h3>{item.title}</h3>
                            <h3>{item.price}</h3>
                        </dd>
                    </dl>)
                }
            </div>
        )
    }
    componentDidMount(){
        axios.get('/api/list').then((res)=>{
            // console.log(res);
            this.setState({list:res.data.list})
        });
    }
}
