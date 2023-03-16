import React, { useEffect, useState } from 'react'
import { useSampleThemes } from '../hooks/sampleData'
import { Theme } from '../interfaces'
import BaseButton from './BaseButton'
import BaseButtons from './BaseButtons'
import CardBoxModal from './CardBoxModal'
import { GetServerSideProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next'

const TableExercises = () => {
  // const { clients } = useSampleThemes()
  const clients = [
    {
      title: 'Ademhalingsoefening',
      subtitle: 'Oefening- 7 minuten',
      rating: '91%',
      intensity: 'gemiddeld',
      theme: 'bewustwording',
      duration: '7 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Ademhalingsoefening%20A_moment_to_relax%20(1).svg?alt=media&token=9caa3065-f1ac-49f9-a187-3f6998aba1d9',
    },
    {
      title: 'Jouw motivatie en drijfveren vinden',
      subtitle: 'Oefening- 40 minuten',
      rating: '83%',
      intensity: 'moeilijk',
      theme: 'keuzevrijheid',
      duration: '40 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Wat%20wil%20ik%20nou%20echt_%20Undraw%20Healthy%20Habit.svg?alt=media&token=69f28674-3f5c-483c-ba93-f9ef04dae1e5',
    },
    {
      title: 'Beargumenteren',
      subtitle: 'Oefening- 30 minuten',
      rating: '87%',
      intensity: 'gemiddeld',
      theme: 'Arbeidsvoorwaardengesprek',
      duration: '30 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Beargumenteer%20Business%20Deal.svg?alt=media&token=8ed9d175-4e20-4b76-a42b-6eea3e6ed0d4',
    },
    {
      title: 'Beginnen met mediteren',
      subtitle: 'Oefening- 15 min',
      rating: '95%',
      intensity: 'gemiddeld',
      theme: 'bewustwording',
      duration: '15 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Beginnen%20met%20mediteren%20Mindfulness.svg?alt=media&token=87c123f3-cbad-4db3-bdfe-51c662b8c58f',
    },
    {
      title: 'De 80/60/40 regel',
      subtitle: 'Oefening- 15 minuten',
      rating: '75%',
      intensity: 'makkelijk',
      theme: 'timemanagement',
      duration: '15 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/80_60_40%20Events.svg?alt=media&token=1efb207d-3a14-43c8-8f60-f4e1be3e82fa',
    },
    {
      title: 'Leren balanceren',
      subtitle: 'Oefening- 40 minuten',
      rating: '85%',
      intensity: 'gemiddeld',
      theme: 'studie-prive-balans',
      duration: '40 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Balans%20studie%20prive%20(undraw%20gravitas)%20-%20aangepast.svg?alt=media&token=ee54c487-723a-4fe9-ac2b-a5bc019b73aa',
    },
    {
      title: 'Leren balanceren',
      subtitle: 'Oefening- 40 minuten',
      rating: '85%',
      intensity: 'gemiddeld',
      theme: 'prestatiedruk',
      duration: '40 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Balans%20studie%20prive%20(undraw%20gravitas)%20-%20aangepast.svg?alt=media&token=ee54c487-723a-4fe9-ac2b-a5bc019b73aa',
    },
    {
      title: 'Ontmoet je innerlijke criticus',
      subtitle: 'Oefening- 45 minuten',
      rating: '78%',
      intensity: 'moeilijk',
      theme: 'identiteit',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Innerlijke%20Criticus%20undraw_cancel_u1it%20(aangepast).svg?alt=media&token=040daf4b-934a-4a6f-914e-4b23b46e26e5',
    },
    {
      title: 'Doe je wat je wilt?',
      subtitle: 'Oefening- 15 minuten',
      rating: '75%',
      intensity: 'makkelijk',
      theme: '',
      duration: '12 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Introductie%20podcast.png?alt=media&token=9e8e9ca4-777b-4415-a04f-7c2f08a3270a',
    },
    {
      title: 'Dopamine detox',
      subtitle: 'Oefening- 1 maand',
      rating: '94%',
      intensity: 'moeilijk',
      theme: 'ritme-en-structuur',
      duration: '50 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Dopamine%20detox%20Reading%20time.svg?alt=media&token=f1aa9ee8-195d-49ca-ab6d-cfefe08466cd',
    },
    {
      title: 'Eat the frog',
      subtitle: 'Oefening-15 minuten',
      rating: '73%',
      intensity: 'moeilijk',
      theme: 'timemanagement',
      duration: '15 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Eat%20the%20Frog%20Start.svg?alt=media&token=3b2271bd-b17b-4a14-bb37-8657117de46f',
    },
    {
      title: 'Een efficiënt begin',
      subtitle: 'Oefening - 20 minuten',
      rating: '75%',
      intensity: 'Gemiddeld',
      theme: '',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Introductie%20podcast.png?alt=media&token=9e8e9ca4-777b-4415-a04f-7c2f08a3270a',
    },
    {
      title: 'Een verzachting van het piekeren',
      subtitle: 'Oefening- 20 minuten',
      rating: '80%',
      intensity: 'gemiddeld',
      theme: '',
      duration: '10 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Een%20verzachting%20van%20het%20piekeren%20(undraw%20meditation)%20-%20aangepast.svg?alt=media&token=1b6af5be-5935-4f36-bc0d-20d95eaf1740',
    },
    {
      title: 'Energie',
      subtitle: 'Oefening - 20 minuten',
      rating: '91%',
      intensity: 'Makkelijk',
      theme: '',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Energie%20(undraw%20uploading)%20-%20aangepast.svg?alt=media&token=e59b1463-28a9-42a9-9cd6-b449286ddda9',
    },
    {
      title: 'De balans opmaken',
      subtitle: 'Oefening- 6 minuten',
      rating: '96%',
      intensity: 'gemiddeld',
      theme: 'bewustwording',
      duration: '6 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Even%20stilstaan%20Summer%20(1).svg?alt=media&token=be6dc8dd-ca7e-4b69-b75f-144280d8d89f',
    },
    {
      title: 'Het fietsstuur',
      subtitle: 'Oefening - 5 min',
      rating: '86%',
      intensity: 'gemiddeld',
      theme: 'slaap',
      duration: '10 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Het%20fietsstuur%20Ride%20a%20bicycle.svg?alt=media&token=92f2f6a4-d732-424c-a0e2-7c70265db61d',
    },
    {
      title: 'Jouw 10 daagse journey',
      subtitle: 'Journey- 10 dagen',
      rating: '92%',
      intensity: 'moeilijk',
      duration: '10 dagen',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/De%20overwinning%20(undraw%20High%20five)%20-%20aangepast.svg?alt=media&token=b00f451d-d335-4a82-8bab-721098fb5167',
    },
    {
      title: 'Jouw studeerplek inrichten',
      subtitle: 'Oefening- 30 minuten',
      rating: '89%',
      intensity: 'gemiddeld',
      theme: 'verantwoord-thuiszitten',
      duration: '30 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Jouw%20werkplek%20inrichten%20Remotely.svg?alt=media&token=18aa1af1-d68d-4545-8f0f-a11791173521',
    },
    {
      title: 'Jouw verborgen talenten',
      subtitle: 'Oefening- 60 minuten',
      rating: '90%',
      intensity: 'gemiddeld',
      theme: '',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Introductie%20podcast.png?alt=media&token=9e8e9ca4-777b-4415-a04f-7c2f08a3270a',
    },
    {
      title: 'Korte beweegpauze',
      subtitle: 'Oefening- 15 minuten',
      rating: '82%',
      intensity: 'gemiddeld',
      theme: 'verantwoord-thuiszitten',
      duration: '15 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Korte%20Beweegpauze%20Pilates.svg?alt=media&token=d47424ad-541b-4c57-ada4-2c8b2148127f',
    },
    {
      title: 'Jezelf krachtig voorstellen',
      subtitle: 'Oefening- 30 minuten',
      rating: '81%',
      intensity: 'gemiddeld',
      theme: 'sollicitatiegesprek',
      duration: '30 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Introductie%20podcast%20(undraw%20hang%20out)%20-%20aangepast.svg?alt=media&token=f9fbb770-2bd6-4d35-a4f3-ca5d9bd84a35',
    },
    {
      title: 'Leer, onderzoek en bedenk alternatieven',
      subtitle: 'Oefening 45 minuten',
      rating: '86%',
      intensity: 'gemiddeld',
      theme: 'Arbeidsvoorwaardengesprek',
      duration: '45 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Leer%2C%20onderzoek%20en%20bedenk%20alternatieven%20Frame%20Multitasking.svg?alt=media&token=1e35aa94-eda4-48c7-a298-621e265a12bb',
    },
    {
      title: 'Morning routine',
      subtitle: 'Oefening- 1 maand',
      rating: '92%',
      intensity: 'moeilijk',
      theme: 'ritme-en-structuur',
      duration: '50 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Ochtend%20routine%20Cup%20of%20tea.svg?alt=media&token=21d66b06-1eb2-4ecf-a4aa-01939a95cf67',
    },
    {
      title: 'De werkgever overtuigen van je skills',
      subtitle: 'Oefening- 45 minuten',
      rating: '82%',
      intensity: 'gemiddeld',
      theme: 'sollicitatiegesprek',
      duration: '45 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Hoe%20overtuig%20je%20de%20werkgever%20Master%20plan.svg?alt=media&token=ced14ace-7a2b-40df-963d-fe1e30ee976e',
    },
    {
      title: 'Perspectief op succes en toeval',
      subtitle: 'Oefening- 30 minuten',
      rating: '85%',
      intensity: 'moeilijk',
      theme: 'keuzevrijheid',
      duration: '30 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Perspectief%20op%20succes%20en%20toeval%20Undraw%20Logic.svg?alt=media&token=22a4203d-ca07-41f5-a4ff-05076a0d416a',
    },
    {
      title: 'Planning en structuur',
      subtitle: 'Oefening- 10 minuten',
      rating: '60%',
      intensity: 'makkelijk',
      theme: '',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Introductie%20podcast.png?alt=media&token=9e8e9ca4-777b-4415-a04f-7c2f08a3270a',
    },
    {
      title: 'Prioriteiten stellen',
      subtitle: 'Oefening- 40 minuten',
      rating: '83%',
      intensity: 'gemiddeld',
      theme: 'studie-prive-balans',
      duration: '40 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Prioriteiten%20stellen.svg?alt=media&token=aeb9b27f-902c-45ce-9c4c-77e868e4ca62',
    },
    {
      title: 'Prioriteiten stellen',
      subtitle: 'Oefening- 40 minuten',
      rating: '83%',
      intensity: 'gemiddeld',
      theme: 'prestatiedruk',
      duration: '40 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Prioriteiten%20stellen.svg?alt=media&token=aeb9b27f-902c-45ce-9c4c-77e868e4ca62',
    },
    {
      title: 'Taken en tijdsduur',
      subtitle: 'Oefening- 20 minuten',
      rating: '80%',
      intensity: 'gemiddeld',
      theme: '',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Introductie%20podcast.png?alt=media&token=9e8e9ca4-777b-4415-a04f-7c2f08a3270a',
    },
    {
      title: 'Verbeter je werkplek',
      subtitle: 'oefening- 100 minuten',
      rating: '70%',
      intensity: 'moeilijk',
      theme: '',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Introductie%20podcast.png?alt=media&token=9e8e9ca4-777b-4415-a04f-7c2f08a3270a',
    },
    {
      title: 'Empathisch communiceren',
      subtitle: 'Oefening- 40 minuten',
      rating: '87%',
      intensity: 'moeilijk',
      theme: 'verbindende-communicatie',
      duration: '40 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Verbindend%20communiceren%20oefening%20Conversation.svg?alt=media&token=b6aa2923-63f6-4d6a-9e00-b10d65b3189d',
    },
    {
      title: 'Waarden, behoeften, doelen',
      subtitle: 'Oefening - 30-40 minuten',
      rating: '88%',
      intensity: 'Gemiddeld',
      theme: '',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Waarden%2C%20behoeften%2C%20doelen%20(undraw%20gravitas)%20-%20aangepast.svg?alt=media&token=26f37f1b-c926-4c6a-a9cc-ca0e313623f9',
    },
    {
      title: 'Onderzoek jouw identiteit',
      subtitle: 'oefening- 30 minuten',
      rating: '75%',
      intensity: 'gemiddeld',
      theme: 'identiteit',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Identiteit%20(undraw%20fingerprint)%20-%20aangepast.svg?alt=media&token=bf18f4e2-a8e7-47bf-8cca-76966b73f232',
    },
    {
      title: 'Yoga oefening: Thuiszitten',
      subtitle: 'Oefening- 15 minuten',
      rating: '96%',
      intensity: 'gemiddeld',
      duration: '15 min',
      imageURL:
        'https://firebasestorage.googleapis.com/v0/b/flowley-uu-f3377.appspot.com/o/Korte%20beweegpauze%20Yoga.svg?alt=media&token=86c0c8fd-a8b5-4712-aa4a-340c9c3b2ae4',
    },
  ]

  const perPage = 5

  const [currentPage, setCurrentPage] = useState(0)

  const clientsPaginated = clients.slice(perPage * currentPage, perPage * (currentPage + 1))

  const numPages = clients.length / perPage

  const pagesList = []

  for (let i = 0; i < numPages; i++) {
    pagesList.push(i)
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {clientsPaginated.map((client: any) => (
            <tr key={client.id}>
              <td data-label="Name">{client.title}</td>
              <td data-label="Company">{client.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <BaseButtons>
            {pagesList.map((page) => (
              <BaseButton
                key={page}
                active={page === currentPage}
                label={page + 1}
                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                small
                onClick={() => setCurrentPage(page)}
              />
            ))}
          </BaseButtons>
          {/* <small className="mt-6 md:mt-0">
            Page {currentPage + 1} of {numPages}
          </small> */}
        </div>
      </div>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch('/api/views-theme')
//   const posts: Object = await res.json()
//   console.log(posts)
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default TableExercises
