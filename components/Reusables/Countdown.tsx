import { useState } from "react"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import TimeButton from "./TimeButton"

const timerDefault = [15, 10, 5, 0]
const timer30 = [30, 25, 10, 0]
const timer60 = [60, 55, 25, 0]

function Countdown() {
  const [timer, setTimer] = useState({
    active: false,
    duration: 15,
    timings: timerDefault,
  })

  const startTimer = (duration: number) => {
    if (duration === 15) {
      setTimer((prevState) => ({ ...prevState, active: true }))
      setTimeout(() => {
        setTimer({
          active: false,
          duration: 15,
          timings: timerDefault,
        })
      }, 15000)
    } else if (duration === 30) {
      setTimer({
        active: true,
        duration: duration,
        timings: timer30,
      })
      setTimeout(() => {
        setTimer({
          active: false,
          duration: 15,
          timings: timerDefault,
        })
      }, 30000)
    } else if (duration === 45) {
      setTimer({
        active: true,
        duration: duration,
        timings: [45, 40, 15, 0],
      })
      setTimeout(() => {
        setTimer({
          active: false,
          duration: 15,
          timings: timerDefault,
        })
      }, 45000)
    } else if (duration === 60) {
      setTimer({
        active: true,
        duration: duration,
        timings: timer60,
      })
      setTimeout(() => {
        setTimer({
          active: false,
          duration: 15,
          timings: timerDefault,
        })
      }, 60000)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      {!timer.active && (
        <>
          <h3 className="text-neutral-500 font-bold">How many seconds?</h3>
          <div
            className="flex
       gap-2">
            <TimeButton duration={15} startTimer={startTimer} />
            <TimeButton duration={30} startTimer={startTimer} />
            <TimeButton duration={45} startTimer={startTimer} />
            <TimeButton duration={60} startTimer={startTimer} />
          </div>
        </>
      )}

      {timer.active && (
        <div className="mt-2 text-purple-400 font-bold">
          <CountdownCircleTimer
            isPlaying
            duration={timer.duration}
            colors={["#f3e8ff", "#d8b4fe", "#a855f7", "#6b21a8"]}
            colorsTime={timer.timings}
            size={50}>
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
      )}
    </div>
  )
}

export default Countdown
