/* eslint @typescript-eslint/no-var-requires: "off" */
const { BetaAnalyticsDataClient } = require('@google-analytics/data')

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GSA_CLIENT_EMAIL,
    private_key: process.env.GSA_PRIVATE_KEY,
  },
})

const PROPERTY_ID = process.env.GSA_PROPERTY_ID
const startDate = '7daysAgo'
const endDate = 'today'
const metric = 'screenPageViews'

const report = (entity = {
  dimensions: [
    {
      name: 'day',
    },
  ],
  metrics: [
    {
      name: 'screenPageViews',
    },
  ],
  dateRanges: [
    {
      startDate: '30daysAgo',
      endDate: 'today',
    },
  ],
  orderBys: [
    {
      dimension: {
        orderType: 'NUMERIC',
        dimensionName: 'day',
      },
      desc: false,
    },
  ],
  dimensionFilter: {
    filter: {
      fieldName: 'hostName',
      stringFilter: {
        matchType: 'CONTAINS',
        value: entity,
      },
    },
  },
})

export default async function handler(req, res) {
  const entity = req.query.entity || ''

  const response = await analyticsDataClient.runReport(report).then((res) => res[0].rows)

  const themes = Object.values(response).map((theme) => ({
    theme: theme.dimensionValues[0].value,
    views: theme.metricValues[0].value,
  }))
  res.status(200).json({ themes })
}
