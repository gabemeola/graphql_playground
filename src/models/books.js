import { GraphQLObjectType as ObjectType } from 'graphql'
import types from '../types'
import { query } from '../utils/sql'


export async function getBook(id) {
    return query(`SELECT * FROM books WHERE id IN (?)`, [id])
}

export async function getBooks() {
    return query('SELECT * FROM books')
}

// export async function createBook({ title }) {
//
// }

export const bookType = new ObjectType({
    name: 'bookType',
    description: 'A Hogwarts issued book',
    fields: {
        id: {
            type: types.id,
            description: 'Id of the book'
        },
        title: {
            type: types.string,
            description: 'Title of the book',
        },
    }
})