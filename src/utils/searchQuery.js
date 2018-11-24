import moment from 'moment';

const searchQuery = (usersList) => {
  const authors = usersList.join('+author:');

  const startDate = moment('7:30', 'HH:mm').format();
  const endDate = moment('17:00', 'HH:mm').format();

  const createdDate = `${encodeURIComponent(startDate)}..${encodeURIComponent(endDate)}`;

  const quantityPerPage = '300';

  return `?q=-label:invalid+created:${createdDate}+type:pr+is:public+author:${authors}&per_page=${quantityPerPage}`;
}

export default searchQuery;
