import React from 'react';
import { shallow, mount } from 'enzyme';
import CampaignTable from './CampaignTable';
import campaignTableData from '../mockCampaignData';

const propMock = {
    campaignTableData,
    startDate: '2017-01-01',
    endDate: '2017-12-12',
    campaignName: 'o'
};
describe("Campaign Table Component", () => {
    it('renders without crashing', () => {
        shallow(<CampaignTable {...propMock} />);
    });

    it('shows red color for start date and end date of record id = 3 ', () => {
        const component = mount(<CampaignTable {...propMock} />);

        expect(component.find('tr').at(3).find("td").at(2).find("span.color-red").length).toEqual(1);
    });

    it('shows no data', () => {
        propMock.campaignTableData.length = 0;
        mount(<CampaignTable {...propMock} />);
    });
});