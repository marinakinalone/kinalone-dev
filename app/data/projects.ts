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
    title: 'Garden JS',
    link: 'https://github.com/marinakinalone/garden-js',
    description:
      'A cute game to practice JavaScript. Built with React, Redux, SASS Node, Express and MongoDB.',
  },
  {
    id: 2,
    title: 'Le Voyage à Stockholm',
    link: 'https://le-voyage-a-stockholm.onrender.com/',
    description:
      'My favorite places in Stockholm, on a map. Built with React, Sass, Node, Express and the Google Maps API.',
  },
  {
    id: 3,
    title: 'La La Dance',
    link: 'https://la-la-dance.vercel.app/',
    description:
      'A personnality test to find the social dance type that suits us best. Built with NextJS, React and React Bootstrap.',
  },
  {
    id: 4,
    title: 'Sailor Moon Quote Machine',
    link: 'https://sailor-moon-quote-machine.vercel.app/',
    description:
      'A sailormoon-themed random quote machine. My first React project. Built with React, NextJS and Sass.',
  },
  // {
  //   id: 5,
  //   title: 'Project Template',
  //   link: 'https://github.com/marinakinalone?tab=repositories',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc',
  // },
  // {
  //   id: 6,
  //   title: 'Project Template',
  //   link: 'https://github.com/marinakinalone?tab=repositories',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl ultricies nunc',
  // },
]
