import {
  arrayIsEmpty,
  compareMoment,
  objectIsNull,
  stringIsEmpty,
} from '../../../components/Function'
import { showForeground } from '../../../firebase'
import { countDaysInYear } from '../../Home/Function'
import moment from 'moment'

export const checkConditionCreateHabit = (value, type) => {
  if (type !== 'Once') {
    if (!stringIsEmpty(value.habitType)) {
      if (value.habitType === 'Daily') {
        if (!arrayIsEmpty(value.days) && !arrayIsEmpty(value.times)) {
          return true
        } else {
          return false
        }
      } else if (value.habitType === 'Weekly') {
        if (!stringIsEmpty(value.weeks) && !arrayIsEmpty(value.times)) {
          return true
        } else {
          return false
        }
      } else {
        if (!stringIsEmpty(value.months) && !arrayIsEmpty(value.times)) {
          return true
        } else {
          return false
        }
      }
    } else {
      return false
    }
  } else {
    return !arrayIsEmpty(value.times)
  }
}

export const checkConditionUpdateHabit = (value, type) => {
  if (type !== 'Once') {
    if (type === 'Daily') {
      if (!arrayIsEmpty(value.days) && !arrayIsEmpty(value.times) && !stringIsEmpty(value.title)) {
        return true
      } else {
        return false
      }
    } else if (type === 'Weekly') {
      if (
        !stringIsEmpty(value.weeks) &&
        !arrayIsEmpty(value.times) &&
        !stringIsEmpty(value.title)
      ) {
        return true
      } else {
        return false
      }
    } else {
      if (
        !stringIsEmpty(value.months) &&
        !arrayIsEmpty(value.times) &&
        !stringIsEmpty(value.title)
      ) {
        return true
      } else {
        return false
      }
    }
  } else {
    return !arrayIsEmpty(value.times) && !stringIsEmpty(value.title)
  }
}

export const notificationHabit = (times, days, title, habitType, startDate) => {
  if (habitType === 'Once') {
    times.forEach((time) => {
      const timeDif = new Date(time).getTime() - new Date(Date.now()).getTime()
      showForeground({
        notification: {
          title,
          message: `Đã tới giờ "${title}" rồi`,
          date: new Date(Date.now() + Math.abs(timeDif)),
          repeat: null,
        },
      })
    })
  } else if (habitType === 'Weekly') {
    times.forEach((time) => {
      const timeDif = new Date(time).getTime() - new Date(Date.now()).getTime()
      showForeground({
        notification: {
          title,
          message: `Đã tới giờ "${title}" rồi`,
          date: new Date(Date.now() + Math.abs(timeDif)),
          repeat: 'day',
        },
      })
    })
  } else if (habitType === 'Daily' || habitType === 'Monthly') {
    for (let i = 1; i <= countDaysInYear(); i++) {
      if (days.includes(moment().dayOfYear(i).format('dddd'))) {
        times.forEach((time) => {
          moment().dayOfYear(i).set('hour', new Date(time).getHours())
          moment().dayOfYear(i).set('minute', new Date(time).getMinutes())
          moment().dayOfYear(i).set('second', new Date(time).getSeconds())
          const timeDif =
            new Date(moment().dayOfYear(i).format()).getTime() - new Date(Date.now()).getTime()

          showForeground({
            notification: {
              title,
              message: `Đã tới giờ "${title}" rồi`,
              date: new Date(Date.now() + Math.abs(timeDif)),
              repeat: null,
            },
          })
        })
      }
    }
  }
}
