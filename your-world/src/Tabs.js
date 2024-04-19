import React from 'react';
import Tab from './Tab';

function Tabs({ tabs, activeTab, onTabChange }) {
  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <Tab
            key={tab.label}
            label={tab.label}
            active={tab.label === activeTab}
            onClick={() => onTabChange(tab.label)}
          />
        ))}
      </div>
      <div className="tab-content">
        {tabs.find((tab) => tab.label === activeTab).content}
      </div>
    </div>
  );
}

export default Tabs;