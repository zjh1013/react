import React, { Component } from 'react'
import {buyer} from '../../api/api'
export default class StoreList extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
   async componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.id;
        let res =await buyer.goodslist({store_id:id});
        console.log(res);
    }
}
