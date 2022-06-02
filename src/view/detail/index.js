import React, { useState, useEffect } from 'react';
import List from '../../component/list';
import './detail.scss'

function Detail() {
    
    const [state, setstate] = useState();
    useEffect(() => {
        fetchData()
        fetchLogin()
    }, []);
    const fetchData = () => {
         fetch('https://api.github.com/users?page=10&per_page=100')
            .then(response => response.json())
            .then(data => {
                setstate(data);
            })
    }
    const fetchLogin = async () => {

        let array = []
        for (let i = 0; i < state?.length; i++) {
            const login = state[i].login;
            const itemCount = await fetch(`https://api.github.com/users/${login}`)
                .then(response => response.json())
                .then(login_data => {
                    return login_data
                })
            array.push(itemCount)
        }
        setstate(array)
    }
    return (
        <div className="main">
            <ul className="ul_list">
                <li className='li_row'>
                    <div className='li_title'>avatar_url</div>
                    <div className='li_title'>bio</div>
                    <div className='li_title'>blog</div>
                    <div className='li_title'>location</div>
                    <div className='li_title'>login</div>
                    <div className='li_title'>name</div>
                    <div className='li_title'>site_admin</div>
                </li>
                {state?.map(function (item, key) {
                    return <List {...item} key={key} />
                })}
            </ul>
        </div>
    );
}
export default Detail
