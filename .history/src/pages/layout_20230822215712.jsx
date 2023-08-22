import React from 'react';

const pageLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-xl font-semibold">Expense Calculator</h1>
      </header>
      <main className="flex-1 p-4">{children}</main>
      <footer
  class="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
  <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
    <a
      class="text-neutral-800 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >Tailwind Elements</a
    >
  </div>
</footer>
      
    </div>
  );
};

export default pageLayout;
