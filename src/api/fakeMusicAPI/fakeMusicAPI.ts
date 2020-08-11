import faker from 'faker'

import { ISong } from './types'

const sleep = (timeout: number) =>
  new Promise(resolve => {
    setTimeout(resolve, timeout)
  })

const getSong = (): ISong => ({
  id: faker.random.uuid(),
  name: faker.random.words(2),
  album: faker.random.words(2),
  artist: faker.name.firstName() + faker.name.lastName(),
  duration: `${faker.random.number(7)} : ${faker.random.number(59)}`
})

export const fetchSongList = async (): Promise<Array<ISong>> => {
  await sleep(faker.random.number(3500) + 1200)

  const response = []

  for (let i = 0; i < 10; i++) {
    response.push(getSong())
  }
  return response
}
