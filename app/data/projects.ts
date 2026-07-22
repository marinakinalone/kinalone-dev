/*
FORMAT
id: number between 1 and 6
title: string
link: string - link to the project
description: string - more or less 100 characters

The project cover should be in the png format and named as the title of the project in lowercase and underscores to replace space. For example, if the title of the project is "Project 1", the cover should be named "project_1.png" and placed in the public/projects folder. 
Dimensions: 800x445px
*/

export const projects = [
  {
    id: 1,
    title: 'Portuguese Bits',
    link: 'https://portuguese-bits.vercel.app/',
    description: 'A flowery app to practice Portuguese vocabulary.',
  },
  {
    id: 2,
    title: 'Le Journal',
    link: 'https://le-journal.vercel.app/',
    description: 'Something between an interactive diary and a video game.',
  },
  {
    id: 3,
    title: 'At the Jazz Club',
    link: 'https://at-the-jazz-club.vercel.app',
    description: `A jazz-theme game for my dad's birthday.`,
  },

  // TODO replace with Le Voyage à Lisbonne
  {
    id: 4,
    title: 'Le Voyage à Stockholm',
    link: 'https://le-voyage-a-stockholm.onrender.com/',
    description: 'My favorite places in Stockholm, on a map.',
  },
  // {
  //   id: 5,
  //   title: 'La La Dance',
  //   link: 'https://la-la-dance.vercel.app/',
  //   description:
  //     'A personnality test to find the social dance type that suits us best. Built with NextJS, React and React Bootstrap.',
  // },
  // {
  // id: 6,
  // title: 'Sailor Moon Quote Machine',
  //   link: 'https://sailor-moon-quote-machine.vercel.app/',
  //   description:
  //     'A sailormoon-themed random quote machine. My first React project (I am sentimental).',
  // },
  //  {
  //  id: 7,
  //  title: 'Garden JS',
  //  link: 'https://github.com/marinakinalone/garden-js',
  //  description: 'A cute game to practice JavaScript.',
  // },
  // TODO can add stormi, geeky love letter, and b&b too!
]
