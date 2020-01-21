import reducer from '../../../src/routes/JobList/reducer'
import { getJobList } from '../../../src/routes/JobList/actions'

const initialState = {
    isLoading : false,
    jobs:[]
}
describe('Job List : Test case', () => {
  describe('when no state is passed', () => {
    it('pass no state', () => {
      expect(reducer()).to.deep.equal(initialState)
    })
  })
  describe('Job List: getJobList', () => {
    const finalStateVal = { ...initialState, isLoading: true }
    const action = getJobList()
    const newState = reducer(initialState, action)
    it('Job List: getJobList', () => {
      expect(JSON.stringify(finalStateVal)).to.deep.equal(JSON.stringify(newState))
    })
  })
})
