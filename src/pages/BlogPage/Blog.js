import React from 'react';

const Blog = () => {
    return (
        <div className='my-12 space-y-3'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <p><strong> What are the different ways to manage a state in a React application?</strong></p>
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> <strong>Introduction to React State Management:</strong><br />
                        The state of any application is represented by the user interface of the application. The state is mutable and whenever the user interacts with the application and changes its state, the user interface of the app may change as it will be represented by the new state. These states can be managed by a React component. The main objectives of the react component are to store the state and allow it to get updated once the user interacts with the application. It also ensures that the UI change whenever there is any update in the State. In this article, we will explain the ways to manage the states. In this topic, we are going to learn about React State Management.
                        <br />
                        <strong> Managing State in React with Examples...</strong>
                        <br />
                        <strong>React State: useState and React State: useContext:</strong>
                        <br />
                        The initial state is taken as an argument in useState hook. Initially when the React component renders, and returns two values. The values are the state update function and the current state. For displaying the current state of the component current state is used and for changing the current state the state update function is used.

                        useContext helps in passing the props down the components tree. React’s Context API helps in passing the props between the grandfather component to the grandchild component. This process doesn’t bother the other React Components which are available in the chain. <br />
                        <strong>React State: useReducer:</strong>
                        <br />
                        The idea of React’s useReducer has been taken from JavaScript Reducer. Generally, the current state is held by the Reducer along with action with payload and then it results out the new state.

                        In the example below, we have developed a counter, and its value state is maintained with the help of useReducer. We can increase, decrease, and reset the value of the counter.

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <p><strong> How does prototypical inheritance work??</strong></p>
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> <strong>Prototype Inheritance in JavaScript:</strong><br />
                        Under the classical inheritance phenomenon, we create a new class that actually extends or reuses the properties or functions, or methods of another class that are used by several programming languages (like C, C++, Java, etc.)
                        <br />
                        JavaScript doesn’t use classical inheritance instead it uses the phenomenon called Prototype Inheritance.
                        <br />
                        In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage.
                        <br />
                        In Prototype Inheritance, an object uses the properties or methods of another object via the prototype linkage.. <br />
                        All the JavaScript objects inherit properties and methods from a prototype (like Date objects inherit properties from Date.prototype and so on).
                        <br />
                        The idea of React’s useReducer has been taken from JavaScript Reducer. Generally, the current state is held by the Reducer along with action with payload and then it results out the new state.

                        In the example below, we have developed a counter, and its value state is maintained with the help of useReducer. We can increase, decrease, and reset the value of the counter.

                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <p><strong> What is a unit test? Why should we write unit tests?</strong></p>
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> <strong>What is a unit test:</strong><br />
                        Unit tests are simple scripts that check whether a given unit—class, function, module, etc.—is working as expected. They are meant to be rather simple, to cover the happy path of the code plus a few edge cases. They contribute to the long-term success of a project because of the reasons I discuss below.
                        <br />
                        <strong>1.Speed up development testing</strong>
                        <br />
                        When you start building applications, the most natural thing is to test the code with the user interface. You can make this process way faster and more reliable by writing a script that will check the code for you. With tests in place, rerunning all of them takes no mental energy from you; you can do it as often as you feel like.
                        <br />
                        <strong>2.Discover edge cases</strong>
                        <br />
                        Writing unit tests makes me think about edge cases—all the situations that are rare, unexpected, or wrong. When you write the logic, it’s normal to focus on the happy path, or what’s normal and expected to happen. When you write tests, you can set up checks for the edge cases and define what should happen in each of them.
                        <br />
                        <strong>Ensure that your code is composed of units</strong>
                        <br />
                        When you add unit tests to your code, you see what is easy to test and what is not. As your code grows in size and complexity, tests will force you to break it into manageable pieces. This is great because it will help you take the quality of your code to the next level. Every segment that received excessive responsibilities will require exponentially more complicated unit tests. In those cases, it’s a good idea to stop and rethink how you organize your logic.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <p><strong>React vs. Angular vs. Vue?</strong></p>
                </div>
                <div className="collapse-content">
                    <h1 tabIndex={0}>
                        <strong>React</strong> <br />
                        React is the JavaScript library of User Interfaces. It is build single-page applications and also allows you to create reusable UI components. It is a front-end JavaScript framework, created by Facebook in 2011. The initial version (V0.3.0) was released in July 2013. The latest version is V5.0.1. It has a size of 31.8K. This complete guide on How To Learn ReactJS: A Complete Guide For Beginners will help in making your transition towards React if you’re a beginner. <br />

                        <strong>Popularity</strong> <br />
                        – React has gained a lot of popularity in recent years and is considered one of the best frameworks for web development. There are more developers who keep React as a priority for creating wonderful websites. Companies like Uber, Airbnb, Netflix, Yahoo!, and The New York Times use React for their front-end development. <br />

                        <strong> Architecture </strong> <br />
                        – It does not follow any specific pattern, developers have the freedom to choose any design pattern. It begins with a single root component. Each can be nested with another component. It can also include third-party components such as state management routing, animation, etc for specific purposes. Here, the components are the large building block that defines reusable items used through the application. <br />

                        <strong> Features</strong> <br />
                        – React follows the “Learn Once, Write Anywhere” feature which helps developers to integrate new features without the need of rewriting the existing code. It also has declarative views for each state which will efficiently update and render the components as per the change in data. It has virtual DOM (Document Object Model defines how the document is accessed and manipulated) which helps in updating the changes made by the developer quickly to the website keeping rest of the other things the same. Now, with all this information, if you are sure to move to React, React JS (Basic to Advanced) – Self-Paced will guide you through the theoretical knowledge along with having practical hands-on.
                        <br />
                        <br />
                        <br />
                        Angular
                        Angular, developed by Google, was released in the year 2010. It is a TypeScript-based framework that uses a regular DOM. Angular provides a set of tools using which a complex, reactive UI can be built. It is primarily aimed at creating SPAs (Single Page Applications) and performs various operations such as routing, state management, PWA, testing, and building, having a size of 143K.

                        Popularity – Angular is used by Google, Upwork, and MS Office and since this framework was implemented before React, it is more popular providing a highly functional framework to create larger applications.

                        Architecture – Angular follows MVC (Model-View-Controller) architecture, also you don’t have restrictions in following only MVC architecture. Since Angular is also component-based, you can choose any design pattern. The Angular framework contains modules, templates, services, and components in the architecture which follows several operations while implementing an application.

                        Ecosystem – Angular also performs state management, inspired by Redux in React. You can build cross-platform mobile applications using NativeScript. The technology MEAN is based on Angular which is the trendy one these days, used mostly by developers. Angular material fills all the needs of UI and helps developers in building an aesthetic, consistent, and fully functional UI. It uses templates with Angular directives.

                        Features – The new version of Angular8 comes with immense features such as it supports cross-platform, two-way data binding, a set of directives, declarative UI, a real DOM, CLI (Command Line Interface), and many more. <br />
                        <br />
                        <br />
                        Vue
                        Vue was developed by a former Google employee and was released in the year 2014. It was developed to make the best version of Angular and make a custom tool. It is used for developing single-page engaging and high-quality web applications. It lets you extend directives (HTML with HTML attributes), and also provides built-in directives and user-defined directives. It is the lightest framework having a size of 23K.

                        Popularity – Vue has become so popular these days and it is one of the hottest topics in terms of technology. Companies that use Vue as their front-end development framework are UpWork, Netflix, and Nintendo. It has a good rating on GitHub making it so popular.

                        Architecture – Vue is called a progressive framework where you can extend functionality using third-party packages. It follows the MVVM (Model View ViewModel) pattern but is also not strictly linked to it. It also has SFCs (Single File Components) which can be transpiled into JS code using tools like Webpack.

                        Ecosystem – Vue comes with various libraries used for creating a full-fledged UI. Vuex is the state management library for Vue applications. To speed up your development, it has input components and advanced elements. It has a brilliant feature of integrating with Laravel. It can play a role of a library and a framework both depending on the project’s requirement. It uses HTML-based template syntax.

                        Features – Several features of Vue include two-way data binding for HTML interface manipulation, virtual DOM to update the changes made in the website quickly, custom directives for managing data changes, components for reusing codes, and transitions that provides methods when a UI element is removed or inserted in the DOM.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Blog;