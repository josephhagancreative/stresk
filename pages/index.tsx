import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
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
