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
