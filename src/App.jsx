import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
        <h1>CICD JENKINS DEMO</h1>
        <h2>
          This source code uses Git repo and branch/main. <br />
          In Build Triggers, select <span className="highlight">poll SCM</span> and use schedule{" "}
          <code>* * * * *</code>
        </h2>
      </header>

      

      <h3>Build Steps</h3>
      <pre className="build-steps">
        call npm install{"\n"}
        call npm run build
      </pre>
      <pre className="build-steps">
        rmdir /S /Q "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\jenkinsdemo"{"\n"}
        mkdir "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\jenkinsdemo"{"\n"}
        xcopy /E /I /Y dist\* "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\jenkinsdemo"
      </pre>

      <div className="card">
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App
