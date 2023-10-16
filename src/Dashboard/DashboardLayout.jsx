import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';
const DashboardLayout = () => {
    return (
        <div>
        <Dashboard></Dashboard>
         <div className="drawer drawer-mobile">
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
           
        </div>
    </div>
    );
};

export default DashboardLayout;