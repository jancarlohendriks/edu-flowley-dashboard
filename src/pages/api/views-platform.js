/* eslint @typescript-eslint/no-var-requires: "off" */
const { BetaAnalyticsDataClient } = require('@google-analytics/data')

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  },
})

console.log(process.env.PRIVATE)

const PROPERTY_ID = '353724991'
const startDate = '7daysAgo'
const endDate = 'today'
const metric = 'screenPageViews'

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
  })

  const views = response[0].rows[0].metricValues[0].value
  res.status(200).json({ views })
}
