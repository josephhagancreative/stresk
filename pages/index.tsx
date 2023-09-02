import type { GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import Head from "next/head"
import { Exercise, ExercisesProps } from "../interfaces/exercises.interface"
import Hero from "../components/Hero"
import ContentBox from "../components/ContentBox/ContentBox"
import SuggestedStretches from "../components/SuggestedStretches"

const Home: NextPage<ExercisesProps> = (props) => {
  const exercises = props.exercises.data
  const bodyparts = props.bodyparts.data

  const router = useRouter()

  const handleClick = () => {
    router.push("/contact")
  }

  return (
    <div className="relative mt-10 ">
      <Head>
        <title>Stresk | Stretch at your Desk, reduce Stress!</title>
      </Head>
      <Hero />
      <ContentBox bodyparts={bodyparts} exercises={exercises} />
      <button onClick={handleClick}>Hello</button>
      <SuggestedStretches bodyparts={bodyparts} exercises={exercises} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const [exercisesRes, bodypartsRes] = await Promise.all([
    fetch(
      "https://stresk-strapi-cloudinary-ii.onrender.com/api/exercises?populate=*"
    ),
    fetch("https://stresk-strapi-cloudinary-ii.onrender.com/api/bodyparts"),
  ])

  const [exercises, bodyparts] = await Promise.all([
    exercisesRes.json(),
    bodypartsRes.json(),
  ])

  return {
    props: {
      exercises,
      bodyparts,
    },
    revalidate: 3600,
  }
}

export default Home
