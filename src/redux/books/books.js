const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    category: 'Drama',
    title: 'Family Album',
    author: 'Danielle Steel',
    progress: {
      currentChapter: 'Chapter 2',
      completed: '11',
    },
  },
  {
    id: 2,
    category: 'Horror',
    title: 'The Shinning',
    author: 'Stephen King',
    progress: {
      currentChapter: 'Chapter 7',
      completed: '72',
    },
  },
  {
    id: 3,
    category: 'Tragedy, gothic',
    title: 'Wuthering heights',
    author: 'Emily Brontë',
    progress: {
      currentChapter: 'Chapter 11',
      completed: '98',
    },
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
