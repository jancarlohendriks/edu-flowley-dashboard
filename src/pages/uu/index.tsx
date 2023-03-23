import { GetServerSideProps } from 'next'
import Dashboard from '@/components/Dashboard'

const Fontys = (props: any) => {
  return <Dashboard props={props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const entity = 'fontys'

  const v = await fetch(`http://${process.env.HOST}/api/views-platform`)
  const views: any = await v.json()

  const b = await fetch(`http://${process.env.HOST}/api/bounce-rate`)
  const bounce: any = await b.json()

  const e = await fetch(`http://${process.env.HOST}/api/engagement`)
  const engagement: any = await e.json()

  const t = await fetch(`http://${process.env.HOST}/api/views-theme`)
  const themes: any = await t.json()

  return {
    props: {
      views,
      bounce,
      engagement,
      themes,
      entity,
    },
  }
}

export default Fontys
