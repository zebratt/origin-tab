import React from 'react'
import { fetchJuejinArticles } from './service'

function HomePage(){
  const articles = fetchJuejinArticles()

  console.log(articles)

  return <div>home page</div>
}

export default HomePage