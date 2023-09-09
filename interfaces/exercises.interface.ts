import { Dispatch, SetStateAction } from "react"
import { ReactElement } from "react-markdown/lib/react-markdown"

export interface ExercisesProps {
  exercises: {
    data: []
  }
  bodyparts: {
    data: []
  }
}

export interface Exercise {
  name: string | undefined
  data: any
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
  id: number
  attributes: {
    bodypart: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface ExerciseDropdownProps {
  bodyparts: Bodypart[]
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
export interface DisplayStretchProps extends ExerciseProps {
  backArrowOnClick: () => void
  bigButtonOnClick: () => void
  buttonText: string
  buttonIcon: ReactElement
}

// Components Types
export interface ContentBoxProps {
  bodyparts: []
  exercises: []
}

export interface ChipProps {
  attribute: string
  handleSelectedBodyParts: (bodypart: string) => void
}

export interface PillProps {
  name: string
  route: number
}

export interface BigButtonProps {
  handleGo: () => void
  text: string
  icon: ReactElement
}

export interface OutlineButtonProps {
  text: string
  icon: ReactElement
  onClick: () => void
}

export type Toggle = "select" | "display"

export type TimeButtonProps = {
  duration: number
  startTimer: (duration: number) => void
}
