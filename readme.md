React arithmatic Demo App

Link: https://arithmatic-operation-app.netlify.app/

Requirments:

1. Take two inputes as number
2. Some arithmatic operation like +, -, \*, / %
3. Show result in upper input field.
4. Check some validation:
   -- if input is 0 say invalid input
5. Add a clear button that clear input field and Result field
6. Add History
   -- when clicked any arithmatic operation a history will be generated,
   -- History contain:
   ** Which operation is done?
   ** Result
   ** History created date & Time
   -- It Has a Restore button
   ** when clicked on restore button Update that info
   ---and disable restore button.

App1.jsx contain without refactor i.e app1.jsx has all files and functions

App.jsx Contain Refactor

/\*\*

- DONE: Handle user input fields
- DONE: Handle operations
- DONE: Handle a list of histories
- DONE: Render history list
- DONE: Restore the history
  \*/

What we install packages:

yarn add prop-types
yarn add shortid
