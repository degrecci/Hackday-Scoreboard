import moment from 'moment';
import USERS_LIST from '../constants/usersList';

const authors = USERS_LIST.join('+author:');

const startDate = moment('8:30', 'HH:mm').format();
const endDate = moment('17:00', 'HH:mm').format();

const createdDate = `${encodeURIComponent(startDate)}..${encodeURIComponent(endDate)}`;

const quantityPerPage = '300';

const searchQuery = `?q=-label:invalid+created:${createdDate}+type:pr+is:public+author:${authors}&per_page=${quantityPerPage}`;

export default searchQuery;
