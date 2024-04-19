import React, { useState } from 'react';
import Tabs from './Tabs';

function App() {
  const tabs = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className="App">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;