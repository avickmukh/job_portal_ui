const getJobDetailById = (jobs, jobId) => {
  const result = jobs.filter(job => job.id === parseInt(jobId))
  return result
}

export default getJobDetailById
