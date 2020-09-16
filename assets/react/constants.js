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

// TODO
export const API_BASE_URL = 'https://learningcircles.p2pu.org'

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
  },
  teams: {
    baseUrl: `${API_BASE_URL}/api/teams/?`,
    searchParams: ['limit', 'image']
  }
}

export const DISCOURSE_API_URL = 'https://community.p2pu.org';
export const LOGIN_REDIRECT_URL = "https://learningcircles.p2pu.org/en/login_redirect/";

export const DISCOURSE_CATEGORIES = [
  { title: 'Orientation', slug: 'orientation', defaultImagePath: '/assets/images/facilitate/profile_1_1.jpg' },
  { title: 'Creating a learning circle', slug: 'creating-a-learning-circle', defaultImagePath: '/assets/images/facilitate/profile_5_1.jpg' },
  { title: 'Courses and Topics', slug: 'courses-and-topics', defaultImagePath: '/assets/images/facilitate/courses_topics.jpg' },
  { title: 'Promotion and outreach', slug: 'promotion-and-outreach', defaultImagePath: '/assets/images/facilitate/profile_4_2.jpg' },
  { title: 'Facilitation', slug: 'facilitation', defaultImagePath: '/assets/images/facilitate/profile_5_2.jpg' },
  { title: 'Reflection and wrap up', slug: 'reflection-and-wrap-up', defaultImagePath: '/assets/images/finance_for_everyone.jpg' },
  { title: 'Testimony', slug: 'testimony', defaultImagePath: '/assets/images/facilitate/profile_2_1.jpg' },
]

export const FACILITATOR_RESOURCE_TYPES = [
  'video', 'activity', 'blog', 'template', 'thread'
]
