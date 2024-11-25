export default {
  /**
   * basic Information
   */
  title: `blankspace`,
  description: `blankspace`,
  language: `ko`,
  siteUrl: `https://tsh05-blog.netify.app`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, 
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `김소연`,
    nickname: `Soyeon Kim`,
    stack: ['Web Hacking'],
    bio: {
      email: `tsh8802@gmail.com`,
      residence: 'Daegu, South Korea',
      bachelorDegree: 'Yeungnam Univ. Information and Communication Engineering (2021.03-2025.02)',
    },
    social: {
      github: `https://github.com/tsh05`,
      linkedIn: `https://www.linkedin.com/in/tsh05/`,
      resume: `https://www.notion.so/tsh05/10c0ed25cc26802fa57fd675671f3496?pvs=4`,
    },
    dropdown: {
      tistory: 'https://blog.naver.com/tsh05',
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'Web Server',
      category: 'Web Server',
    },
    {
      title: 'Web Hacking',
      category: 'Web Hacking',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2022.01.04 - NOW',
      en: 'A Corp.',
      kr: 'A 회사',
      info: 'A 팀',
      link: '',
    },
    {
      category: 'Career',
      date: '2021.01.04 - 2022.01.04',
      en: 'B Corp.',
      kr: 'B 회사',
      info: 'B 팀',
      link: '',
    },
    {
      category: 'Activity',
      date: '2023.07 - NOW',
      en: 'Community',
      kr: '커뮤니티',
      info: 'IT 커뮤니티',
      link: '',
    },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Capstone Design Project',
      description: 'MIDAS종합설계',
      techStack: ['Software', 'Database', 'Embedded'],
      thumbnailUrl: 'cdp.png', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/danmin',
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
