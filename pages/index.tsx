import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { Exercise, ExercisesProps } from "../interfaces/exercises.interface"
import Hero from "../components/Hero"
import ContentBox from "../components/ContentBox/ContentBox"
import BodypartSelect from "../components/Reusables/BodypartSelect"

const Home: NextPage<ExercisesProps> = (props) => {
  const exercises = props.exercises.data
  const bodyparts = props.bodyparts.data

  return (
    <div className="relative mt-10 ">
      <Head>
        <title>Stresk | Stretch at your Desk, reduce Stress!</title>
      </Head>
      <Hero />
      <ContentBox bodyparts={bodyparts} exercises={exercises} />
      <BodypartSelect bodyparts={bodyparts} />
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
    revalidate: 60,
  }
}

export default Home
