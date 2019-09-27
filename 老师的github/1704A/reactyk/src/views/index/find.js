import React, { Component } from 'react'
import axios from 'axios';
import '../../mock/index'
import {connect} from 'react-redux'
import {getList} from '../../store/city/cityactions'
class Find extends Component {
    state = {
        data:{}
    }
    render() {
        // let {data} = this.state;
        let {data} = this.props;
        console.log(Object.keys(data));
        return (
            <div>
                {data && Object.keys(data).map((item,index) => <div
                 ref={'title_'+ item}
                 key={index} className="citycontent">
                    <h3>{item}</h3>
                    {
                        data[item].map((item1,index1)=><dl key={index1}>
                            <dt>
                                <img src={item1.CoverPhoto}/>
                            </dt>
                            <dd>{item1.Name}</dd>
                        </dl>)
                    }
                </div>)}
                <ul className="citylist">
                    {
                        data && Object.keys(data).map((item,index) => <li 
                        onClick={this.handleScrollTo.bind(this,item)}
                        key={index}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        // axios.get('/api/city').then((res)=>{
        //     // console.log(res.data);
        //     this.setState({data:res.data})
        // });
        this.props.getlist();
    }
    handleScrollTo(key){
        console.log(this.refs['title_'+key]);
        document.documentElement.scrollTop = this.refs['title_'+key].offsetTop -44;
    }
}


export default connect((state)=>{
    console.log(state);
    return {
        data:state.city
    }
},(dispatch)=>{
    return {
        getlist(){
            dispatch(getList(123));
        },
        getadd(){
            // dispatch({type:'ADD',123})
        }
    }
})(Find)