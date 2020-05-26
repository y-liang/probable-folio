export interface Project {
   id: string;
   name: string;
   route: string,
   description: string;
}

export const PROJECTS: Project[] = [
   // {
   //    id: 'd',
   //    name: 'reading-level',
   //    route: 'overview/sandbox/readability',
   //    description: 'find out the approximate grade level needed to comprehend given text'
   // },
   // {
   //    id: 'c',
   //    name: 'substitution-cipher',
   //    route: 'overview/sandbox/cipher',
   //    description: 'encrypt and decipher a message by replacing every letter with another letter'
   // },
   // {
   //    id: 'e',
   //    name: 'preference-polling',
   //    route: 'overview/sandbox/preference',
   //    description: 'compute a polling result that represents the ranked choices of a group'
   // },
   {
      id: 'a',
      name: 'idle-journal',
      route: '/journal',
      description: 'a place to jot down thoughts and ideas'
   },
   // {
   //    id: 'b',
   //    name: 'signature-generator',
   //    route: 'overview/sandbox/signature',
   //    description: 'create a signature with name, contact info, and social media presence'
   // },
   // {
   //    id: 'f',
   //    name: 'mix-match',
   //    route: 'overview/sandbox/match',
   //    description: 'play mix and match card game'
   // },
   {
      id: 'g',
      name: 'a-sandbox',
      route: 'overview/sandbox/cover',
      description: 'a few tiny random programs i built for fun'
   },
   {
      id: 'h',
      name: 'architecture-portfolio',
      route: '/architecture',
      description: 'a site to catalog my previous architectural design projects'
   },
   // {
   //    id: 'i',
   //    name: "...",
   //    route: 'overview/sandbox/',
   //    description: ''
   // },


];