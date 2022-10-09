import { Dispatch, SetStateAction } from "react"

export interface ExercisesProps {
  exercises: {
    data: []
  }
  bodyparts: {
    data: []
  }
}

export interface Exercise {
  id: string | number
  attributes: {
    bodyparts: {
      data: [
        {
          attributes: {
            bodypart: string
          }
          id: string | number
        }
      ]
    }
    details: string
    excerpt: string
    image: {
      data: {
        id: string | number
        attributes: {
          url: string
        }
      }
    }
    name: string
    slug: string
    video: {
      data: {
        id: string | number
        attributes: {
          url: string
        }
      }
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

export interface ContentBoxProps {
  bodyparts: []
  exercises: []
}

export interface BodypartProps {
  bodyparts: []
  selectedBodyParts: string[]
  setSelectedBodyParts: Dispatch<SetStateAction<string[]>>
  handleSelectedBodyParts: (bodypart: string) => void
  handleGo: () => void
}

export interface ChipProps {
  attribute: string
  handleSelectedBodyParts: (bodypart: string) => void
}

export type Toggle = "select" | "display"
