import React, { Component } from 'react'
import { NavLink,withRouter } from 'react-router-dom'
class Head extends Component {
    state = {
        list: [
            {
                name: '首页',
                link: '/index/home'
            },
            {
                name: '找车',
                link: '/index/find'
            },
            {
                name: '论坛',
                link: '/index/frunt'
            },
            {
                name: '二手车',
                link: '/index/home'
            },
            {
                name: '服务',
                link: '/index/home'
            }
        ],
        flag:false,
        sticky:false
    }
    render() {
        let { list,flag,sticky } = this.state;
        return (
            <>
                <div className="title">
                    <span>汽车之家</span>
                    <div onClick={this.handleSearch.bind(this)}>搜索</div>
                    <div onClick={this.handleMy.bind(this)}>我的</div>
                </div>

                <div className={`titlelist ${sticky ? 'titleliststicky' :''}`}>
                    <ul>
                        {
                            list && list.map((item, index) => <li key={index}>
                                <NavLink to={item.link}>{item.name}</NavLink>
                            </li>)
                        }
                    </ul>
                    <img src={require('../img/timg.jpg')}
                    className={flag ? 'imgrotate' :''}
                     onClick={()=>{
                        console.log(1111);
                        this.setState({flag:!flag})
                    }}/>
                </div>

                <div className={`mark ${!flag ? 'none' :''}`} onClick={()=>{
                    this.setState({flag:false})
                }}></div>
                <div className={`nav ${!flag ? 'none' :''}`}>
                    <p>金融</p>
                </div>
            </>
        )
    }

    componentDidMount(){
        document.addEventListener('scroll',this.handleScroll);
    }

    handleScroll = ()=>{
        console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 44){
            this.setState({sticky:true})
        } else {
            this.setState({sticky:false})
        }
    }
    handleSearch(){ //跳转搜索
        console.log(this.props);
        this.props.history.push('/search')
    }
    handleMy(){
        this.props.history.push('/my')

    }
}


export default  withRouter(Head)