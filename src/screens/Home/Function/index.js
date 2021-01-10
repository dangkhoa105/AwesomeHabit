import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import { showForeground } from '../../../firebase'
import { arrayIsEmpty, objectIsNull } from '../../../components/Function'

export const countDaysInYear = () => {
  const date = new Date()

  if (
    (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) ||
    date.getFullYear() % 400 === 0
  )
    return 366
  return 365
}

export const handleAlertRatio = (ratio) => {
  let text = ''
  if (ratio === 0) {
    text = 'You have not made any plans yet!'
  } else if (ratio > 0 && ratio <= 40) {
    text = 'You have made a few plans already!'
  } else if (ratio > 40 && ratio < 60) {
    text = 'You have come half way, fighting!'
  } else if (ratio >= 60 && ratio < 100) {
    text = "You're almost done, go ahead!"
  } else if (ratio === 100) {
    text = 'Amazing. Good job!'
  } else {
    text = ''
  }
  return text
}

export const calRatio = (habits) => {
  const listHabitComplete = habits.filter((val) => {
    return val.check === true
  })

  return Math.round(((listHabitComplete.length * 100) / habits.length) * 100) / 100
}

const { uid } = auth().currentUser

export const getNotification = (curTime) => {
  let habits = []
  let listTime = []
  database()
    .ref(`/users/${uid}/habits`)
    .once('value')
    .then((snapshot) => {
      if (!objectIsNull(snapshot.val())) {
        habits = Object.values(snapshot.val())
        const listHabit = habits.filter((item) => !item.check)

        listHabit.map((item) => {
          item.times.map((i) => {
            if (curTime === i + ':00') {
              listTime.push(item.title)
            }
          })
        })

        if (!arrayIsEmpty(listTime)) {
          showForeground({
            notification: {
              title: 'Your habits for today',
              message: `remaining ${listTime.length} habits: ${listTime.join(', ')}`,
              date: new Date(),
            },
          })
        }
      }
    })
}