const getSearchedJobs = (jobs, searchedData) => {
  if (searchedData.skill.trim() !== '' && searchedData.employment_type.trim() === '') {
    return jobs.filter(job =>
      job.skills.trim().toLowerCase().includes(searchedData.skill.trim().toLowerCase()))
  } else if (searchedData.skill.trim() === '' && searchedData.employment_type.trim() !== '') {
    return jobs.filter(job =>
      job.employment_type.trim().toLowerCase() === searchedData.employment_type.trim().toLowerCase())
  } else if (searchedData.skill.trim() !== '' && searchedData.employment_type.trim() !== '') {
    return jobs.filter(job =>
      job.employment_type.trim().toLowerCase() === searchedData.employment_type.trim().toLowerCase() &&
            job.skills.trim().toLowerCase().includes(searchedData.skill.trim().toLowerCase()))
  }

  return []
}

export default getSearchedJobs
