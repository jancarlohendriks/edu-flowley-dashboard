/* eslint @typescript-eslint/no-var-requires: "off" */
import admin from '@/lib/firebase'
import { groupItemsByThemeId } from '@/lib/groupItemsByThemeId'

const getGrades = (list) => Object.values(list).map((item) => item.grade)
const calcAverage = (list) => list.reduce((a, b) => a + b, 0) / list.length || 0

export default async function handler(req, res) {
  try {
    const db = admin.database()
    const ref = db.ref('entities')
    const queryEntity = req.query.entity || 'fontys'

    await ref.once('value', (snap) => {
      const entity = snap.val()[queryEntity]
      const allRatings = Object.values(entity.ratings)
      const ratingsByGroup = groupItemsByThemeId(allRatings)

      const ratings = Object.entries(ratingsByGroup)
        .map((theme) => ({
          id: theme[0],
          theme: theme[0],
          avgRating: calcAverage(getGrades(theme[1])),
        }))
        .filter((theme) => theme.theme !== 'undefined')

      res.status(200).json(ratings)
    })
  } catch (e) {
    res.status(400).end()
  }
}
