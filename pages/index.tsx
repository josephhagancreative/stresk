import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import Card from "../components/Reusables/Card"
import {
  Exercise,
  ExercisesProps,
} from "../interfaces/exercises/exercises.interface"
import Hero from "../components/Hero"
import ContentBox from "../components/ContentBox/ContentBox"

const Home: NextPage<ExercisesProps> = (props) => {
  const exercises = props.exercises.data
  const bodyparts = props.bodyparts.data
  // console.log(exercises)
  console.log(bodyparts)
  console.log(exercises)

  return (
    <div className="relative mt-10 ">
      <Head>
        <title>Stresk | Stretch at your Desk, reduce Stress!</title>
      </Head>
      <Hero />
      <ContentBox bodyparts={bodyparts} exercises={exercises} />
      <ul className="flex justify-center gap-3 px-6 py-6">
        {/* {exercises && } */}
        {exercises.map((exercise: Exercise) => (
          <Card key={exercise.id} exercise={exercise} />
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: "http://localhost:8888/graphql",
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query {
        exercises {
          data {
            id
            attributes {
              name
              slug
              excerpt
              image {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
              video {
                data {
                  id
                  attributes {
                    url
                  }
                }
              }
              bodyparts {
                data {
                  id
                  attributes {
                    bodypart
                  }
                }
              }
              details
            }
          }
        }
        bodyparts {
          data {
            id
            attributes {
              bodypart
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      exercises: data.exercises,
      bodyparts: data.bodyparts,
    },
  }
}

export default Home
