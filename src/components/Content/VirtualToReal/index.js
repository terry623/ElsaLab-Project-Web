// 'topic',
// 'systemStructure',
// 'abstract',
// 'proposedMethodology',
// 'experimentalResults',
// 'awarding',
// 'videoOverview',
// 'conclusion',
// 'nextProject',

const topic = [
  '2017',
  'Virtual-to-Real:',
  'Learning to Control in Visual Semantic Segmentation',
];

const abstract = [
  'Abstract',
  `Collecting training data from the physical world is usually
time-consuming and even dangerous for fragile robots, and
therefore, recent advances in robot learning propose to use
simulators as the training platform. Unfortunately, the reality
gap between synthetic and real visual data prohibits directly
migrating the models trained in virtual worlds to the real
world. This paper proposes a modular architecture for tackling
simulation- to-reality problem. The architecture separates the
learning model into a perception module and a control policy
module, and uses semantic image segmentation as the meta
representation for relating these two modules. The perception
module translates RGB images to semantic image segmentations.
The control policy module employs deep reinforcement learning
(RL) methods and takes image segmentations as its inputs.
Experimental results show that our architecture outperforms all
baseline methods in the virtual and real environments, and
learns faster than them.`,
];

const proposedMethodology = [
  'Proposed Methodology',
  [
    {
      id: 1,
      title: 'Bridge the Gap between Simulation and Reality',
    },
    {
      id: 2,
      title: 'Training in Simulated Enviorments',
    },
    {
      id: 3,
      title: 'Visual Guidance Module and Target Switching',
    },
  ],
];

const experimentalResults = [
  'Experimental Results',
  [
    {
      id: 1,
      title: 'Model Settings and Robotic Platform',
    },
    {
      id: 2,
      title: 'Learning Curves of the Two Tasks',
    },
    {
      id: 3,
      title: 'Comparison in the Simulated and Real Worlds',
    },
  ],
];

const VirtualToReal = {
  topic,
  abstract,
  proposedMethodology,
  experimentalResults,
};

export default VirtualToReal;
