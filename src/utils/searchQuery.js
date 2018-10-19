import USERS_LIST from '../constants/usersList';

const authors = USERS_LIST.join('+author:');
const createdDate = '2018-09-30T10%3A00%3A00%2B00%3A00..2018-11-01T12%3A00%3A00%2B00%3A00';
const quantityPerPage = '300'
const searchQuery = `?q=-label:invalid+created:${createdDate}+type:pr+is:public+author:${authors}&per_page=${quantityPerPage}`;

export default searchQuery;
