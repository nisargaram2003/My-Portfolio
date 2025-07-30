
import React, { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';


function Home() {
 const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true); // Change text/icon first

    // Delay actual download by 1 second
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/Nisarga_Resume.pdf'; // Ensure it's in the public folder
      link.download = 'Nisarga_Resume.pdf';
      link.click();
    })
  }
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hello, I'm Nisarga </h1>
        <h2>React.js Developer </h2>
        <p>
          I specialize in building fast, interactive, and responsive web applications using React.js, HTML, CSS, and JavaScript. Clean code, beautiful UI, and efficient performance are my focus.
        </p>
        <a href="/contact" className="home-btn">Let's Connect</a>
       <button className="resume-btn gap-top" onClick={handleDownload}>
          {downloaded ? "Downloaded" : "Download Resume"}
          {downloaded ? <DownloadDoneIcon /> : <DownloadIcon />}
        </button>
      </div>
    </section>
  );
}

export default Home;
