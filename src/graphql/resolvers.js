import { books } from '../data/books'
import { authors } from '../data/authors'
import { reviews } from '../data/reviews'

export const resolvers = {
    Query: {
        ping() {
            return 'pong'
        },
        books() {
            return books
        },
        authors() {
            return authors
        },
        reviews() {
            return reviews
        }
    },
    Book: {
        author: ({author}) => {

            return authors.find(a => {
                return a.id === author
            })
        } 
    },
    Author: {
        books(parent) {
            return books.filter(bk => {
                return bk.author == parent.id
            })
        }
    },
    Review: {
        book(parent) {
            return books.filter(bk => {
                return bk.id == parent.book
            })
        }
    }
}