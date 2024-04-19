import React from 'react';
import App from './App';

function Page({ children }) {
  return (
    <div className="page">
      <App />
      {children}
    </div>
  );
}

export default Page;