import { Dispatch, SetStateAction } from "react"

export interface ExercisesProps {
  exercises: {
    data: []
  }
  bodyparts: {
    data: []
  }
}

// export interface Exercise {
//   id: string | number
//   attributes: {
//     bodyparts: {
//       data: [
//         {
//           attributes: {
//             bodypart: string
//           }
//           id: string | number
//         }
//       ]
//     }
//     details: string
//     excerpt: string
//     image: {
//       data: {
//         id: string | number
//         attributes: {
//           formats: any
//           url: string
//         }
//       }
//     }
//     name: string
//     slug: string
//     video: {
//       data: {
//         id: string | number
//         attributes: {
//           url: string
//         }
//       }
//     }
//   }
// }

export interface Exercise {
  id: number
  attributes: {
    name: string
    slug: string
    details: string
    excerpt: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    image: {
      data: {
        id: number
        attributes: {
          name: string
          alternativeText: string | null
          caption: string | null
          width: number
          height: number
          formats: {
            [format: string]: {
              ext: string
              url: string
              hash: string
              mime: string
              name: string
              path: string | null
              size: number
              width: number
              height: number
              provider_metadata: {
                public_id: string
                resource_type: string
              }
            }
          }
          hash: string
          ext: string
          mime: string
          size: number
          url: string
          previewUrl: string | null
          provider: string
          provider_metadata: {
            public_id: string
            resource_type: string
          }
          createdAt: string
          updatedAt: string
        }
      }
    }
    video: {
      data: {
        id: number
        attributes: {
          name: string
          alternativeText: string | null
          caption: string | null
          width: number | null
          height: number | null
          formats: null
          hash: string
          ext: string
          mime: string
          size: number
          url: string
          previewUrl: string
          provider: string
          provider_metadata: {
            public_id: string
            resource_type: string
          }
          createdAt: string
          updatedAt: string
        }
      }
    }
    bodyparts: {
      data: Bodypart[]
    }
  }
}

export interface Bodypart {
  id: string | number
  attributes: {
    bodypart: string
  }
}

export interface ExerciseProps {
  exercise: Exercise
}

export interface BodypartProps {
  bodyparts: []
  selectedBodyParts: string[]
  handleSelectedBodyParts: (bodypart: string) => void
  handleGo: () => void
}

export interface RandomStretchProps extends ExerciseProps {
  handleGo: () => void
  resetSelectedBodyParts: () => void
}
