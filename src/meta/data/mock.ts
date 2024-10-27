import { TListItem } from '../type/list-item-type'

const mockData: TListItem[] = [
  {
    id: 'c1b1458e-6969-4c69-4e50-08da4143fbca',
    title: 'Grid: Understanding the difference between grid-template and grid-auto <h1>grid</h1>',
    date: '2018-10-18T15:01:40.657027',
    description:
      '<h1>grid</h1> With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties.'
  },
  {
    id: 'a2b2458e-9970-4c89-4f50-08db4243fcbb',
    title: 'Exploring CSS Flexbox for modern layouts',
    date: '2019-06-25T10:15:30.123456',
    description: 'Flexbox is a powerful tool for creating responsive layouts in CSS. In this article, we will go over how to use Flexbox properties effectively.'
  },
  {
    id: 'd3c3458f-1234-4c79-5g60-09ec5354edcd',
    title: 'Getting started with Vue 3 Composition API',
    date: '2021-04-05T08:30:50.654321',
    description: 'The Composition API in Vue 3 offers a new way to write component logic, helping to create more readable and maintainable components in Vue.js.'
  },
  {
    id: 'e4d4458g-5678-4c89-6h70-10fd6465fefe',
    title: 'An introduction to TypeScript for JavaScript developers',
    date: '2020-11-20T14:45:25.789012',
    description: 'TypeScript brings static typing to JavaScript, providing developers with tools for better type safety and code quality.'
  },
  {
    id: 'f5e5458h-9012-4c99-7i80-11ge7576ghgh',
    title: 'Building RESTful APIs with Node.js and Express',
    date: '2022-08-15T17:20:00.987654',
    description: 'Learn how to create RESTful APIs using Node.js and Express. This tutorial guides you through setting up a basic server.'
  },
  {
    id: 'g6f6558i-2345-4d89-8j90-12hf8687iihi',
    title: 'CSS animations for interactive UI elements',
    date: '2019-09-10T09:15:45.123321',
    description: 'CSS animations allow developers to create engaging and interactive UI elements. This article explores animation basics.'
  },
  {
    id: 'h7g7658j-3456-4e99-9k01-13ig9798jkjj',
    title: 'Asynchronous JavaScript: Promises, async, and await',
    date: '2021-12-05T18:10:20.654789',
    description: 'A guide to handling asynchronous JavaScript using Promises and the async/await syntax.'
  },
  {
    id: 'i8h8758k-4567-4f10-0l12-14jh0809klkk',
    title: 'A beginner’s guide to GraphQL',
    date: '2022-05-19T07:05:35.789456',
    description: 'GraphQL is a query language for APIs, providing a more efficient, powerful, and flexible way to query data.'
  },
  {
    id: 'j9i9858l-5678-4g21-1m23-15ki1910lmll',
    title: 'Using Tailwind CSS for utility-first styling',
    date: '2020-03-22T14:30:15.321789',
    description: 'Tailwind CSS provides utility-first styling, allowing you to build custom designs directly in your HTML or JSX.'
  },
  {
    id: 'k0j0958m-6789-4h32-2n34-16lj2021mnmm',
    title: 'JavaScript ES6+ new features you should know',
    date: '2019-07-08T12:45:50.456123',
    description: 'This article covers some of the most useful new features introduced in ES6 and beyond for modern JavaScript development.'
  },
  {
    id: 'l1k1058n-7890-4i43-3o45-17mk3132nonn',
    title: 'An introduction to web accessibility',
    date: '2021-01-30T16:25:40.654321',
    description: 'Web accessibility ensures that websites are usable by people of all abilities. This article introduces key accessibility concepts.'
  },
  {
    id: 'm2l2158o-8901-4j54-4p56-18nl4243opoo',
    title: 'Responsive web design techniques',
    date: '2020-02-15T13:35:25.987654',
    description: 'Responsive design is crucial for modern web development, allowing websites to adapt to various screen sizes and devices.'
  },
  {
    id: 'n3m3258p-9012-4k65-5q67-19om5354pqpq',
    title: 'Vue.js 3: Options API vs Composition API',
    date: '2022-09-12T11:20:35.123456',
    description: 'An in-depth comparison of the Options API and Composition API in Vue.js 3 and when to use each.'
  },
  {
    id: 'o4n4358q-0123-4l76-6r78-20pn6465qrqr',
    title: 'How to use JavaScript modules effectively',
    date: '2021-08-14T10:00:45.654789',
    description: 'JavaScript modules allow developers to organize and reuse code more effectively across projects.'
  },
  {
    id: 'p5o5458r-1234-4m87-7s89-21qo7576rsrs',
    title: 'Creating dynamic forms with Vue and Vuelidate',
    date: '2022-03-28T15:40:55.987321',
    description: 'Learn how to create dynamic forms in Vue using the Vuelidate library for powerful form validation.'
  },
  {
    id: 'q6p6558s-2345-4n98-8t90-22rp8687stst',
    title: 'Introduction to REST and GraphQL APIs',
    date: '2020-10-20T08:30:50.123789',
    description: 'REST and GraphQL offer different approaches to API design. This article introduces the basics of each.'
  },
  {
    id: 'r7q7658t-3456-4o09-9u01-23sq9798tutu',
    title: 'Deep dive into JavaScript closures',
    date: '2018-12-12T13:55:25.456123',
    description: 'Closures are a fundamental concept in JavaScript, enabling encapsulation and powerful functional patterns.'
  },
  {
    id: 's8r8758u-4567-4p10-0v12-24tr0809uvuv',
    title: 'State management with Vuex in Vue.js',
    date: '2019-11-18T17:50:10.654321',
    description: 'Vuex is the state management library for Vue.js. Learn how to use Vuex for complex state management.'
  },
  {
    id: 't9s9858v-5678-4q21-1w23-25us1910vwvw',
    title: 'CSS Grid: Advanced layout techniques',
    date: '2021-04-10T14:15:40.789456',
    description: 'CSS Grid is a powerful tool for creating responsive layouts. This guide covers advanced CSS Grid techniques.'
  },
  {
    id: 'u0t0958w-6789-4r32-2x34-26vt2021wxwx',
    title: 'Writing clean and maintainable JavaScript code',
    date: '2022-06-20T18:05:25.123654',
    description: 'Writing clean code is essential for maintainable projects. This article offers best practices for JavaScript developers.'
  }
]

export { mockData }
