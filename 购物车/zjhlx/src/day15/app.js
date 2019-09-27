import React, { Component } from 'react';
import "./css/app.css"
import data from "./data.json"
class app extends Component {
    state={data,INDEX:0,oft:[]}
    render() {
        let {data}=this.state
        console.log(this.state,"state");
        return (
            <div className="bigbox">
              <div className="left">
                  {this.state.data.map((item,i)=><p onClick={this.Click.bind(this,i)} className={this.state.INDEX==i&&"active"} key={i}>{item.type}</p>)}
              </div>
              <div ref="Right" onScroll={this.Scroll} className="right">
              <div className="content" ref="I">
                {data.map((item,index)=>{
                    return item.list.map((ele,N)=>{
                            if(N==0)
                            {
                                return <p dataset-Top={index} ref="item">{ele}</p>
                            }else{
                                return <p>{ele}</p>
                            }
                        })
                    })}
              </div>
              </div>
            </div>
        );
    }
    Click=(N)=>{
        console.log(N);
        
        this.setState({INDEX:N},()=>{

        })
        let aa=this.state.oft[N]
        this.refs.Right.scrollTop=aa
      
        
    }
    Scroll=(e)=>{
       this.state.oft.map((item,IN)=>{
           if(item<=this.refs.Right.scrollTop)
           {
               this.setState({INDEX:IN})
           }
       })
    }
    componentDidMount=()=>{
        let {oft}=this.state
       let p= [...document.querySelectorAll("p")]
       p.forEach(item=>{
           if(item.getAttribute("dataset-Top"))
           {
            oft.push(item.offsetTop)
           }
       })
    }
}

export default app;