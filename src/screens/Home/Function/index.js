import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import moment from 'moment'
import { showForeground } from '../../../firebase'
import { arrayIsEmpty, objectIsNull, formatTime, compareMoment } from '../../../components/Function'

export const countDaysInYear = () => {
  const date = new Date()

  if (
    (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) ||
    date.getFullYear() % 400 === 0
  )
    return 366
  return 365
}
export const countDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate()
}
export const formatDateMonth = (date) => {
  return date < 10 ? '0' + date : date
}

export const handleAlertRatio = (ratio) => {
  let text = ''
  if (ratio === 0) {
    text = 'Bạn chưa hoàn thành thói quen nào!'
  } else if (ratio > 0 && ratio <= 40) {
    text = 'Bạn hãy hoàn thành thêm một vài thói quen nữa!'
  } else if (ratio > 40 && ratio < 60) {
    text = 'Bạn đã hoàn thành được 50% rồi đó!'
  } else if (ratio >= 60 && ratio < 100) {
    text = 'Bạn gần hoàn thành hết rồi, hãy tiếp tục nào!'
  } else if (ratio === 100) {
    text = 'Amazing. Good job!'
  } else {
    text = ''
  }
  return text
}

export const getUnique = (arr, comp) => {
  const unique = arr
    .map((e) => e[comp])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e])

  return unique
}

export const calRatio = (habits, daySelect) => {
  const listHabitInDay = habits.filter((val) => {
    return val.days.includes(moment(daySelect).format('dddd'))
  })

  const listHabitComplete = []
  listHabitInDay.map((v) => {
    if (!objectIsNull(v.checkins)) {
      v.checkins.map((checkin) => {
        if (compareMoment(new Date(checkin), daySelect) === 0) {
          listHabitComplete.push(v)
        }
      })
    }
  })

  return Math.round((getUnique(listHabitComplete, 'id').length / listHabitInDay.length) * 100)
}

const datesAreOnSameDay = (first, second) =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate()

export const getNotification = (curTime) => {
  const user = auth().currentUser
  if (user) {
    database()
      .ref(`/users/${user.uid}/habits`)
      .once('value')
      .then((snapshot) => {
        if (!objectIsNull(snapshot.val())) {
          const listHabit = Object.values(snapshot.val()).filter((item, index) => {
            if (!objectIsNull(item) && !arrayIsEmpty(item.days)) {
              if (
                item.days.includes(moment().format('dddd')) &&
                checkTypeHabit(
                  item.habitType,
                  item.days,
                  item.weeks,
                  item.months,
                  item.checkins,
                  item.startDate,
                  moment().format('YYYY-MM-DD'),
                )
              ) {
                return true
              }
            }
          })
          const listTime = []

          for (item of listHabit) {
            if (objectIsNull(item.checkins)) {
              listTime.push(item.title)
            } else if (!objectIsNull(item.checkins)) {
              if (arrayIsEmpty(item.checkins.filter((val) => compareMoment(val, moment()) === 0))) {
                listTime.push(item.title)
              }
            }
          }

          if (!arrayIsEmpty(listTime)) {
            showForeground({
              notification: {
                title: 'Các thói quen chưa làm của bạn hôm nay',
                message: `Bao gồm ${listTime.length} thói quen: ${listTime.join(', ')}`,
                date: new Date(curTime),
              },
            })
          }
        }
      })
  }
}

export const checkTypeHabit = (habitType, days, weeks, months, checkins, startDate, daySelect) => {
  if (habitType !== 'Once') {
    if (
      compareMoment(new Date(startDate).toJSON(), daySelect) === 0 ||
      compareMoment(new Date(startDate).toJSON(), daySelect) === -1
    ) {
      if (habitType === 'Daily') {
        return days.includes(moment(daySelect).format('dddd'))
      } else if (habitType === 'Weekly') {
        const chekins = !objectIsNull(checkins) ? checkins : []
        if (weeks - chekins.length === 0) {
          for (let i = 0; i < chekins.length; i++) {
            if (compareMoment(chekins[i], daySelect) === 0) {
              return true
            }
          }
          return false
        } else {
          return true
        }
      } else {
        if (compareMoment(moment().endOf('month'), daySelect) === 0 && months === 'End') {
          return true
        } else if (
          compareMoment(moment(daySelect).startOf('month'), daySelect) === 0 &&
          months === 'Begin'
        ) {
          return true
        } else if (
          compareMoment(moment(daySelect).endOf('month') / 2, daySelect) === 0 &&
          months === 'Middle'
        ) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    if (compareMoment(new Date(startDate).toJSON(), daySelect) === 0) {
      return days.includes(moment(daySelect).format('dddd'))
    } else {
      return false
    }
  }
}
