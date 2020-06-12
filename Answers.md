1. What problem does the context API help solve?

The context API replaces prop drilling which makes state management an overall easier process.


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store: This holds the global state in a given web application.

The store is known as a single source of truth because all of the global state is stored in there (making debugging and state change tracking easier).

Actions: These are functions that send info to the reducers. They typically return a "type" and a "payload" as information the reducer will need to set new state. 

Reducers: They are functions that take in an action and changes state depending on which action was passed into it.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global state that can be easily accessed by any component. 
This may be best used with data from axios requests that's needed for rendering UI in several places. 

Component state is state that is local to a component and would need to be passed via prop drilling.
This may be best used for the state of form input on a single component. 


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk helps with creating asynchronous operations inside of actions. 
Because of this we can use "dispatch()" inside of an action function instead of using "return."  


1. What is your favorite state management system you've learned and this sprint? Please explain why!

I prefer useContext because it has fewer moving parts than redux which may make development faster and code easier to troubleshoot later.
