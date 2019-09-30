import { pickRandom } from '@/util/random'
import actions, { moveActions } from './actions'

export default () => {
  return {
    energySpent: 0,
    perceive ({ isDirty }) {
      return isDirty ? this.suck() : this.move()
    },
    suck () {
      this.energySpent += 2
      return actions.suck
    },
    move () {
      this.energySpent++
      return pickRandom(moveActions)
    }
  }
}
