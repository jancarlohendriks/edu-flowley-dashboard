/* eslint @typescript-eslint/no-var-requires: "off" */
const { BetaAnalyticsDataClient } = require('@google-analytics/data')
const analyticsDataClient = new BetaAnalyticsDataClient()

const PROPERTY_ID = '353724991'
const startDate = '7daysAgo'
const endDate = 'today'
const metric = 'screenPageViews'

export default async function handler(req, res) {
  const response = await analyticsDataClient
    .runReport({
      property: `properties/${PROPERTY_ID}`,
      dimensions: [{ name: 'pagePathPlusQueryString' }],
      metrics: [{ name: metric }],
      dateRanges: [{ startDate: startDate, endDate: endDate }],
      dimensionFilter: {
        filter: {
          fieldName: 'pagePathPlusQueryString',
          stringFilter: { matchType: 'CONTAINS', value: 'thema' },
        },
      },
    })
    .then((res) => res[0].rows)
  res.status(200).json({ response })
}
