const express = require('express');
const jobsListRouter = require('./api/routes/jobsList');
const jobDetailsRouter = require('./api/routes/jobDetails');
const logRequest = require('./api/middleware/logRequest');

const PORT = process.env.PORT || 5000;

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.use(logRequest);
app.use(jobsListRouter);
app.use(jobDetailsRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
