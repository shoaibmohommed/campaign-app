import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onFilterApply }) => {

    // using useState hook from react for implementing state in functional component
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [campaignName, setCampaignName] = useState("");

    const eventsObj = { setStartDate, setEndDate, setCampaignName };
    const onChange = (event) => {
        const { name, value } = event.target;
        eventsObj[name](value);
    };

    const onSearchBtnClick = () => {
        onFilterApply({ ...{ startDate, endDate, campaignName } })
    }

    return <div className="searchBar">
        <div>
            <div className="field-group text-left">
                <label htmlFor="start">Start date:</label>
                <input type="date"
                    id="start"
                    name="setStartDate"
                    value={startDate}
                    onChange={onChange} />
            </div>
            <div className="field-group text-left">
                <label htmlFor="end">End date:</label>
                <input type="date"
                    id="end"
                    name="setEndDate"
                    value={endDate}
                    onChange={onChange} />
            </div>
        </div>
        <div>
            <input type="text"
                name="setCampaignName"
                value={campaignName}
                placeholder="Search By Name"
                onChange={onChange} />
            <button className="searchBtn" onClick={onSearchBtnClick}><i className="fa fa-search"></i></button>
        </div>
    </div>
}

SearchBar.propTypes = {
    onFilterApply: PropTypes.func
}

export default SearchBar;