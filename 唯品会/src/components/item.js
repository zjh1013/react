import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class item extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                <h3>{item.name_1_title}</h3>
                <div className='name_1_title'>
                    {
                        item && item.list_1_list.map((m,n)=>{
                            return <div key={n} className='is' onClick={this.clickDetail.bind(this,m)}>  
                                <img src={m.img_1}/>
                                <span>{m.lian}</span>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
    clickDetail(item){
        this.props.history.push({
            pathname:'/detail',
            query:item
        })
    }
}
export default withRouter(item)
