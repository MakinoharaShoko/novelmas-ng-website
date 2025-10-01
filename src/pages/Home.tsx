import './Home.css'

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">NOVELM@STER NG</h1>
        <p className="home-subtitle">偶像大师剧情编辑器</p>
      </header>

      <main className="home-main">
        <section className="home-intro">
          <p>
            NOVELM@STER NG 是一个专为偶像大师系列打造的剧情编辑工具，
            让你能够轻松创作属于自己的偶像故事。
          </p>
        </section>

        <section className="home-features">
          <h2>功能特性</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>📝 可视化编辑</h3>
              <p>直观的编辑界面，所见即所得</p>
            </div>
            <div className="feature-card">
              <h3>🎭 角色管理</h3>
              <p>管理偶像大师系列角色</p>
            </div>
            <div className="feature-card">
              <h3>💾 导出功能</h3>
              <p>支持多种格式导出</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <p>© 2025 NOVELM@STER NG</p>
      </footer>
    </div>
  )
}

export default Home
