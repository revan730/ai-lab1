import { pickRandom } from '@/util/random'
import { allActions } from './actions'

export default () => {
  return {
    energySpent: 0,
    perceive ({ isDirty }) {
      const action = pickRandom(allActions)
      if (action === 'suck') {
        this.energySpent += 2
      }
      if (action !== 'idle') {
        this.energySpent++
      }
      return action
    }
  }
}
