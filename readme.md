<h1>PDF to Text</h1>
<p>A simple docker image that takes any pdf in a certain folder and converts it into a .txt file. This containers primary purpose was to aid in the collection of pdf documents and converting them to a format which can be ingested to an AI for training.</p>

<h3>Quick start guide</h3>
<p>The easiest way to get up and running is to use the pre-built image. Please make sure you have Docker installed and running on your machine before continuing. Then run the following command:</p>
<code>docker run -v "{absolute_path_to_folder}:/content" travis3pi/pdf-to-text</code>
<br>
<br>
<p>This will download the pre-built image and run it using the folder you passed in (make sure it is the absolute path).</p>
<p><b>Notes: </b> This package has not been tested and is not intended for production tasks. Also note that it has not been verified to work with large PDF files and will silently quit rather than throw an error.</p>

<h3>Developing</h3>
<p>This repository uses a dockerized development environment to ease cross-platform development. To get started clone the repository and navigate to it in your terminal. You can then use the commands:  </p>
<code>docker-compose up --build</code>
<br>
<br>
<code>docker-compose down</code>

<br>
<br>
<p>To start and stop the development environment.</p>

