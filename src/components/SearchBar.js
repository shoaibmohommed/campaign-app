import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { isEmpty } from 'lodash';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Util from '../Util';

const { HTML_DATE_FIELD_FORMAT } = Util;

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
        if ((!isEmpty(startDate) || !isEmpty(endDate)) && (isEmpty(startDate) || isEmpty(endDate))) {
            toast.error("Either select both the start date and end date or do not select any of it.", {
                position: toast.POSITION.TOP_LEFT
            });
            return;
        }
        else if (moment(startDate, HTML_DATE_FIELD_FORMAT) > moment(endDate, HTML_DATE_FIELD_FORMAT)) {
            toast.error("start date can not be greater than the end date ", {
                position: toast.POSITION.TOP_LEFT
            });
            return;
        }

        onFilterApply({ startDate, endDate, campaignName });
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
            <input type="text"
                name="setCampaignName"
                value={campaignName}
                placeholder="Search By Name"
                onChange={onChange} />
        </div>
        <button className="searchBtn" onClick={onSearchBtnClick}><i className="fa fa-search"></i> Search</button>
    </div>
}

SearchBar.propTypes = {
    onFilterApply: PropTypes.func
}

export default SearchBar;