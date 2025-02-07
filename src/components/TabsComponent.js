import React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

function TabPanelComponent(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function TabsComponent({ tabValue, handleTabChange, tabs }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanelComponent key={index} value={tabValue} index={index}>
          {tab.content}
        </TabPanelComponent>
      ))}
    </Box>
  );
}

export default TabsComponent;