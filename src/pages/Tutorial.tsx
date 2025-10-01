import { Link } from 'react-router-dom'
import { tutorials, categories } from '../data/tutorials'
import './Tutorial.css'

function Tutorial() {
  return (
    <div className="tutorial-container">
      <div className="tutorial-header">
        <h1>教程中心</h1>
        <p>学习如何使用 NOVELM@STER NG 创作精彩的偶像故事</p>
      </div>

      {categories.map((category) => (
        <section key={category} className="tutorial-section">
          <h2 className="tutorial-category">{category}</h2>
          <div className="tutorial-grid">
            {tutorials
              .filter((tutorial) => tutorial.category === category)
              .map((tutorial) => (
                <Link
                  key={tutorial.id}
                  to={`/tutorial/${tutorial.id}`}
                  className="tutorial-card"
                >
                  <div>
                    <h3>{tutorial.title}</h3>
                    <p>{tutorial.description}</p>
                  </div>
                  <span className="tutorial-link-arrow">→</span>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Tutorial
