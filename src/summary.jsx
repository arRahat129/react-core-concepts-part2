/**
 * Components
 * JSX
 * Props
 * State
 * Events
 * [ Conditional Rendering ]
 * 
 */

/**
 * 1. Api : url JSONPlaceholder site : https://jsonplaceholder.typicode.com/users
 * 
 * # just write a simple fetch with json conversion
 * # wrap the data loading component under suspense
 * 
 * 
 * fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => console.log(data));
 * 
 *
 *  const loadData = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        return data;
    }
 * 
 * 
 */




