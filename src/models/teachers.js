import { GraphQLObjectType as ObjectType } from 'graphql'
import { query } from '../utils/sql';
import types from '../types'


export async function getTeacher(id) {
    return query(`SELECT * FROM teachers WHERE id IN (?)`, [id])
}

export async function getTeachers() {
    return query('SELECT * FROM teachers')
}

// export async function createTeacher({ name }) {
//
// }

export const teacherType = new ObjectType({
    name: 'teacherType',
    description: 'A Hogwarts Teacher',
    fields: {
        id: {
            type: types.id,
            description: 'Id of the teacher'
        },
        name: {
            type: types.string,
            description: 'Full name of the teacher',
        },
    }
})