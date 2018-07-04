export const LEARNING_CIRCLES_LIMIT = 11;

export const SEARCH_PROPS = {
  learningCircles: {
    filters: ['location', 'topics', 'meetingDays'],
    placeholder: 'Keyword, organization, facilitator, etc...',
  },
  courses: {
    filters: ['topics', 'orderCourses'],
    placeholder: 'Title, subject, etc...',
  }
};

export const SEARCH_SUBJECTS = {
  learningCircles: 'learning circles',
  courses: 'courses'
};

export const MEETING_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

export const API_BASE_URL = 'https://learningcircles.p2pu.org'
// export const API_BASE_URL = 'http://localhost:8000';

export const API_ENDPOINTS = {
  learningCircles: {
    baseUrl: `${API_BASE_URL}/api/learningcircles/?`,
    searchParams: ['q', 'topics', 'weekdays', 'latitude', 'longitude', 'distance', 'active', 'limit', 'offset', 'city', 'signup', 'team_id']
  },
  courses: {
    baseUrl: `${API_BASE_URL}/api/courses/?`,
    searchParams: ['q', 'topics', 'order']
  },
  learningCirclesTopics: {
    baseUrl: `${API_BASE_URL}/api/learningcircles/topics/?`,
    searchParams: []
  },
  coursesTopics: {
    baseUrl: `${API_BASE_URL}/api/courses/topics/?`,
    searchParams: []
  },
  stats: {
    baseUrl: `${API_BASE_URL}/api/landing-page-stats/?`,
    searchParams: []
  },
  landingPage: {
    baseUrl: `${API_BASE_URL}/api/landing-page-learning-circles/?`,
    searchParams: []
  },
  whoami: {
    baseUrl: `${API_BASE_URL}/en/accounts/fe/whoami/`
  }
}

export const DISCOURSE_API_URL = 'https://community.p2pu.org'

export const DISCOURSE_CATEGORIES = [
  { title: 'Getting Started', slug: 'getting-started' },
  { title: 'Courses', slug: 'courses' },
  { title: 'Promotion', slug: 'promotion' },
  { title: 'Facilitation Tips', slug: 'facilitation-tips' },
  { title: 'Activities', slug: 'activities' },
  { title: 'Wrapping Up', slug: 'wrapping-up' }
]