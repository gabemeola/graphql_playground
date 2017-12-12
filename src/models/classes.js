import { GraphQLObjectType as ObjectType, GraphQLList as List, } from 'graphql'
import types from '../types'
import { query } from '../utils/sql'
import { teacherType, getTeacher } from './teachers';
import { studentType, getStudent } from './students';
import { bookType, getBook } from './books';


export async function getClass(id) {
    return query(`SELECT * FROM classes WHERE id IN (?)`, [id])
}

export async function getClasses() {
    return query('SELECT * FROM classes')
}

// export async function createClass({ title }) {
//
// }

export const classType = new ObjectType({
    name: 'classType',
    description: 'A Hogwarts Class',
    fields: {
        id: {
            type: types.id,
            description: 'Id of the class'
        },
        name: {
            type: types.string,
            description: 'Name of the class',
        },
        teachers: {
            type: new List(teacherType),
            description: 'Instructors for this class',
            resolve: (parent) => getTeacher(parent.teacher_ids.split(','))
        },
        books: {
            type: new List(bookType),
            description: 'Required Books for this class',
            resolve: (parent) => getBook(parent.required_book_ids.split(','))
        },
        students: {
            type: new List(studentType),
            description: 'Students enrolled in this class',
            resolve: (parent) => getStudent(parent.enrolled_student_ids.split(','))
        },
    }
})