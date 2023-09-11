import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function Layout({ title, children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
        {/* Add other meta tags, links, and stylesheets */}
      </Head>

      <header className="bg-white shadow">
        {/* Your header content */}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-white shadow mt-8 py-4">
        {/* Your footer content */}
      </footer>
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
