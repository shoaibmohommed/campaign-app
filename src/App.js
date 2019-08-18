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

let campaignData = [

];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignTableData: [],
      startDate: '',
      endDate: '',
      campaignName: ''
    }

    // global method exposed for adding campaign data
    window.AddCampaigns = (newData) => {
      let data = [...campaignData];
      const { startDate, endDate, campaignName } = this.state;
      data = data.concat(newData);

      let valueArr = data.map(item => item.id);
      let uniqueValue = [...new Set(valueArr)];

      let hasDuplicates = valueArr > uniqueValue;
      if (hasDuplicates) {
        console.log("Please check the data provided it must have unique id values");
        return;
      }
      campaignData = data;
      this.onFilterApply({ startDate, endDate, campaignName });
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

    this.setState({
      campaignTableData: filteredData,
      startDate,
      endDate,
      campaignName
    });
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
