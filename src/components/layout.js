import React from 'react';

const Layout = ({ children }) => (
    <div>
        <h1>Here goes the navbar</h1>
        {children}
        <h1>Here goes the footer</h1>
    </div>
);

export default Layout;