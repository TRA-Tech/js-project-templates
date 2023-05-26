import { sample } from 'lodash';

const users = [...Array(24)].map((_, index) => ({
  id: index,
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: `Name ${index}`,
  company: `Company ${index}`,
  isVerified: index % 3 === 0,
  status: sample(['active', 'banned']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

export default users;
