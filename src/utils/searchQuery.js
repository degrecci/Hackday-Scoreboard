import moment from 'moment';

const searchQuery = (usersList, date) => {
  const authors = usersList.join('+author:');

  const startDate = moment(date).startOf('day').format();
  const endDate = moment(date).endOf('day').format();

  const createdDate = `${encodeURIComponent(startDate)}..${encodeURIComponent(endDate)}`;

  const quantityPerPage = '300';

  return `?q=-label:invalid+created:${createdDate}+type:pr+is:public+author:${authors}&per_page=${quantityPerPage}`;
};

export default searchQuery;
