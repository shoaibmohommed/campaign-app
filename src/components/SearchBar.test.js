import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

it('renders without crashing', () => {
    shallow(<SearchBar />);
});

describe('Test Search Bar component', () => {
    const props = {
        onFilterApply: jest.fn()
    }
    const searchBar = shallow(<SearchBar {...props} />);

    it('Start Date change', () => {
        const dateObj = '12/12/2012';

        searchBar.find('input[name="setStartDate"]').simulate('change', {
            target: {
                value: dateObj,
                name: 'setStartDate'
            },
        });

        expect(searchBar.find('input[name="setStartDate"]').prop('value')).toEqual(dateObj);
    });

    it('End Date change', () => {
        const dateObj = '12/12/2012';

        searchBar.find('input[name="setEndDate"]').simulate('change', {
            target: {
                value: dateObj,
                name: 'setEndDate'
            },
        });

        expect(searchBar.find('input[name="setEndDate"]').prop('value')).toEqual(dateObj);
    });

    it('Campaign name search change', () => {
        const value = 'car';

        searchBar.find('input[name="setCampaignName"]').simulate('change', {
            target: {
                value: value,
                name: 'setCampaignName'
            },
        });

        expect(searchBar.find('input[name="setCampaignName"]').prop('value')).toEqual(value);
    });

    it('outputs on search button click', () => {

        searchBar.find('button').simulate('click');

        expect(props.onFilterApply).toHaveBeenCalled();
    });
});