import './App.css'
import React, { useState } from 'react'
import { marked } from 'marked'
import useLocalStorage from './hooks/useLocalStorage'
import syntax from './basic-syntax.json'

const App = () => {
  const [code, setCode] = useLocalStorage('code', '## Hello')
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>')
  const [hide, hidePreview] = useState(true)
  const [hideDocs, sethideDocs] = useState(true)

  console.log()
  const openMD = () => {
    console.log(0)
    hidePreview(true)
    sethideDocs(true)
  }
  const openDocs = () => {
    console.log(0)
    hidePreview(true)
    sethideDocs(false)
  }
  const openPreview = () => {
    console.log(0)
    hidePreview(false)
  }

  const handleChange = (e) => {
    setCode(e.target.value)
    setCompiled(marked.parse(e.target.value))
  }

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className="btn">
            MarkDown
          </button>
          <button onClick={openDocs} className="docs">
            Docs
          </button>
          <button onClick={openPreview}>Preview</button>
        </div>
        {hide ? (
          hideDocs ? (
            <div>
              <textarea onChange={handleChange} value={code} />
            </div>
          ) : (
            <div className="documents">
              {syntax.basic_syntax.map((ex, i) => (
                <div key={i} className="doc">
                  <h1>{ex.name}</h1>
                  <p>{ex.description}</p>
                </div>
              ))}
              hi
            </div>
          )
        ) : (
          <div>
            <textarea value={compiled} />
          </div>
        )}
      </div>
    </>
  )
}

export default App
