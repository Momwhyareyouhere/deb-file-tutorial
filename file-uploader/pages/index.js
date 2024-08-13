import { useState } from 'react';

export default function Home() {
  const [file, setFile] = useState(null);
  const [downloadLink, setDownloadLink] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setDownloadLink(data.downloadLink);
  };

  return (
    <div>
      <h1>File Uploader</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {downloadLink && (
        <div>
          <p>Download your file:</p>
          <a href={downloadLink} download>
            {downloadLink}
          </a>
        </div>
      )}
    </div>
  );
}
