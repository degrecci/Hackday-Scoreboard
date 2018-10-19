import USERS_LIST from '../constants/usersList';

const authors = USERS_LIST.join('+author:');

const startDate = '2018-09-30T10:00:00+00:00';
const endDate = '2018-11-01T12:00:00+00:00';
const createdDate = `${encodeURIComponent(startDate)}..${encodeURIComponent(endDate)}`;

const quantityPerPage = '300';

const searchQuery = `?q=-label:invalid+created:${createdDate}+type:pr+is:public+author:${authors}&per_page=${quantityPerPage}`;

export default searchQuery;
