import { sub } from 'date-fns';

import {
  _id,
  _ages,
  _roles,
  _emails,
  _nativeL,
  _nativeM,
  _nativeS,
  _booleans,
  _percents,
  _taskNames,
  _jobTitles,
  _tourNames,
  _fullNames,
  _lastNames,
  _sentences,
  _firstNames,
  _postTitles,
  _courseTitle,
  _fullAddress,
  _phoneNumbers,
  _descriptions,
  _productNames,
  _companyNames,
} from './assets';

// ----------------------------------------------------------------------

export const _mock = {
  id: (index: number) => _id[index],
  time: (index: number) => sub(new Date(), { days: index, hours: index }),
  boolean: (index: number) => _booleans[index],
  role: (index: number) => _roles[index],
  // Text
  courseTitle: (index: number) => _courseTitle[index],
  taskNames: (index: number) => _taskNames[index],
  postTitle: (index: number) => _postTitles[index],
  jobTitle: (index: number) => _jobTitles[index],
  tourName: (index: number) => _tourNames[index],
  productName: (index: number) => _productNames[index],
  sentence: (index: number) => _sentences[index],
  description: (index: number) => _descriptions[index],
  serviceTitle: (index: number) =>
    [
      'Luxury Suite Room',
      'Deluxe Double Room',
      'Premium King Room',
      'Standard Twin Room',
      'Family Suite',
      'Executive Suite',
      'Ocean View Room',
      'Mountain View Villa',
      'Presidential Suite',
      'Honeymoon Suite',
      'Business Room',
      'Economy Room',
    ][index],
  // Contact
  email: (index: number) => _emails[index],
  phoneNumber: (index: number) => _phoneNumbers[index],
  fullAddress: (index: number) => _fullAddress[index],
  // Name
  firstName: (index: number) => _firstNames[index],
  lastName: (index: number) => _lastNames[index],
  fullName: (index: number) => _fullNames[index],
  companyName: (index: number) => _companyNames[index],
  // Number
  number: {
    percent: (index: number) => _percents[index],
    rating: (index: number) => 3 + (index % 3) + Math.random(),
    age: (index: number) => _ages[index],
    price: (index: number) => 50000 + index * 25000,
    nativeS: (index: number) => _nativeS[index],
    nativeM: (index: number) => _nativeM[index],
    nativeL: (index: number) => _nativeL[index],
  },
  // Image
  image: {
    cover: (index: number) => `/assets/images/cover/cover_${index + 1}.jpg`,
    avatar: (index: number) => `/assets/images/avatar/avatar_${index + 1}.jpg`,
    travel: (index: number) => `/assets/images/travel/travel_${index + 1}.jpg`,
    company: (index: number) => `/assets/images/company/company_${index + 1}.png`,
    product: (index: number) => `/assets/images/z_product/product_${index + 1}.png`,
    portrait: (index: number) => `/assets/images/portrait/portrait_${index + 1}.jpg`,
    career: (index: number) => `/assets/images/career/career_${index + 1}.jpg`,
    marketing: (index: number) => `/assets/images/marketing/marketing_${index + 1}.jpg`,
    course: (index: number) => `/assets/images/course/course_${index + 1}.jpg`,
  },
  video: (index: number) =>
    [
      `https://www.dropbox.com/s/odzycivuo9cy5rg/video_01.mp4?dl=0`,
      `https://www.dropbox.com/s/7cx04n8rr4w5rbg/video_02.mp4?dl=0`,
    ][index],
  address: {
    fullAddress: (index: number) =>
      [
        'Сүхбаатар дүүрэг 1-р хороо',
        'Баянгол дүүрэг 2-р хороо',
        'Хан-Уул дүүрэг 3-р хороо',
        'Баянзүрх дүүрэг 4-р хороо',
        'Чингэлтэй дүүрэг 5-р хороо',
        'Сонгинохайрхан дүүрэг 6-р хороо',
        'Налайх дүүрэг 7-р хороо',
        'Багануур дүүрэг 8-р хороо',
        'Багахангай дүүрэг 9-р хороо',
      ][index],
    city: (index: number) =>
      ['Улаанбаатар', 'Дархан', 'Эрдэнэт', 'Чойбалсан', 'Мөрөн', 'Ховд', 'Өлгий'][index],
    country: (index: number) =>
      ['Монгол', 'Монгол', 'Монгол', 'Монгол', 'Монгол', 'Монгол', 'Монгол'][index],
  },
};
