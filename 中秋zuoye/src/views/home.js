import React, { Component } from 'react'
import Hea from '../components/header'
import Swiper from 'swiper/dist/js/swiper'
import 'swiper/dist/css/swiper.css'
export default class home extends Component {
    state={
        list : [
        {
            "img": "https://www.erv-nsa.gov.tw/image/11122/1024x768",
        }, {
            "img": "https://p.pstatp.com/weili/bl/145395766967926843.jpg",
        }, {
            "img": "https://www.erv-nsa.gov.tw/image/10670/1024x768",
        }
    ]
    }
    
    render() {
        let { list } = this.state
        return (
            <div>
                <Hea></Hea>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                            {
                                list && list.map((item, index) => <div className="swiper-slide" key={index}>
                                    <img src={item.img}/> 
                                </div>)
                            }
                    </div>
                </div>

            </div>
        )
    }
    componentDidMount(){
        new Swiper('.swiper-container',{
            autoplay:true,
            loop:true
        })
    }
    
}
