import React, { Component } from 'react'
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaMap } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";


export default class Card extends Component {
    constructor() {
        super()
        this.state = {
            data: null,
            value: ''
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/').then((res) => res.json())
            .then((data) => this.setState({ data: data.results }))
    }



    handeleClick = () => {
        return this.componentDidMount()
    }

    handleIcon = ({ currentTarget }) => {
        let userInfo = this.state.data.result;
        let { id } = currentTarget;
        switch (id) {
            case "name":
                return this.setState({ value: userInfo.login.username, key: id })
            case "email":
                return this.setState({ value: userInfo.email, key: id })
            case "age":
                return this.setState({ value: userInfo.dob.age, key: id })
            case "location":
                return this.setState({ value: userInfo.location.street.number + "" + userInfo.location.street.name, key: id })
            case "phone":
                return this.setState({ value: userInfo.name.phone, key: id })
            case "password":
                return this.setState({ value: userInfo.login.password, key: id })
            default:
                break;
        }
    }
    render() {
        if (!this.state.data) {
            return <div className='loader container flex-center'></div>
        }
        return (
            <>
                <div className="container flex-center">
                    <div className="box">
                        {
                            this.state.data.map((info) => {
                                console.log(info)
                                return (
                                    <div key={info.id}>
                                        <figure>
                                            <img src={info.picture
                                                .medium
                                            } alt="ravi" />
                                        </figure>
                                        <hr />
                                        <p>my name is</p>
                                        <h1>{info.name.title + " " + info.name.first + " " + info.name.last}</h1>
                                        <ul className='flex'>
                                            <li id='name' className='hover' onMouseOver={this.handleIcon}><FaUserAlt /></li>
                                            <li id='email' className='hover' onMouseOver={this.handleIcon}><HiOutlineMailOpen /></li>
                                            <li id='age' className='hover' onMouseOver={this.handleIcon}><BsFillCalendarCheckFill /></li>
                                            <li id='location' className='hover' onMouseOver={this.handleIcon}><FaMap /></li>
                                            <li id='phone' className='hover' onMouseOver={this.handleIcon}><AiOutlinePhone /></li>
                                            <li id='password' className='hover' onMouseOver={this.handleIcon}><AiFillLock /></li>
                                        </ul>
                                    </div>
                                )
                            })
                        }
                        <button onClick={this.handeleClick}>Random user</button>
                    </div>
                </div>
            </>
        )
    }
}
