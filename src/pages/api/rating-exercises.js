/* eslint @typescript-eslint/no-var-requires: "off" */
import admin from '@/lib/firebase'

export default async function handler(req, res) {
  const db = admin.database()
  const ref = db.ref('tools')

  ref.once('value', (snap) => {
    // const objectMap = (obj, fn) =>
    //   Object.fromEntries(
    //     Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])
    //   );
    // const list = ref.
    // const list = Object.entries(snap.val()).map((tool) => tool);
    // res.status(200).send(list);
    // const list = [...snap.val()];
    const tools = Object.values(snap.val()).map((tool) => ({
      title: tool.title,
      subtitle: tool.subtitle,
      rating: tool.averageRating,
      intensity: tool.intensity,
      theme: tool.themeId,
      duration: tool.duration,
      imageURL: tool.imageURL,
    }))
    res.status(200).json(tools)
  })

  // const que = query(ref(db.ref("/")))

  // get(child)

  // ref.once(
  //   "value",
  //   (snapshot) => {
  //     const data = snapshot.val();
  //     // const exercises = data.tools;

  //     res.status(200).send(data);
  //     console.log(data);
  //   },
  //   (error) => {
  //     res.status(200).json({ error });
  //     console.error(error);
  //   }
  // );
}
