import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import { tutorials } from '../data/tutorials'
import './TutorialDetail.css'

function TutorialDetail() {
  const { id } = useParams<{ id: string }>()
  const [markdown, setMarkdown] = useState('')
  const [loading, setLoading] = useState(true)

  const tutorial = tutorials.find((t) => t.id === id)

  useEffect(() => {
    if (!tutorial) {
      setLoading(false)
      return
    }

    fetch(tutorial.file)
      .then((res) => res.text())
      .then((text) => {
        setMarkdown(text)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load tutorial:', err)
        setMarkdown('# 加载失败\n\n无法加载教程内容。')
        setLoading(false)
      })
  }, [tutorial])

  if (loading) {
    return (
      <div className="tutorial-detail-container">
        <div className="tutorial-loading">加载中...</div>
      </div>
    )
  }

  if (!tutorial) {
    return (
      <div className="tutorial-detail-container">
        <div className="tutorial-not-found">
          <h1>教程未找到</h1>
          <p>抱歉，您访问的教程不存在。</p>
          <Link to="/tutorial" className="back-link">返回教程列表</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="tutorial-detail-container">
      <div className="tutorial-breadcrumb">
        <Link to="/tutorial">教程</Link>
        <span> / </span>
        <span>{tutorial.title}</span>
      </div>

      <div className="tutorial-detail-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {markdown}
        </ReactMarkdown>
      </div>

      <div className="tutorial-detail-footer">
        <Link to="/tutorial" className="back-link">← 返回教程列表</Link>
      </div>
    </div>
  )
}

export default TutorialDetail
