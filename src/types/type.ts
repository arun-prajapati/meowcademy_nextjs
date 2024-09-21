export interface HomePageTypes {
  id: number;
  name: string;
  description: string;
  video?: any;
  custom_video?: string;
  image_url: string;
  custom_video_url?: string;
  heading: Heading[];
  about_us: AboutU2[];
  desktop_video?:any;
  moblie_video?:any
}

export interface Heading {
  id: number;
  home_id: number;
  title: string;
  description: string;
  type: string;
  about_us: AboutU[];
}

export interface AboutU {
  id: number;
  title_id: number;
  name: string;
  description: string;
  image_url: any;
}

export interface AboutU2 {
  id: number;
  home_id: number;
  title: string;
  description: string;
  type: string;
  about_us: AboutU3[];
}

export interface AboutU3 {
  id: number;
  title_id: number;
  name: string;
  description: string;
  image_url: string;
}
export interface WhyMsCardType {
  title: string;
  text: string;
  img: string;
  className: string;
}

export interface TestimonialCardType {
  description: string;
  name: string;
  img?: string;
  showContent: boolean;
}

export interface TestimonialType {
  id: number;
  title_id: number;
  name: string;
  description: string;
  youtube_link: any;
  subject_id: any;
  date?: string;
  image_url?: string;
}
export interface LocationDataType {
  id: number;
  title: string;
  address: string;
  email: string;
  phone_number: number;
  slug: string;
  image_url: string;
  description: string;
  title_id: number;
  location_time: LocationDataTimeType[];
}

export interface LocationDataTimeType {
  id: number;
  location_id: number;
  start_time: string;
  end_time: string;
  day: string;
  close_status: string;
}
export interface LevelListType {
  id: number;
  name: string;
  image_url: string;
}

export interface BreadCrumbType {
  menu: any | string;
  submenu?: string;
  redirect?: string;
}

export interface StandardType {
  id: number;
  type: string;
  std_name: string;
  description: string;
  slug: string;
  image_url: string;
  logo_url: string[];
  subject: SubjectType[];
  meta_description?:string;
  meta_title?:string;
}

export interface SubjectType {
  id: number;
  standard_id: number;
  group_id: number;
  sub_name: string;
  price: number;
  description: string;
  slug: string;
  full_subject_name: string;
  image_url: string;
  logo_url: string;
  standard_name: string;
  group_name: string;
}

export interface CourseDetailType {
  id: number;
  standard_id: number;
  group_id: number;
  sub_name: string;
  price: number;
  description: string;
  slug: string;
  full_subject_name: string;
  standard_name: string;
  group_name: string;
  image_url: string;
  logo_url: string;
  event: any[];
  Roadmap: Roadmap[];
  coverage: Coverage[];
  component: Component[];
  lessonplans: Lessonplan[];
  class__schedules: any[];
}

export interface Roadmap {
  id: number;
  subject_id: string;
  group_id: number;
  title: string;
  description: string;
  image_url: string;
  sub_name: SubName[];
}

export interface SubName {
  id: number;
  full_subject_name: string;
  slug: string;
}

export interface Coverage {
  id: number;
  subject_id: number;
  description: string;
}

export interface Component {
  id: number;
  subject_id: number;
  title: string;
  description: string;
}

export interface Lessonplan {
  id: number;
  subject_id: number;
  title: string;
  description: string;
  logo_url: any;
}

export interface AccordionType {
  title: string;
  desc: string;
  icon?: string;
}

export interface GroupListType {
  id: number;
  type: string;
  name: string;
  description: string;
  slug: string;
  group_name: string;
  image_url: string;
  roadmap: roadmap[];
}
export interface roadmap {
  id: number;
  subject_id: string;
  group_id: number;
  title: string;
  description: string;
  image_url: string;
  sub_name: roadmapSubName[];
}

export interface roadmapSubName {
  id: number;
  full_subject_name: string;
  slug: string;
}

export interface TeacherListType {
  id: number;
  name: string;
  description: string;
  subject: string;
  image_url: string;
}
export interface MaOnlineType {
  data: Daum[];
  journeyTitles: JourneyTitle[];
  message: string;
  status: number;
}

export interface Daum {
  id: number;
  home_id: number;
  title: string;
  description: any;
  type: string;
  about_us: AboutU[];
}

export interface MaAboutU {
  id: number;
  title_id: number;
  name: string;
  description: any;
  image_url: string;
}

export interface JourneyTitle {
  id: number;
  home_id: number;
  title: string;
  description: any;
  type: string;
  journey: Journey[];
}

export interface Journey {
  id: number;
  title_id: number;
  name: string;
  description: string;
  image_url: string;
}
export interface FilterValuesType {
  year: string[]|string|number;
  std_name: string[]|string;
  sub_name: string[]|string;
  type: string[]|string;
  location: string[]|string;
  day: string[]|string;
}

export interface FilterType {
  level?: string;
  subject?: string;
  location?: string;
  setFilterValues?: React.Dispatch<React.SetStateAction<FilterValuesType>>;
  filterValues?: FilterValuesType;
}

export interface FilterResultType {
  subject: string[];
  standard: string[];
  class_type: string[];
  location: string[];
  day: string[];
  message: string;
  status: number;
}
export interface ClassResultType {
  id: number;
  year: string;
  location_id: number;
  subject_id: number;
  start_time: string;
  end_time: string;
  day: string;
  type: any;
  price: string;
  loc_name: string;
  full_name: string;
}
export interface GroupListType2 {
  id: number;
  type: string;
  name: string;
  description: string;
  slug: string;
  group_name: string;
  image_url: string;
}
export interface EventDataType {
  id: number
  title: string
  description: string
  price_for_yes?: number
  price_for_no?: number
  features: string
  slug: string
  subject_id: string
  teacher_id: string
  image_url: string
  sub_name: any[]
  start_date: string
  end_date: string
  teacher_name: string[]
  teacher?: Teacher[]
  event__highlights?: EventHighlight[]
  event_topic?: EventTopic[]
  event_date?: EventDateType[]
}
export interface Teacher {
  id: number
  name: string
  description: string
  subject: string
  image_url: string
}

export interface EventHighlight {
  id: number
  event_id: number
  title: string
  description: string
  image_url: string
}

export interface EventTopic {
  id: number
  event_id: number
  title: string
  description: string
}

export interface EventDateType {
  id?: number
  event_id?: number
  title: string
  type: string
  start_date: string
  end_date: string
  start_time: string
  end_time: string
}
