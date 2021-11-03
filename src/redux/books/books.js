import * as API from '../../utils/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_BOOKS = 'bookStore/books/SET_BOOKS';

const initialState = [
  {
    item_id: 'mock-1',
    category: 'Drama',
    title: 'Family Album',
    author: 'Danielle Steel',
    progress: {
      currentChapter: 'Chapter 2',
      completed: '11',
    },
  },
  {
    item_id: 'mock-2',
    category: 'Horror',
    title: 'The Shinning',
    author: 'Stephen King',
    progress: {
      currentChapter: 'Chapter 7',
      completed: '72',
    },
  },
  {
    item_id: 'mock-3',
    category: 'Tragedy, gothic',
    title: 'Wuthering heights',
    author: 'Emily Brontë',
    progress: {
      currentChapter: 'Chapter 11',
      completed: '98',
    },
  },
];

API.createApp();

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const setBooks = (payload) => ({
  type: SET_BOOKS,
  payload,
});

export const createBook = (book) => async (dispatch) => {
  const isCreated = await API.createBook(book);
  if (isCreated) {
    dispatch(addBook(book));
  }
};

export const loadBooks = () => async (dispatch) => {
  const books = await API.getBooks();

  if (books) {
    dispatch(setBooks(books));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
        author: 'Author not set',
        progress: {
          currentChapter: 'Introduction',
          completed: '0',
        },
      }];
    case SET_BOOKS: {
      const saved = Object.entries(action.payload).map(([key, value]) => {
        const [book] = value;
        return {
          item_id: key,
          ...book,
          author: 'Author not set',
          progress: {
            currentChapter: 'Introduction',
            completed: '0',
          },
        };
      });

      return state.concat(saved);
    }
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    default:
      return state;
  }
};

export default reducer;
