import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import moment from 'moment';
import CampaignTable from './components/CampaignTable';
import _ from 'lodash';
import Util, { isActive } from './Util';

const { DATE_FORMAT, HTML_DATE_FIELD_FORMAT } = Util;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      campaignTableData: [],
      originalTableData: [],
      startDate: '',
      endDate: '',
      campaignName: ''
    }

    // global method exposed for adding campaign data
    window.AddCampaigns = (newData) => {
      const { startDate, endDate, campaignName, originalTableData } = this.state;
      let data = [...originalTableData];
      data = data.concat(newData);

      let valueArr = data.map(item => item.id);
      let uniqueValue = [...new Set(valueArr)];

      let hasDuplicates = valueArr > uniqueValue;
      if (hasDuplicates) {
        console.log("Please check the data provided it must have unique id values");
        return false;
      }
      this.setState({ originalTableData: data }, () => {
        this.onFilterApply({ startDate, endDate, campaignName });
      });
      return true;

    }
  }


  onFilterApply = ({ startDate, endDate, campaignName }) => {

    let filteredData = [...this.state.originalTableData];


    // show record if campaign start date or end date is in filter range
    if (!_.isEmpty(startDate) && !_.isEmpty(endDate)) {
      filteredData = filteredData.filter(item => {
        let itemStartDate = moment(item.startDate, DATE_FORMAT);
        let itemEndDate = moment(item.endDate, DATE_FORMAT);
        let filterStartDate = moment(startDate, HTML_DATE_FIELD_FORMAT);
        let filterEndDate = moment(endDate, HTML_DATE_FIELD_FORMAT);

        if (itemStartDate.isBetween(filterStartDate, filterEndDate)
          || itemEndDate.isBetween(filterStartDate, filterEndDate)) {
          return true
        }
        return false;
      });
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
