/* eslint @typescript-eslint/no-var-requires: "off" */
const { BetaAnalyticsDataClient } = require('@google-analytics/data')

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  },
})

const PROPERTY_ID = '353724991'
const startDate = '7daysAgo'
const endDate = 'today'
const dimesion = 'hostname'

export default async function handler(req, res) {
  const response = await analyticsDataClient.runReport({
    property: `properties/${PROPERTY_ID}`,
    dateRanges: [
      {
        startDate: startDate,
        endDate: endDate,
      },
    ],
    dimensions: [
      {
        name: dimesion,
      },
    ],
  })

  const views = response[0]?.rows[0]?.dimensionValues[0]?.value
  res.status(200).json({ views })
}

// /* eslint @typescript-eslint/no-var-requires: "off" */
// const { BetaAnalyticsDataClient } = require('@google-analytics/data')

// const analyticsDataClient = new BetaAnalyticsDataClient({
//   credentials: {
//     client_email: process.env.CLIENT_EMAIL,
//     private_key: process.env.PRIVATE_KEY,
//   },
// })

// const PROPERTY_ID = '353724991'
// const startDate = '7daysAgo'
// const endDate = 'today'
// const metric = 'screenPageViews'

// export default async function handler(req, res) {
//   const response = await analyticsDataClient
//     .runReport({
//       property: `properties/${PROPERTY_ID}`,
//       dimensions: [{ name: 'pagePathPlusQueryString' }],
//       metrics: [{ name: metric }],
//       dateRanges: [{ startDate: startDate, endDate: endDate }],
//       dimensionFilter: {
//         andGroup: {
//           expressions: [
//             {
//               filter: {
//                 fieldName: 'pagePathPlusQueryString',
//                 stringFilter: { matchType: 'CONTAINS', value: 'thema' },
//               },
//             },
//             {
//               filter: {
//                 fieldName: 'hostName',
//                 stringFilter: {
//                   matchType: 'CONTAINS',
//                   value: 'fontys',
//                 },
//               },
//             },
//           ],
//         },
//       },
//     })
//     .then((res) => res[0].rows)

//   const themes = Object.values(response).map((theme) => ({
//     theme: theme.dimensionValues[0].value,
//     views: theme.metricValues[0].value,
//   }))
//   res.status(200).json({ themes })
// }
