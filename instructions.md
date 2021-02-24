# Project Title

Quiz App


# Description
Create a quiz app that allows users to create topics, quizzes, and flashcards and interact with their quizzes by flipping flashcards over.

# Objective
This project – an quiz app in which users can create and view topics and quizzes (which are comprised of flashcards) that are associated with those topics – gives you an opportunity to practice using Redux and Redux Toolkit to manage complex state.

## Functionality
On the `'/topics/new'` page:
  - Users can create topics
On the `'/topics'` page:
  – Users can view all topics
  – Users can click an individual topic and be redirected to the page for that topic
On the `/topics/:topicId` page:
  - Users can view an individual topic and all quizzes for that topic
  – Users can click a quiz associated with a topic and be redirected to that quiz's page
On the `'quizzes/new'` page:
  - Users can create quizzes that:
    - Are associated with topics
    – Contain lists of flashcards
      – Users can dynamically change the number of cards in a quiz by adding and removing card fields in the new quiz form
On the `'/quizzes'` page:
  - Users can view all quizzes
  – Users can click an individual quiz and be redirected to that quiz's page
On the `'/quizzes/:quizId'` page:
  - Users can view an individual quiz and flip cards over
  – Users can delete a card associated with a quiz

**TODO ADD GIF HERE**

## State Structure

Your app will include three slices: one for topics, one for quizzes (which will have a `topicId` corresponding to a topic in state), and one for cards (which will have a `quizId` corresponding to a quiz in state). Each slice's state should include an object storing all the topics/quizzes/cards keyed by their `id`. This will allow you to quickly retrieve an object's information whenever you need to look it up. All together, your app state will look like this:

```js
{
  topics: {
    topics: {
      '123': {
        id: '123',
        name: 'example topic',
        quizIds: ['456']
      }
    }
  },
  quizzes: {
    quizzes: {
      '456': {
        id: '456',
        topicId: '123',
        name: 'quiz for example topic',
        cardIds: ['789', '101', '102']
      }
    }
  },
  cards: {
    cards: {
      '789': {
        id: '789',
        front: 'front text',
        back: 'back text'
      },
      '101': {
        id: '101',
        front: 'front text',
        back: 'back text'
      },
      '102': {
        id: '102',
        front: 'front text',
        back: 'back text'
      },
    }
  }
}
```

You might be wondering why, for each slice, we are asking you to create a property with the same name as the slice itself. This app is relatively small, but you can imagine that in a more complex application you might want to store multiple groupings of topics, quizzes, or cards in one slice in state. For example, if you allowed users to favorite topics, you might store a `favoriteTopics` in your topics slice. By storing all the topics under a named key (rather than deciding that they should comprise the entire slice) you are creating a flexible state structure that can grow with you as you add functionality to your app.

## Project Requirements

- Build the application using React and Redux Toolkit
- Version control your application with Git and host the repository on GitHub
- Write a README (using Markdown) that documents your project including:
  - The purpose of your project
  - Technologies used
  - Features
  - Future work
- Your application is deployed and accessible by users

## Prerequisites

- HTML
- CSS
- JavaScript
- React
- Redux Toolkit
- Git and GitHub

## Dependencies

### `uuid`
This app uses [`uuid`]([the documentation](https://www.npmjs.com/package/uuid)) to create unique identifiers for topics/quizzes/cards. We will be using the [`v4` function](https://www.npmjs.com/package/uuid#uuidv4options-buffer-offset), so take a moment to read that section of the docs before continuing on.   

### `react-router`
This app uses `react-router` to handle routing between different pages. Since `react-router` is outside the scope of this project, we've written the routing code for you, but if you're curious about how it works, you can explore `App.js` (where the routes for this app are defined) and read the [`react-router` docs](https://reactrouter.com/).

## Tasks

### Task Group 1: Create a Topics Slice
– Task: Your first task is to write code to manage the state associated with topics. Create a slice that:
  - Is named `topics`.
  – Has initial state consisting of an object that includes one property, `topics`, which corresponds to an empty object. This object will eventually hold all topics keyed by `id`.
  – Has an `addTopic` action. You can expect the payload for this action to look like `{id: '123456', name: 'name of topic'}`. In addition to storing these values in state, each topic should have a `quizIds` property, which will correspond to an array containing the `id`s of each quiz associated with the topic. When a topic is first created, it won't have any associated quizzes, but you should still create the `quizIds` array so that all topics in state conform to the same shape. Export the action creators and reducer your slice generates, as well as a selector that selects the `topics` object nested within `initialState`.
– Hint: Use `createSlice` to generate your topics slice. Your `addTopic` action should modify the `topics` object in state by adding an object representing a single topic to the `topics` object. Remember, we want the `topics` object to be keyed by topic `id`, so insert your newly created single topic object as a the value associated with the `id` you receive in the action's `payload`.

– Task: Add `topics` to the app's store.
– Hint:

– Task: In **Topics.js**, import the selector defined in your slice and use it to access all the topics in state. Instead of mapping over an empty array, iterate over the topics in state, putting a `Link` on the page for each one.
– Hint:

– Task: Next, you'll need to hook the new topic form up to the action creators your slice generates. In **NewTopicForm.js**, import `addTopic` and dispatch it from the event handler that runs when the new topic form is submitted. Verify that your code is working by filling out the form and submitting it. You should be redirected to the `/topics` page and should see your newly created topic there.
– Hint:

– Task:
– Hint:

### Task Group 2: Quizzes

### Task Group 3: Cards

### Task Group 4:

## Example Code

Want to see an example of how someone else has completed this project? Click this [link](TODO:REPLACE_ME) to download a zip file containing one example solution to this project. Remember: your project doesn't have to look anything like this! It should be unique to your vision.

## Sharing

Great work! Visit [our forums](TODO:REPLACE_ME) to compare your project to our sample solution code. After you host your own solution on GitHub, be sure to share it with other learners and see how other learners have built their own projects!

Your solution might look different from ours, and that’s okay! There are multiple ways to solve these projects, and you’ll learn more by seeing others’ code.
