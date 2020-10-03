import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Article from './components/Article';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('Cricket');

  useEffect( () => {
    axios.get(`https://www.reddit.com/r/${subreddit}.json`)
          .then(res => {
            setArticles(res.data.data.children)
          })
          .catch(error => {
            console.log(`faile due to ${error}`)
          })
  }, [subreddit])

  return (
    <div className="App">
      <h1> SubReddit Feed App</h1>
      <header className="App-header">
        <input  type="text" className="input" value={subreddit} placeholder="Type to search" onChange={e => setSubreddit(e.target.value)}/>
      </header>
      <div className="articles">
        {
          (articles != null) ? articles.map((article,index) => <Article key={index} article={article.data} />) : ""
        }
      </div>
    </div>
  );
}

export default App;
