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
        <span>
            <input type="date"
                name="setStartDate"
                value={startDate}
                placeholder="Start Date"
                onChange={onChange} />
            <input type="date"
                name="setEndDate"
                value={endDate}
                placeholder="End Date"
                onChange={onChange} />
        </span>
        <span>
            <input type="text"
                name="setCampaignName"
                value={campaignName}
                placeholder="Search By Name"
                onChange={onChange} />
            <button className="searchBtn" onClick={onSearchBtnClick}><i className="fa fa-search"></i></button>
        </span>
    </div>
}

SearchBar.propTypes = {
    onFilterApply: PropTypes.func
}

export default SearchBar;