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
        name: 'example topic'
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

You might be wondering why, for each slice, we are asking you to create a property with the same name as the slice itself. This app is relatively small, but you can imagine that in a more complex application you might want to store multiple groupings of topics, quizzes, or cards in one slice in state. For example, if you allowed users to favorite topics, you might store a `favoritedTopics` in your topics slice. By storing all the topics under a named key (rather than deciding that they should comprise the entire slice) you are creating a flexible state structure that can grow with you as you add functionality to your app.

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

## Setup
The quickest way to set up your app is to use [create-react-app](https://create-react-app.dev/) with [the Redux flag](https://redux-toolkit.js.org/introduction/quick-start#using-create-react-app) in order to automatically include Redux.

### `uuid`
This app uses [`uuid`]([the documentation](https://www.npmjs.com/package/uuid)) to create unique identifiers for topics/quizzes/cards. We will be using the [`v4` function](https://www.npmjs.com/package/uuid#uuidv4options-buffer-offset), so take a moment to read that section of the docs before continuing on.   

### `react-router`
This app uses `react-router` to handle routing between different pages. Since `react-router` is outside the scope of this project, we've written the routing code for you, but if you're curious about how it works, you can explore `App.js` (where the routes for this app are defined) and read the [`react-router` docs](https://reactrouter.com/).

## Tasks

## Example Code

Want to see an example of how someone else has completed this project? Click this [link](TODO:REPLACE_ME) to download a zip file containing one example solution to this project. Remember: your project doesn't have to look anything like this! It should be unique to your vision.

## Sharing

Great work! Visit [our forums](TODO:REPLACE_ME) to compare your project to our sample solution code. After you host your own solution on GitHub, be sure to share it with other learners and see how other learners have built their own projects!

Your solution might look different from ours, and that’s okay! There are multiple ways to solve these projects, and you’ll learn more by seeing others’ code.
