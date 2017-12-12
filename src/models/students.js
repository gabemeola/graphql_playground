import { GraphQLObjectType as ObjectType } from 'graphql'
import { escape } from 'mysql'
import types from '../types'
import { query } from '../utils/sql'


export async function getStudent(id) {
    return query('SELECT * FROM students WHERE id IN (?)', [id])
}

export async function getStudents() {
    return query('SELECT * FROM students')
}

export async function setStudent({ id = null, name }) {
    const esId = escape(id)
    const esName = escape(name)

    return query(`INSERT INTO students (id, name) VALUES(${esId}, ${esName}) ON DUPLICATE KEY UPDATE name="${esName}"`)
        .then((res) => ({
            id: res.insertId || esId,
            name: esName,
        }))
}

export const studentType = new ObjectType({
    name: 'studentType',
    description: 'A Hogwarts Student',
    fields: {
        id: {
            type: types.id,
            description: 'Id of the student'
        },
        name: {
            type: types.string,
            description: 'Full name of the student',
        }
    }
})