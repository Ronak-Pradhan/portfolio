interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'GNN from Scratch (PyTorch)',
    description: `A Graph Neural Network library built in vanilla PyTorch — no PyG, no DGL.
    Implements GCN, GraphSAGE, and GAT on a custom message-passing abstraction,
    validated on Cora node classification. Ships with 30+ pytest unit tests and a
    GitHub Actions CI pipeline.`,
    imgSrc: '/static/images/gnn-from-scratch.png',
    href: 'https://github.com/Ronak-Pradhan/gnn-lab',
  },
]

export default projectsData
