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
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/').then((res) => res.json())
            .then((data) => this.setState({ data: data.results }))
    }

    handeleClick = () => {
        return window.location.reload();
    }

    handleIcon = () => {
        return this.state.data
    }
    render() {
        if (!this.state.data) {
            return <h2>Loading...</h2>
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
                                        <p>my name is</p>
                                        <h1>{info.name.title + " " + info.name.first + " " + info.name.last}</h1>
                                        <ul className='flex'>
                                            <li onClick={this.handleIcon}><FaUserAlt /></li>
                                            <li onClick={this.handleIcon}><HiOutlineMailOpen /></li>
                                            <li onClick={this.handleIcon}><BsFillCalendarCheckFill /></li>
                                            <li onClick={this.handleIcon}><FaMap /></li>
                                            <li onClick={this.handleIcon}><AiOutlinePhone /></li>
                                            <li onClick={this.handleIcon}><AiFillLock /></li>
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
