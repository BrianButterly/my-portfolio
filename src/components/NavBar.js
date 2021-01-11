import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-red-700 min-w-max">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-green-400 text-4xl font-bold cursive tracking-widest"
            activeClassName="text-white"
          >
            Brian
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-400"
            activeClassName="text-red-100 bg-red-600"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-400"
            activeClassName="text-red-100 bg-red-600"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-400"
            activeClassName="text-red-100 bg-red-600"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon url="https://www.linkedin.com/in/brian-butterly-51890681/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://github.com/BrianButterly" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
            <SocialIcon url="https://twitter.com/Brian_Butterly" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
        </div>
      </div>
    </header>
  );
}
