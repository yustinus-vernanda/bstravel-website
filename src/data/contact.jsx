import Email from './Email.astro';
import Whatsapps from './Whatsapps.astro';
import Website from './Website.astro';

export const contactNavigation = [
  {
    name: 'Email',
    href: '#',
    icon: Email, 
    value: 'support@bstrans.co.id'
  },{
    name: 'Whatsapps',
    href: '#',
    icon: Whatsapps,  
    value: '0812-9315-5210'
  },
  {
    name: 'Website',
    href: '#',
    icon: Website,  
    value: 'bstrans.co.id'
  },
];