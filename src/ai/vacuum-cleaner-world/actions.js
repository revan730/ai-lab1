const actions = Object.freeze({
  suck: 'suck',
  idle: 'idle',
  moveNorth: 'moveNorth',
  moveSouth: 'moveSouth',
  moveEast: 'moveEast',
  moveWest: 'moveWest'
})

export default actions

export const allActions = Object.freeze(
  Object.entries(actions)
    .map(([, value]) => value)
)

export const moveActions = Object.freeze(
  Object.entries(actions)
    .filter(([key]) => key.startsWith('move'))
    .map(([, value]) => value)
)

export const isMove = action => moveActions.includes(action)
