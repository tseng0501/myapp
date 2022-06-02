import React from 'react';
import './list.scss'

const List = (list) => {
    return (
        <li className='li_row'>
            <img className='li_text tabel_img' src={list.avatar_url} alt={list.id}></img>
            <div className='li_text'>{list.bio ? list.bio.toString() : '//'}</div>
            <div className='li_text'><a href={list.blog ? list.blog : ''} >blog</a></div>
            <div className='li_text'>{list.location ? list.location : '//'}</div>
            <div className='li_text'>{list.login ? list.login : '//'}</div>
            <div className='li_text'>{list.name ? list.name : '//'}</div>
            <div className='li_text'>{list.site_admin.toString() ? list.site_admin.toString() : '//'}</div>
        </li>
    );
}


export default List