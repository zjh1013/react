import React, { Component } from 'react'
import { connect } from 'react-redux'
class edit extends Component {
    state = {
        name: "",
        tit: ""
    }
    render() {
        let { name , tit } = this.state
        return (
            <div>
                <input value={name} onChange={this.changename.bind(this)} name="name" /> 
                <input value={tit} onChange={this.changename.bind(this)} name="tit" />
                <button onClick={this.add.bind(this)}>提交</button>
            </div>
        )
    }
    changename(e) {
        let names = e.target.name;
        this.setState({
            [names]: e.target.value
        })
    }
    add() {
        let { name, tit } = this.state
        let { query } = this.props.location
        let index = query.index;
        let obj = { name, tit, index }
        this.props.send(obj)
        this.props.history.push({ pathname: "/index" })
    }
    componentDidMount() {
        let { name, tit } = this.state
        let { query } = this.props.location
        name = query.item.name
        tit = query.item.tit
        console.log(name, tit)
        this.setState({
            name, tit
        })
    }
}
export default connect(
    (state) => {
        return {

        }
    },
    (dispatch) => {
        return {
            send(data) {
                dispatch({ type: "BBB", data })
            }
        }
    }
)(edit)
