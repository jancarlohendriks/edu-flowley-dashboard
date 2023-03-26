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
const dimension = 'linkUrl'
const metric = 'eventCount'

export default async function handler(req, res) {
  const entity = req.query.entity || ''
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
    dimensions: [
      {
        name: dimension,
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

  const outflow = response[0]?.rows?.flatMap((row, i) =>
    row.dimensionValues[0].value !== ''
      ? { id: i, link: row?.dimensionValues[0]?.value, count: row?.metricValues[0]?.value }
      : []
  )
  res.status(200).json({ outflow })
  // const outflow = response[0].rows
  //   .flatMap((x) => x.dimensionValues.map((y) => y.value))
  //   .filter((z) => z !== '')
  // res.status(200).json({ outflow })
}
