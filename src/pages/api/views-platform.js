const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const analyticsDataClient = new BetaAnalyticsDataClient();

const PROPERTY_ID = "353724991";
const startDate = "7daysAgo";
const endDate = "today";
const metric = "screenPageViews";

export default async function handler(req, res) {
  const response = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [
      {
        startDate: startDate,
        endDate: endDate,
      },
    ],
    metrics: [
      {
        name: metric,
      },
    ],
  });
  res.status(200).json({ response });
}
