import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { routeConfig } from '@/routes';

const SidebarItem = ({ title, path }: { title: string; path: string }) => {
  const navigate = useNavigate();

  return (
    <div
      className="py-4 border-b border-grey-2 text-center cursor-pointer hover:bg-grey hover:text-white"
      onClick={() => {
        navigate(path);
      }}
    >
      <Link to={path}>{title}</Link>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="min-h-screen w-64 border-r border-grey-2 bg-white">
      {routeConfig.map((ele) => {
        return <SidebarItem key={ele.path} title={ele.title} path={ele.path} />;
      })}
    </div>
  );
};

export default Sidebar;
