import moment from 'moment';
const Util = {
    DATE_FORMAT: "MM/DD/YYYY",
    HTML_DATE_FIELD_FORMAT: "YYYY-MM-DD"
};

// function to check if the campaign is still active 
// or not according to the given logic.
export const isActive = function (campaign) {
    const currentDate = moment();

    const startDate = moment(campaign.startDate, Util.DATE_FORMAT);
    const endDate = moment(campaign.endDate, Util.DATE_FORMAT);

    if (currentDate.isBetween(startDate, endDate)) {
        return true
    }
    return false;
};
export const filterDataOnDate = function (filteredData, startDate, endDate) {
    const { DATE_FORMAT, HTML_DATE_FIELD_FORMAT } = Util;
    return filteredData.filter(item => {

        let itemStartDate = moment(item.startDate, DATE_FORMAT);
        let itemEndDate = moment(item.endDate, DATE_FORMAT);
        let filterStartDate = moment(startDate, HTML_DATE_FIELD_FORMAT);
        let filterEndDate = moment(endDate, HTML_DATE_FIELD_FORMAT);
        if (itemStartDate.isBetween(filterStartDate, filterEndDate)
            || itemEndDate.isBetween(filterStartDate, filterEndDate)) {
            return true
        }
        return false;
    });
};
export const filterDataOnCampaignName = function (filteredData, campaignName) {
    return filteredData.filter(item =>
        item.name.toLocaleLowerCase()
            .indexOf(campaignName.toLocaleLowerCase()) > -1
    )
};

export default Util;