# <img src='https://github.com/asalduur/bujodash/blob/main/public/logo152.png' width=35px> bujodash
PERN stack web application inspired by the bullet journal method to help users rapid log their day to day tasks.

[Demo](http://143.244.148.34:3333/) (Best viewed on Google Chrome).

### MVP & Features
- Users can create an account and login.
- Users can add a task to daily log, modify it (either by rewriting task or by marking task complete), or delete task.
- User can also have monthly log view -- tasks added to daily log, also get added to the monthly log.
- Responsive design throughout application.

### Technologies used
- Node.js & Express.js on the server side.
- PostgreSQL database, using Massive.js to query, Bcrypt.js to salt and hash passwords for secure authentication.
- Nodemailer to send confirmation email to users upon account creation.
- React.js on the client side, using React Context for state management.
- Scss as the stylesheet language.
- Formik and Yup validation schema on the registration and login forms.
- Toastify for alert notifications (no anxiety inducing progress bar!).
### Future Additions
- A pomodoro timer.
- Habit tracker.
