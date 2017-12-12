import {
    GraphQLSchema as Schema,
    GraphQLObjectType as ObjectType,
    GraphQLNonNull as NonNull,
    GraphQLList as List,
} from 'graphql';
import types from '../../types';
import { teacherType, getTeachers, getTeacher } from '../../models/teachers'
import { studentType, getStudents, getStudent, setStudent } from '../../models/students'
import { bookType, getBooks, getBook } from '../../models/books'
import { classType, getClasses } from '../../models/classes'
import singleton from '../../utils/singleton';


const queryType = new ObjectType({
    name: 'QueryType',
    description: 'The root query type',
    fields: {
        teacher: {
            type: teacherType,
            args: {
                id: {
                    type: new NonNull(types.id),
                    description: 'This id of the teacher'
                }
            },
            resolve: (_, args) => singleton(getTeacher(args.id))
        },
        teachers: {
            type: new List(teacherType),
            resolve: getTeachers,
        },
        student: {
            type: studentType,
            args: {
                id: {
                    type: new NonNull(types.id),
                    description: 'This id of the student'
                }
            },
            resolve: (_, args) => singleton(getStudent(args))
        },
        students: {
            type: new List(studentType),
            resolve: getStudents,
        },
        book: {
            type: teacherType,
            args: {
                id: {
                    type: new NonNull(types.id),
                    description: 'This id of the book'
                }
            },
            resolve: (_, args) => singleton(getBook(args.id))
        },
        books: {
            type: new List(bookType),
            resolve: getBooks,
        },
        classes: {
            type: new List(classType),
            resolve: getClasses,
        }
    }
})



const mutationType = new ObjectType({
    name: 'Mutation',
    description: 'Root Mutation type',
    fields: {
        setStudent: {
            type: studentType,
            description: 'Create or update a student\'s info',
            args: {
                id: {
                    type: types.id,
                    description: 'Student ID for updating student info'
                },
                name: {
                    type: new NonNull(types.string),
                    description: 'Student\'s full name'
                },
            },
            resolve: (_, args) => setStudent(args)
        }
    }
})

export default new Schema({
    query: queryType,
    mutation: mutationType,
})