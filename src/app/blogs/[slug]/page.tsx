import React from 'react';

const page = ({params}) => {



    const {name, description} = blogs.find((blog) =>blog.slug == params.slug )

    return (
        <div className='h-screen'>
          
          <h2>{name}</h2>
          <h2>{description}</h2>
        </div>
    );
};

export default page;





const blogs = [
    {
      "slug": "ultimate-guide-frontend",
      "name": "The Ultimate Guide to Frontend Development",
      "description": "Learn everything about frontend development, from HTML to modern frameworks like React and Vue."
    },
    {
      "slug": "effective-remote-work-tips",
      "name": "10 Tips for Effective Remote Work",
      "description": "Discover how to stay productive and balanced while working from home."
    },
    {
      "slug": "javascript-closures-explained",
      "name": "Understanding JavaScript Closures",
      "description": "A deep dive into JavaScript closures and how they work under the hood."
    },
    {
      "slug": "css-grid-vs-flexbox",
      "name": "CSS Grid vs. Flexbox",
      "description": "Understand the differences between CSS Grid and Flexbox and when to use each."
    },
    {
      "slug": "seo-tips-for-developers",
      "name": "SEO Tips for Web Developers",
      "description": "Optimize your websites for search engines with these practical SEO tips."
    },
    {
      "slug": "react-hooks-introduction",
      "name": "Introduction to React Hooks",
      "description": "A beginner-friendly guide to React Hooks like useState and useEffect."
    },
    {
      "slug": "mastering-nodejs",
      "name": "Mastering Node.js",
      "description": "Learn the essentials of Node.js for building efficient server-side applications."
    },
    {
      "slug": "responsive-design-basics",
      "name": "The Basics of Responsive Design",
      "description": "Learn how to make your websites look great on all devices using responsive design techniques."
    },
    {
      "slug": "intro-to-databases",
      "name": "Introduction to Databases",
      "description": "Understand the basics of databases and how they power modern web applications."
    },
    {
      "slug": "web-performance-optimization",
      "name": "Web Performance Optimization Techniques",
      "description": "Improve the performance of your websites with these proven optimization techniques."
    }
  ]
  