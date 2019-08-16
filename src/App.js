import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import moment from 'moment';
import CampaignTable from './components/CampaignTable';
import _ from 'lodash';
import Util from './Util';

const { DATE_FORMAT, HTML_DATE_FIELD_FORMAT } = Util;


// function to check if the campaign is still active 
// or not according to the given logic.
function isActive(campaign) {
  const currentDate = moment();

  const startDate = moment(campaign.startDate, DATE_FORMAT);
  const endDate = moment(campaign.endDate, DATE_FORMAT);

  if (currentDate.isBetween(startDate, endDate)) {
    return true
  }
  return false;
};

const campaignData = [
  { id: 1, name: "Divavu", startDate: "9/19/2017", endDate: "3/9/2018", Budget: 88377 },
  { id: 2, name: "Jaxspan", startDate: "11/21/2017", endDate: "2/21/2018", Budget: 608715 },
  { id: 3, name: "Miboo", startDate: "11/1/2017", endDate: "6/20/2017", Budget: 239507 },
  { id: 4, name: "Trilith", startDate: "8/25/2017", endDate: "11/30/2017", Budget: 179838 },
  { id: 5, name: "Layo", startDate: "11/28/2017", endDate: "10/22/2019", Budget: 837850 },
  { id: 6, name: "Photojam", startDate: "7/25/2017", endDate: "6/23/2017", Budget: 858131 },
  { id: 7, name: "Blogtag", startDate: "6/27/2017", endDate: "11/15/2019", Budget: 109078 },
  { id: 8, name: "Rhyzio", startDate: "10/13/2017", endDate: "1/25/2018", Budget: 272552 },
  { id: 9, name: "Zoomcast", startDate: "9/6/2017", endDate: "11/10/2017", Budget: 301919 },
  { id: 10, name: "Realbridge", startDate: "3/5/2018", endDate: "10/2/2017", Budget: 505602 }
];



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignTableData: []
    }

    window.AddCampaigns = (newData) => {
      let data = [...this.state.campaignTableData];
      data = data.concat(newData);

      let valueArr = data.map(item => item.id);
      let uniqueValue = [...new Set(valueArr)];

      let hasDuplicates = valueArr > uniqueValue;
      if (hasDuplicates) {
        console.log("Please check the data provided it must have unique id values");
        return;
      }
      this.setState({ campaignTableData: data });
    }
  }


  onFilterApply = ({ startDate, endDate, campaignName }) => {

    let filteredData = [...campaignData];

    // show record if startDate is in filter range
    if (!_.isEmpty(startDate)) {
      filteredData = filteredData.filter(item => {
        let itemStartDate = moment(item.startDate, DATE_FORMAT);
        let itemEndDate = moment(item.endDate, DATE_FORMAT);
        let filterStartDate = moment(startDate, HTML_DATE_FIELD_FORMAT);
        if (filterStartDate.isBetween(itemStartDate, itemEndDate)) {
          return true
        }
        return false;
      });
    }

    // show record if endDate is in filter range
    if (!_.isEmpty(endDate)) {
      let extraFilterRecords = filteredData.filter(item => {
        let itemStartDate = moment(item.startDate, DATE_FORMAT);
        let itemEndDate = moment(item.endDate, DATE_FORMAT);
        let filterEndDate = moment(endDate, HTML_DATE_FIELD_FORMAT);
        if (filterEndDate.isBetween(itemStartDate, itemEndDate)) {
          return true
        }
        return false;
      });

      // merge data from startDate filter and endDate filter and removing duplicates
      filteredData.concat(extraFilterRecords);
      filteredData = _.uniqBy(filteredData, "id");
    }

    if (!_.isEmpty(campaignName)) {
      filteredData = filteredData.filter(item =>
        item.name.toLocaleLowerCase()
          .indexOf(campaignName.toLocaleLowerCase()) > -1
      )
    }

    this.setState({ campaignTableData: filteredData });
  };

  render() {
    let { campaignTableData } = this.state;
    const hasData = campaignTableData.length > 0;

    if (hasData) {
      campaignTableData = campaignTableData.map(campaign => {
        campaign.isActive = isActive(campaign);
        return campaign;
      });
    }

    return (
      <div className="App" >
        <header className="App-header">
          <h1>Campaign App</h1>
          <SearchBar onFilterApply={this.onFilterApply} />
        </header>
        <section className="container">

          {hasData && <CampaignTable campaignTableData={campaignTableData} />}
        </section>
      </div>
    );
  }
}

export default App;
