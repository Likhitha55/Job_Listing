const express = require('express');
const router = express.Router();
const jobController = require('../Controllers/jobController');
const Job = require('../models/job');

router.get('/jobs', async (req, res) => {
    try {
      const jobs = await Job.find();
      console.log("Fetched in backend successfully");
      res.json(jobs);
    } catch (error) {   
      res.status(500).json({ message: error.message });
    }
  });

router.post('/jobs', jobController.createJob);
router.post('/jobs/search', jobController.searchJobs);

router.get('/jobs/total', jobController.getJobsCount);
console.log('In routes')
router.delete('/jobs/delete/:jobId', jobController.deleteJob);
console.log('In routes')
router.put('/jobs/update/:jobId', jobController.updateJob);


module.exports = router;
