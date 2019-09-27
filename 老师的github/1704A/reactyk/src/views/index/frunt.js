import React, { Component } from 'react'
import {connect} from 'react-redux'

// console.log(connect()());


 class Frunt extends Component {
     state = {
         val:''
     }
    render() {
        console.log(this.props,'frunt');
        let {count,list} = this.props;
        let {val} = this.state;
        return (
            <div>
                <button onClick={this.handleDel.bind(this)}>-</button>
                <span>{count}</span>
                <button onClick={this.handleAdd.bind(this)}>+</button>

                <input value={val} onChange={this.handleChange.bind(this)} onKeyDown={this.handleDown.bind(this)}/>
                <ul>
                    {
                        list && list.map((item,index) => <li 
                        key={index}
                        onClick={this.handleDelList.bind(this,index)}
                        >{item}</li>)
                    }
                </ul>
            </div>
        )
    }
    handleAdd(){
        this.props.add();
    }
    handleDel(){
        this.props.del();

    }
    handleDelList(ind){
        this.props.dellist(ind);
    }
    handleDown(e){
        if(e.keyCode == 13){
            console.log(this.state.val);
            this.props.addlist(this.state.val);
        }
    }
    handleChange(e){
        this.setState({val:e.target.value})
    }
}

// const mapStateToProps = (state)=>{
//     return{

//     }
// }

// const mapDispatchToProps = (dispatch)=>{
//     return {

//     }
// }

export default connect((state)=>{
    console.log(state,'state@@@@@@@@@@@@@@');
    return{
        count:state.count,
        list:state.list
    }
},(dispatch)=>{
    return {
        add(){
            dispatch({type:'ADD',num:1804})
        },
        del(){
            dispatch({type:'DEL'})
        },
        addlist(val){
            dispatch({type:'ADD_LIST',val})
        },
        dellist(ind){
            dispatch({type:'DEL_LIST',ind})
        }
    }
})(Frunt)