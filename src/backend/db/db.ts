import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { User } from '../types'

type Data = {
    users: User[]
}

const adapter = new JSONFile<Data>('db.json')

const defaultData: Data = {users: []}
const db = new Low<Data>(adapter, defaultData)

await db.read()
db.data ||= defaultData

export default db