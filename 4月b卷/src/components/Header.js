import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    state = {
        navList: [
            {
                name: "首页",
                path: "/index/home",
            }, {
                name: "找车",
                path: "/index/zhaoche"
            }, {
                name: "论坛",
                path: "/index/luntan"
            }, {
                name: "二手车",
                path: "/index/ershou"
            }, {
                name: "服务",
                path: "/index/fuwu"
            }
        ],
        flag: false,
    }
    render() {
        let { navList, flag } = this.state
        return (
            <>
                <div className="sou">

                </div>

                <div className="er">
                    <div className="tab">

                        {
                            navList.map((item, index) => <NavLink key={index} to={item.path} component={item.component}>{item.name}</NavLink>)
                        }

                    </div>
                    <div className="icon">
                        <img src={require('../img/a.jpg')}
                            className={flag ? '' : 'bian'}
                            onClick={() => {
                                this.setState({
                                    flag: !flag
                                })
                            }}
                        />
                    </div>


                </div>

                <div className={`mark ${!flag ? 'none' : ''}`} onClick={() => {
                    this.setState({ flag: false })
                }}></div>
                <div className={`nav ${!flag ? 'none' : ''}`}>
                    <p>金融</p>
                </div>
            </>
        )
    }
}

//.4793,170133-0.4589,170143-0.4929,170153-0.447,170203-0.4339,170213-0.4331,170224-0.4535,170234-0.4614,170244-0.4635,170254-0.4362,170304-0.4413,170314-0.4633,170325-0.4584,170335-0.4522,170345
//-0.4464,170355-0.457,170405-0.4349,170415-0.4272,170426-0.4578,170436-0.4571,170446-0.486,170456-0.447,170506-0.4591,170516-0.4749,170527-0.4105,170537-0.4336,170547-0.4321,170557-0.4293,170607-0.4899,170618-0.4423,170628-0.4923,170638-0
