import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import {
  Exercise,
  ExercisesProps,
} from "../interfaces/exercises/exercises.interface"
import Hero from "../components/Hero"
import ContentBox from "../components/ContentBox/ContentBox"
import SuggestedStretches from "../components/SuggestedStretches"

const Home: NextPage<ExercisesProps> = (props) => {
  const exercises = props.exercises.data
  const bodyparts = props.bodyparts.data

  console.log(exercises)

  return (
    <div className="relative mt-10 ">
      <Head>
        <title>Stresk | Stretch at your Desk, reduce Stress!</title>
      </Head>
      <Hero />
      <ContentBox bodyparts={bodyparts} exercises={exercises} />
      <SuggestedStretches />
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
  }
}

export default Home
