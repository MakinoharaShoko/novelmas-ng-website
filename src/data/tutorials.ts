export interface TutorialItem {
  id: string
  title: string
  description: string
  file: string
  category: string
}

export const tutorials: TutorialItem[] = [
  {
    id: 'getting-started',
    title: '快速开始',
    description: '了解 NOVELM@STER NG 的基本使用方法，创建你的第一个剧情',
    file: '/tutorials/getting-started.md',
    category: '入门教程'
  }
]

export const categories = Array.from(new Set(tutorials.map(t => t.category)))
