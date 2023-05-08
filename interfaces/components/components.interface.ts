export interface Bodypart {
  id: number
  attributes: {
    bodypart: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

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

export interface ExerciseDropdownProps {
  bodyparts: Bodypart[]
  exercises: Exercise[]
}

export interface ContentBoxProps {
  bodyparts: []
  exercises: []
}

export interface ChipProps {
  attribute: string
  handleSelectedBodyParts: (bodypart: string) => void
}

export type Toggle = "select" | "display"

export type TimeButtonProps = {
  duration: number
  startTimer: (duration: number) => void
}
