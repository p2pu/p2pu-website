export const LEARNING_CIRCLES_LIMIT = 11;

export const SEARCH_PROPS = {
  learningCircles: {
    filters: ['location', 'topics', 'meetingDays'],
    placeholder: 'Search by city, organization, topic, and more... ',
  },
  courses: {
    filters: ['topics'],
    placeholder: 'Search by title, subject, description, and more... ',
  }
};

export const MEETING_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export const COURSE_CATEGORIES = [
  'Geography',
  'Economics',
  'Social Sciences',
  'Humanities',
  'Languages'
]

export const API_ENDPOINTS = {
  learningCircles: {
    baseUrl: 'https://learningcircles.p2pu.org/api/learningcircles/?limit=10&',
    searchParams: ['q', 'topics', 'weekdays', 'latitude', 'longitude', 'distance', 'active', 'limit', 'offset', 'city', 'signup']
  },
  courses: {
    baseUrl: 'https://learningcircles.p2pu.org/api/courses/?',
    searchParams: ['q', 'topics']
  },
  topics: {
    baseUrl: 'https://learningcircles.p2pu.org/api/learningcircles/topics/?',
    searchParams: []
  }
}