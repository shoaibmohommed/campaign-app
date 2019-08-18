import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import campaignTableData from './mockCampaignData';

describe("App Component", () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('has pushed duplicate ids data', () => {
    const component = shallow(<App />);
    expect(AddCampaigns(campaignTableData)).toEqual(true);
    expect(AddCampaigns(campaignTableData)).toEqual(false);
  });

  it('applies filters from child component', () => {
    const component = shallow(<App />);
    AddCampaigns(campaignTableData);
    //console.log(component.instance().state.originalTableData)
    const params = { startDate: '2017-01-01', endDate: '2017-07-01', campaignName: 'i' };
    component.instance().onFilterApply(params);

    expect(component.instance().state.campaignName).toEqual(params.campaignName);
    expect(component.instance().state.startDate).toEqual(params.startDate);
    expect(component.instance().state.endDate).toEqual(params.endDate);

  });

});