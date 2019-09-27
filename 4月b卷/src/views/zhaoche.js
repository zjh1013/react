import React, { Component } from 'react'
import '../mock/index'
import axios from 'axios'
export default class zhaoche extends Component {
    state = {
        list: {}
    }
    render() {
        let { list } = this.state;
        return (
            <div>
                {
                    Object.keys(list).map((item, index) => <div key={index}
                        ref={'title_' + item}>
                        <h3>{item}</h3>
                        {
                            list[item].map((item1, index1) => <div className="car" key={index1}>
                                <img src={item1.CoverPhoto} />
                                <span>{item1.Name}</span>
                            </div>)
                        }
                    </div>)
                }
                <ul className="asd">
                    {
                        Object.keys(list).map((item1, index1) =>
                            <li key={index1}
                                onClick={this.bscrollLi.bind(this, item1)}
                            >{item1}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/api/data').then((res) => {
            this.setState({
                list: res.data
            })
        })
    }
    bscrollLi(item1) {
        document.documentElement.scrollTop = this.refs['title_' + item1].offsetTop - 44
    }
}
