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
