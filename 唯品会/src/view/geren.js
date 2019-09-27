import React, { Component } from 'react'
import Footer from '../components/footer'

export default class wode extends Component {
    render() {
        return (
            <div id='ll'>
                <div className='shang'>
                    个人中心
                </div>
                <Footer></Footer>
            </div>
        )
    }
    componentDidMount(){
            if(window.localStorage.getItem('user','id')){
                this.props.history.push('/geren')
            }else{
                this.props.history.push('/login')
            }
    }
}
