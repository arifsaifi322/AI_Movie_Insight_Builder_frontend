import { useState } from 'react'
import './App.css'

function App() {
  const [movieId, setMovieId] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const validateMovieId = (id) => {
    if (!id.trim()) {
      setError('Please enter an IMDB ID')
      return false
    }
    if (!/^tt\d{6,}$/.test(id.trim())) {
      setError('Invalid format. Use format like: tt3896198')
      return false
    }
    return true
  }

  const fetchMovie = async () => {
    if (!validateMovieId(movieId)) return

    setLoading(true)
    setError('')
    setData(null)
    try {
      const res = await fetch(`/movie/${movieId.trim()}`)
      if (res.status === 404) throw new Error('Movie not found')
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      const json = await res.json()
      if (!json.movie) throw new Error('Invalid response')
      setData(json)
    } catch (e) {
      setError(e.message || 'Failed to load movie')
    } finally {
      setLoading(false)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') fetchMovie()
  }

  const clearSearch = () => {
    setMovieId('')
    setData(null)
    setError('')
  }

  const getSentimentInfo = (classification) => {
    const sentiments = {
      'POSITIVE': {
        icon: '😊',
        color: 'positive',
        bgColor: 'positive-bg',
        borderColor: 'positive-border'
      },
      'NEGATIVE': {
        icon: '😞',
        color: 'negative',
        bgColor: 'negative-bg',
        borderColor: 'negative-border'
      },
      'NEUTRAL': {
        icon: '😐',
        color: 'neutral',
        bgColor: 'neutral-bg',
        borderColor: 'neutral-border'
      }
    }
    return sentiments[classification] || sentiments['NEUTRAL']
  }

  const sentimentInfo = data?.sentiment?.sentiment?.classification 
    ? getSentimentInfo(data.sentiment.sentiment.classification)
    : null

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo-wrapper">
            <div className="logo-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
            </div>
            <div>
              <h1 className="app-title">Movie Insight</h1>
              <p className="app-subtitle">Search and explore movie details with AI-powered sentiment analysis</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Search Section */}
        <div className="search-card">
          <div className="search-wrapper">
            <div className="input-container">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              <input
                placeholder="Enter IMDB ID (e.g., tt3896198)"
                value={movieId}
                onChange={(e) => setMovieId(e.target.value)}
                onKeyDown={onKeyDown}
                className="search-input"
                disabled={loading}
              />
            </div>
            <button 
              onClick={fetchMovie} 
              disabled={loading || !movieId.trim()}
              className="search-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </div>
          {error && (
            <div className="error-message">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              {error}
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Fetching movie details...</p>
          </div>
        )}

        {/* Movie Results */}
        {data && !loading && (
          <div className="results-container fade-in">
            {/* Movie Header Card */}
            <div className="movie-card">
              <div className="movie-layout">
                {/* Poster */}
                {data.movie?.poster && (
                  <div className="poster-wrapper">
                    <img 
                      src={data.movie.poster} 
                      alt={data.movie.title}
                      className="poster-image"
                    />
                    <div className="poster-overlay"></div>
                  </div>
                )}

                {/* Movie Info */}
                <div className="movie-info-wrapper">
                  <div className="movie-header-section">
                    <h2 className="movie-title">{data.movie?.title}</h2>
                    <div className="badge-group">
                      <span className="badge badge-cyan">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {data.movie?.year}
                      </span>
                      <span className="badge badge-gold">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        {data.movie?.imdbRating}/10
                      </span>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="details-grid">
                    <div className="detail-item">
                      <div className="detail-label">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        CAST
                      </div>
                      <p className="detail-value">{data.movie?.actors || 'N/A'}</p>
                    </div>

                    <div className="detail-item">
                      <div className="detail-label">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                          <polyline points="17 2 12 7 7 2"></polyline>
                        </svg>
                        DIRECTOR
                      </div>
                      <p className="detail-value">{data.movie?.director || 'N/A'}</p>
                    </div>

                    <div className="detail-item detail-item-full">
                      <div className="detail-label">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                        </svg>
                        GENRE
                      </div>
                      <div className="genre-tags">
                        {(data.movie?.genre || 'N/A').split(', ').map((g, i) => (
                          <span key={i} className="genre-tag">{g}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plot Summary */}
            <div className="plot-card">
              <div className="card-header">
                <div className="header-accent"></div>
                <h3>Plot Summary</h3>
              </div>
              <p className="plot-text">{data.movie?.plot || 'No plot available'}</p>
            </div>

            {/* Sentiment Analysis */}
            {data.sentiment && sentimentInfo && (
              <div className={`sentiment-card ${sentimentInfo.borderColor} ${sentimentInfo.bgColor}`}>
                <div className="sentiment-header">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={sentimentInfo.color}>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <h3>Audience Sentiment</h3>
                </div>
                
                <div className="sentiment-label">
                  <span className="sentiment-icon">{sentimentInfo.icon}</span>
                  <span className={`sentiment-text ${sentimentInfo.color}`}>
                    {data.sentiment.sentiment.classification}
                  </span>
                </div>

                <p className="sentiment-summary">
                  {data.sentiment.sentiment.summary}
                </p>
              </div>
            )}

            <button className="clear-button" onClick={clearSearch}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              New Search
            </button>
          </div>
        )}

        {/* Empty State */}
        {!data && !loading && !error && (
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                <polyline points="17 2 12 7 7 2"></polyline>
              </svg>
            </div>
            <h3>Search for a Movie</h3>
            <p>Enter an IMDB ID to get started</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Powered by AI Sentiment Analysis</p>
      </footer>
    </div>
  )
}

export default App