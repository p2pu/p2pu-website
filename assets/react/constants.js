export const LEARNING_CIRCLES_LIMIT = 11;

export const SEARCH_PROPS = {
  learningCircles: {
    filters: ['location', 'topics', 'meetingDays'],
    placeholder: 'Search by keyword, organization, topic, and more... ',
  },
  courses: {
    filters: ['topics', 'orderCourses'],
    placeholder: 'Search by title, subject, description, and more... ',
  }
};

export const SEARCH_SUBJECTS = {
  learningCircles: 'learning circles',
  courses: 'courses'
}

export const MEETING_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

export const API_ENDPOINTS = {
  learningCircles: {
    baseUrl: 'https://learningcircles.p2pu.org/api/learningcircles/?',
    searchParams: ['q', 'topics', 'weekdays', 'latitude', 'longitude', 'distance', 'active', 'limit', 'offset', 'city', 'signup', 'team_id']
  },
  courses: {
    baseUrl: 'https://learningcircles.p2pu.org/api/courses/?',
    searchParams: ['q', 'topics', 'order']
  },
  topics: {
    baseUrl: 'https://learningcircles.p2pu.org/api/learningcircles/topics/?',
    searchParams: []
  }
}