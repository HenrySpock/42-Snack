### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a library for the creation of client-side navigation in React. Components can be assigned to routes, allowing navigation between different views without full page reloads (in creating a single-page-app or SPA.)

- What is a single page application?
Single-Page-Applications dynamically update on a page without required a reload. A single HTML page is loaded and content is dynamically updated, smoothing the user experience and interaction.

- What are some differences between client side and server side routing?
Client-Side Routing: Navigation happens on the client's side without server requests. Different URLs imply changing the view to that URL's component. 
Server-Side Routing: Navigation requires a server request and a subsequent page reload. Can be slower and a less enjoyable interaction.

- What are two ways of handling redirects with React Router? When would you use each?
  1. Redirect component: Can be rendered anywhere in the component tree, used when when you want the redirect logic to be part of the component's render method or within JSX
  2. history: Allows you to programmatically navigate or change routes, used when you want to:
    A trigger a redirect in response to events (button clicks, form submissions, etc.), provides more dynamic control over navigation
    B navigate back or forward to a previous route 

- What are two different ways to handle page-not-found user experiences using React Router? 
1. The routes component:This is more of a catch all which renders the first child route of the current location
2. The redirect component: This is used when users won't be entering urls manaully or when you want them guided back to a main page if they end up on an unknown route

- How do you grab URL parameters from within a component using React Router?

- What is context in React? When would you use it?
Context allows data to pass down the component tree without having to pass props at ever level. This is seen in things like authentication state, language setting and themes.

- Describe some differences between class-based components and function
  components in React.
Syntax: Class syntax / function declaation syntax 
State and Lifecycle: Class components have state and lifecycle methods, whereas function components have to use hooks (useState and useEffect) to manage state and lifecycle 
Readability: Function components do tend to be easier to read.
Performance: Function components can be more performant due to React's optimization efforts with hooks.

- What are some of the problems that hooks were designed to solve?
They reuse stateful logic across multiple components
They simplify complex components
They eliminate class boilerplate
They provide better handling of side effects