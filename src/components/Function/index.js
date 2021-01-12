import { Alert } from 'react-native'

export const objectIsNull = (obj) => {
  if (obj === undefined || obj === null) {
    return true
  } else {
    return false
  }
}

export const arrayIsEmpty = (arr) => {
  if (!objectIsNull(arr)) {
    if (arr.length === 0) {
      return true
    } else {
      return false
    }
  } else {
    return true
  }
}

export const stringIsEmpty = (str) => {
  if (str === '') {
    return true
  } else {
    return false
  }
}

export const compare = (a, b) => {
  const titleA = a.title.toUpperCase()
  const titleB = b.title.toUpperCase()

  let comparison = 0
  if (titleA > titleB) {
    comparison = 1
  } else if (titleA < titleB) {
    comparison = -1
  }
  return comparison
}

export const formatTime = (time) => {
  if (time < 10) return '0' + time
  return time
}

export const alert = (message, onPress) => {
  Alert.alert(
    'Notification',
    message,
    [
      !objectIsNull(onPress) && {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK', onPress: onPress },
    ],
    { cancelable: false },
  )
}
