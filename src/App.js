import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CampaignTable from './components/CampaignTable';

const removeDuplicates = (data) => {
  let valueArr = data.map(item => item.id);
  return [...new Set(valueArr)];
};

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
      const { startDate, endDate, campaignName, campaignTableData } = this.state;
      let data = [...campaignTableData];
      data = data.concat(newData);

      let uniqueValue = removeDuplicates(data);

      let hasDuplicates = data.length > uniqueValue.length;
      if (hasDuplicates) {
        console.log("Please check the data provided it must have unique id values");
        return false;
      }

      this.setState({ campaignTableData: data }, () => {
        this.onFilterApply({ startDate, endDate, campaignName });
      });
      return true;

    }
  }


  onFilterApply = ({ startDate, endDate, campaignName }) => {
    this.setState({
      startDate,
      endDate,
      campaignName
    });
  };

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Campaign App</h1>
          <SearchBar onFilterApply={this.onFilterApply} />
        </header>
        <section className="container">

          {<CampaignTable {...this.state} />}
        </section>
      </div>
    );
  }
}

export default App;
