import React from 'react';
import { shallow, mount } from 'enzyme';
import CampaignTable from './CampaignTable';
import campaignTableData from '../mockCampaignData';

describe("Campaign Table Component", () => {
    it('renders without crashing', () => {
        shallow(<CampaignTable campaignTableData={campaignTableData} />);
    });

    it('shows red color for start date and end date of record id = 3 ', () => {
        const component = mount(<CampaignTable campaignTableData={campaignTableData} />);

        expect(component.find('tr').at(3).find("td").at(2).find("span.color-red").length).toEqual(1);
    });
});