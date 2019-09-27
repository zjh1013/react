import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class item extends Component {
    
    render() {
        let {item} = this.props;
        return (
            <div>
                <div className='lists' onClick={this.clickToDetail.bind(this,item)}>
                    <img src={item.img} />
                    <p>{item.title}</p>
                </div>
            </div>
        )
    }
    clickToDetail(item){
        this.props.history.push({
            pathname:'/detail',
            query:item
        })
    }
}
export default withRouter (item)
