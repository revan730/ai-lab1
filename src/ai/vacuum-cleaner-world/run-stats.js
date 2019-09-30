import toSelectOptions from '@/util/toSelectOptions'
import SimpleReflexAgent from '@/ai/vacuum-cleaner-world/SimpleReflexAgent'
import ModelBasedReflexAgent from '@/ai/vacuum-cleaner-world/ModelBasedReflexAgent'
import Environment from '@/ai/vacuum-cleaner-world/Environment'
import VacuumCleanerWorld from '@/ai/vacuum-cleaner-world/VacuumCleanerWorld'

const createWorld = (agentFactoryMethod) => VacuumCleanerWorld(
    Environment({ dirtAppearanceProbability: 0.01 }),
    agentFactoryMethod()
  );

const worldModelBasedAgent = createWorld(SimpleReflexAgent);
const trashCountOnEachStep = [];
trashCountOnEachStep.push(worldModelBasedAgent.environment.grid.dirtyCount());
for (let i = 0;i < 50;i++) {
    worldModelBasedAgent.performNextAction();
    trashCountOnEachStep.push(worldModelBasedAgent.environment.grid.dirtyCount());
}
console.log(trashCountOnEachStep);
console.log(worldModelBasedAgent.agent.energySpent);
