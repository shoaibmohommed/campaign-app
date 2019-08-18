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
}

export default Util;