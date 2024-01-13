import React from 'react';
import { FaHome, FaUser, FaTasks, FaChartLine, FaStar, FaUserCircle } from 'react-icons/fa';

export const sideNavBarData = [
    {
        title: 'Home',	
        path: '/dashboard',
        icon: <FaHome />,
        cName: 'nav-text'   
    },
    {
        title: 'MyActivity',
        path: '/myactivity',
        icon: <FaUser />,
        cName: 'nav-text'
    },
    {
        title: 'Tasks',
        path: '/tasks',
        icon: <FaTasks />,
        cName: 'nav-text'
    },
    {
        title: 'Progess',
        path: '/progess',
        icon: <FaChartLine />,
        cName: 'nav-text'
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <FaStar />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <FaUserCircle />,
        cName: 'nav-text'
    }
];
