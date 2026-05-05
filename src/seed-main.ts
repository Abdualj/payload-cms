import 'dotenv/config'
import { getPayload } from 'payload'
import config from '@payload-config'
import { seedKirjoituskonekauppa } from './seed-kirjoituskonekauppa'

const seed = async (): Promise<void> => {
  const payload = await getPayload({ config })

  console.log('Seeding database...')
  await seedKirjoituskonekauppa(payload)
  console.log('Seeding complete!')

  process.exit(0)
}

seed()
