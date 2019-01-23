import React, {Component} from 'react'
import {Button} from 'antd'
import {PicError} from '../utils/Errors'

export default class Header extends Component {

    constructor(props){

        super(props)
        this.state = {
    
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        try{
          let err1 = new PicError('hello', 'home.js')
        throw new PicError('hello')
        }catch(err){
            err.show()
        }
    }

    render(){
        return(
            <div>
                this is home
                <Button onClick={this.handleClick}>click me</Button>
            </div>
        )
    }
}

