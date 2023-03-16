/* eslint @typescript-eslint/no-var-requires: "off" */
import admin from '@/lib/firebase'

const getGrades = (list) => Object.values(list).map((item) => item.grade)

const calcAverage = (list) => list.reduce((a, b) => a + b, 0) / list.length || 0

const groupItemsByThemeId = (list) =>
  list.reduce((groups, item) => {
    const themeId = groups[item.themeId] || []
    themeId.push(item)
    groups[item.themeId] = themeId
    return groups
  }, {})

const groupItemsByToolId = (list) =>
  list.reduce((groups, item) => {
    const toolId = groups[item.toolId] || []
    toolId.push(item)
    groups[item.toolId] = toolId
    return groups
  }, {})

export default async function handler(req, res) {
  const db = admin.database()
  const ref = db.ref('entities')

  ref.once('value', (snap) => {
    const entity = snap.val()[req.query.entity]

    if (entity) {
      const allRatings = Object.values(entity.ratings)
      const ratingsByGroup = groupItemsByThemeId(allRatings)

      const ratings = Object.entries(ratingsByGroup)
        .map((theme) => ({
          theme: theme[0],
          avgRating: calcAverage(getGrades(theme[1])),
        }))
        .filter((theme) => theme.theme !== 'undefined')

      res.status(200).json(ratings)
    }

    res.status(200).json({ error: 'no entity found, add ?entity=ENTITY_NAME' })
  })
}

// import admin from "@/lib/firebase";

// export default async function handler(req, res) {
//   const db = admin.database();
//   const ref = db.ref("entities");

//   ref.once("value", (snap) => {
//     const entity = snap.val()[req.query.entity];

//     const ratings = Object.values(entity.ratings).map((rating) => rating.grade);

//     const avgOfRatings =
//       ratings.reduce((a, b) => a + b, 0) / ratings.length || 0;

//     // res.status(200).json(avgOfRatings);
//     res.status(200).json(snap.val());
//   });
// }
