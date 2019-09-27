import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getList} from '../store/exam/examactions'
import {CLICK_NEXT,CLICK_EXAM,SUBMIT} from '../store/types'
class Exam extends Component {
    state = {
        arr:['A','B','C','D'],
        flag:false
    }
    render() {
        console.log(this.props);
        let {id} = this.props.match.params;
        let {curdata,con,count} = this.props;
        let {arr,flag} = this.state;
        console.log(curdata);
        return (
            <div>
                <h3>{curdata && curdata.title}</h3>
                <ul>
                    {
                        curdata.options && curdata.options.map((item,index)=> 
                        <li key={index} className="exam" onClick={this.handleclickexam.bind(this,item.id)}>
                            <span className={`
                            ${curdata.selected != -1 && curdata.success == index? 'success' :''}
                            ${curdata.selected != -1 && curdata.selected == index? 'error' :''}
                            `}></span>
                            <span>{arr[item.id]}、{item.txt}</span>
                        </li>
                        )
                    }
                </ul>
                <button onClick={this.handlenextexam.bind(this,false)}>上一道</button>
                <button onClick={this.handleSubmit.bind(this)}>提交</button>
                <button onClick={this.handlenextexam.bind(this,true)}>下一道</button>
                {
                    flag ? <div className="dialog">
                    <div>
                        <span>{con}</span>
                        <span>一共答对了{count}题</span>
                        <button onClick={()=>{
                            this.setState({flag:false})
                        }}>关闭</button>
                    </div>
                </div> : null
                }
                
            </div>
        )
    }
    componentDidMount(){
        this.props.getinit();
    }
    handlenextexam(flag){ //点击上一道下一道
        let {ind,length} = this.props;
        let cur = flag ? ind+1 : ind -1;
        if(cur >= 0 && cur <= length-1){
            this.props.clicknext(cur);
        }
    }
    handleclickexam(id){ //点击题目
        this.props.clickexam(id);
    }
    handleSubmit(){ //提交
        this.setState({flag:true})
        this.props.submit();
    }
}

export default connect((state)=>{
    console.log(state);
    return {
        curdata:state.exam.curdata,
        ind:state.exam.ind,
        length:state.exam.length,
        con:state.exam.con,
        count:state.exam.count
    }
},(dispatch)=>{
    return {
        getinit(){
            dispatch(getList)
        },
        clicknext(cur){
            dispatch({type:CLICK_NEXT,cur});
        },
        clickexam(id){
            dispatch({type:CLICK_EXAM,id})
        },
        submit(){
            dispatch({type:SUBMIT})
        }
    }
})(Exam)
