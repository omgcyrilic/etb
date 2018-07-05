export const dateDisplay = (dateString) => {
  var d = new Date(dateString);
  var month = new Array();
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';
  var monthText = month[d.getMonth()];
  var year = d.getFullYear();
  return monthText + ' ' + year;
};

export const getCategoryTag = (category, rank) => {
  var categoryId = parseInt(category[0]);
  var rank = parseInt(rank[0]);

  if (categoryId === 1 && rank > 0) {
    if (rank <= 99) {
      rank = ('0'+rank).slice(-2);
    }
    return 'top-' + rank; 
  }
  if (categoryId === 2) {
    return 'hm';
  }
  if (categoryId === 3) {
    return 'fail';
  }
  if (categoryId === 4) {
    return 'placeholder';
  }
  else {
    return 'error';
  }
};

export const getGoogleMapsUrl = (post) => {
  var url = '';
  url = 'https://www.google.com/maps/place/' + post.addressstreet + '+' +  post.addresscity + '+' +  post.addressstate;

  return url;
};

export const buildImageaArray = (post) => {
  var images = [];

  if (typeof post !== 'undefined') {
    if (typeof post.img !== 'undefined') {
      images.push({
        'src': '/static/img/' + post.img,
        'title': post.restaurant
      });
    }
    if (typeof post.imgbonus !== 'undefined') {
      images.push({
        'src': '/static/img/' + post.imgbonus,
        'title': post.restaurant
      });
    }
    if (typeof post.imgexterior !== 'undefined') {
      images.push({
        'src': '/static/img/' + post.imgexterior,
        'title': post.restaurant
      });
    }
  }

  return images;
};

// TODO: fix this
export const getWowClass = (window) => {
  var wowClass = 'wow fadeInUp';

  if (typeof window !== 'undefined') {
    wowClass = 'wow fadeInUp';
  }

  return wowClass;
};

export const getClosedClass = (closed) => {
  var isClosed = '';

  if (closed == '1') {
    isClosed = 'closed';
  }

  return isClosed;
};
