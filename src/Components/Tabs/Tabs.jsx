import React, { useState } from "react";
import "./Tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PanelTabs from "../PanelTabs/PanelTabs";
import imag from "../../assets/icons/arrow-right.svg";
import imag2 from "../../assets/icons/arrow-left.svg";
import products from "../../assets/data";
const TopTabs = () => {
  const [forward, setforward] = useState(0);

  return (
    <Tabs className={"tabContainer"} defaultIndex={2}>
      <TabList className={"tabList"}>
        <Tab disabled={true}>{forward + 16} of 32 products</Tab>
        <Tab disabled={true}>Sort By</Tab>
        <Tab onClick={() => setforward(0)}>Most recent</Tab>
        <Tab onClick={() => setforward(0)}>Lowest price</Tab>
        <Tab onClick={() => setforward(0)}>highest price</Tab>
        <img src={imag2} className="imgTabLeft" onClick={() => setforward(0)} />
        <img src={imag} className="imgTab" onClick={() => setforward(16)} />
      </TabList>

      <TabPanel />

      <TabPanel />

      <TabPanel>
        <PanelTabs forward={forward} fun={1} />
      </TabPanel>
      <TabPanel>
        <PanelTabs forward={forward} fun={2} />
      </TabPanel>
      <TabPanel>
        <PanelTabs forward={forward} fun={3} />
      </TabPanel>
    </Tabs>
  );
};

export default TopTabs;
