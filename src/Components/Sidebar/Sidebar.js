import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import "./Sidebar.css";

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <div className="sidebar__hash">#</div>
            <p>{topic}</p>
        </div>
    )

  return <div className='sidebar'>
      <div className="sidebar__top">
          <img src="https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
          <Avatar src={user.photoURL} className='sidebar__avatar'>
              { user?.displayName[0] }
              </Avatar>
          <h2>{ user.displayName }</h2>
          <h4>{ user.email }</h4>
      </div>

      <div className="sidebar__stats">
          <div className="sidebar__stat">
              <p>Who viewed you</p>
              <p className='sidebar__statNumber'>99</p>
          </div>

          <div className="sidebar__stat">
              <p>Views on post</p>
              <p className='sidebar__statNumber'>50</p>
          </div>
      </div>

      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("react native")}
          {recentItem("reactjs")}
          {recentItem("programming")}
          {recentItem("Software Engineering")}
          {recentItem("UI/UX")}
      </div>
  </div>;
}

export default Sidebar;
