export const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

const getRandomDay = () => Math.ceil(Math.random() * 365)
const getRandomValue = () => Math.round(Math.random() * 8000) / 100
export const populate = (count) => {
  const data = []

  data.push({
    value: getRandomValue(),
    date: new Date(2015, 0, 1),
  })

  data.push({
    value: getRandomValue(),
    date: new Date(2015, 0, 365),
  })

  for (let i = 0; i < count; i++) {
    data.push({
      value: getRandomValue(),
      date: new Date(2015, 0, getRandomDay()),
    })
  }
  return data.sort((a, b) => a.date - b.date)
}
