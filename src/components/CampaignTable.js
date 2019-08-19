import React from 'react';
import moment from 'moment';
import Util, { isActive } from '../Util';
import { isEmpty } from 'lodash';
import { filterDataOnDate, filterDataOnCampaignName } from '../Util';

const { DATE_FORMAT } = Util;
const getFormatedString = str =>// insert a space before all caps
    str.replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function (str) { return str.toUpperCase(); });

const TableHeader = ({ columns }) => (
    <thead>
        <tr>
            {columns.map((column, key) => <th key={key}>{getFormatedString(column)}</th>)}
        </tr>
    </thead>
);

const dateValidityRenderer = function (row, value) {
    let itemStartDate = moment(row.startDate, DATE_FORMAT);
    let itemEndDate = moment(row.endDate, DATE_FORMAT);
    if (itemStartDate > itemEndDate) {
        return <span className="color-red">{value}</span>;
    }
    return value;
}

// Rederers to be used so return some custom html on selected columns;
const renderers = {
    isActive: function (row, value) {
        let text = "Active";
        if (!value) {
            text = "InActive";

        }
        return <span><i className={`fa fa-circle ${text}`}></i> {text}</span>;
    },
    Budget: function (row, value) {
        return `${value} USD`;
    },
    startDate: dateValidityRenderer,
    endDate: dateValidityRenderer
};

const processAndFilterData = ({ campaignTableData, startDate, endDate, campaignName }) => {
    let filteredData = [...campaignTableData] || [];

    // adding isActive Field
    filteredData = filteredData.map(campaign => {
        campaign.isActive = isActive(campaign);
        return campaign;
    });
    
    // show record if campaign start date or end date is in filter range
    if (!isEmpty(startDate) && !isEmpty(endDate)) {
        filteredData = filterDataOnDate(filteredData, startDate, endDate);
    }
    // filter the data on the basis of campaign name.
    if (!isEmpty(campaignName)) {
        filteredData = filterDataOnCampaignName(filteredData, campaignName);
    }
    return filteredData;
};

// functional component to render a table for all the campaigns
const CampaignTable = (props) => {
    const processedData = processAndFilterData(props);

    // show no data if array is empty
    if (processedData.length === 0)
        return <h1>No data found</h1>

    const columns = Object.keys(processedData[0]);
    return <table>
        <TableHeader columns={columns} />
        <tbody>
            {
                processedData.map(campaign =>
                    <tr key={campaign.id}>
                        {columns.map((field, key) =>
                            <td key={key}>
                                {(renderers[field] && renderers[field](campaign, campaign[field])) || campaign[field]}
                            </td>)}
                    </tr>
                )
            }
        </tbody>
    </table>
};

export default CampaignTable;
