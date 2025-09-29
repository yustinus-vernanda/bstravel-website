import FacebookIcon from './FacebookIcon.astro';
import TwitterIcon from './TwitterIcon.astro';
import InstagramIcon from './InstagramIcon.astro';

export const navigation = [
  {
    name: 'Facebook',
    href: '#',
    // The "icon" property holds a reference to an imported Astro component
    icon: FacebookIcon, 
    value: '@bstrans'
  },{
    name: 'Instagram',
    href: 'https://instagram.com/bs_transtravel',
    icon: InstagramIcon,  
    value: '@bs_transtravel'
  },
  {
    name: 'Twitter',
    href: '#',
    icon: TwitterIcon,  
    value: '@bstrans'
  },
  // ... other items
];