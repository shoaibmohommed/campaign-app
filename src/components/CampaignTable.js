import React from 'react';
import moment from 'moment';
import Util from '../Util';
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

// functional component to render a table for all the campaigns
const CampaignTable = ({ campaignTableData, onFilterApply }) => {
    const columns = Object.keys(campaignTableData[0]);
    return <table>
        <TableHeader columns={columns} />
        <tbody>
            {
                campaignTableData.map(campaign =>
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
