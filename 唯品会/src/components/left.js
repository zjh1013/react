import React, { Component } from 'react'


export default class left extends Component {
    render() {
        let {index,item,ind} = this.props
        return (
            <div className='zuo'>
                    {/* <p className={index===ind ? 'ac' : ''}
                      onClick={this.qwe.bind(this,ind,index)}
                    >{item.name_1}</p> */}
            </div>
        )
    }
    qwe(ind,index){
        console.log(index)
        this.setState({
            ind : index
        })

        let storage=window.localStorage;
        storage['ind'] = 0;

        storage.ind = 0;  

        storage.setItem('ind', 1);
    }
}
