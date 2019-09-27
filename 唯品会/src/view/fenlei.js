import React, { Component } from 'react'
import Footer from '../components/footer'
import axios from 'axios'
import Item from '../components/item'
import Left from '../components/left'
export default class fenlei extends Component {
    state={
        list:[],
        ind:0
    }
    render() {
        let {list,ind} = this.state;
        return (
            <div id='ll'>
                <div className='shang'>
                    <div className='zuo'>
                        {
                            list.map((item,index)=><p key={index} className={index===ind ? 'ac' : ''}
                                onClick={this.qwe.bind(this,ind,index)}
                            >{item.name_1}</p>)
                        }
                        {
                            list.map((item,index)=><Left key={index} index={index} item={item} ind={ind}></Left>)
                        }
                    </div>
                    <div className='you'>
                        {
                            list[ind] && list[ind].list_1.map((item,index)=><Item key={index} item={item}></Item>)
                        }
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
    qwe(ind,index){

        this.setState({
            ind : index
        })

        let storage=window.localStorage;
        storage['ind'] = 0;

        storage.ind = 0;  

        storage.setItem('ind', 1);
    }
    componentDidMount () {
        axios.get('/api/list').then((res)=>{
            this.setState({
                list:res.data.data
            })
        })
    }
}
