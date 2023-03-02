var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"Introduction","text":"Wrapper for SubscrForge  A Modern Wrapper for Creator Subscription Platforms <p>This project is a core component of the in-development subscription content manager SubscrForge, which as a driver to import contents into the manager automatically. However, it can also be used individually for crawling contents from the subscription platforms as a dependency.</p>"},{"location":"development.html","title":"Development","text":"<p>Whatever you find some issues on this project, or want to add new features, you're welcome to fork this project and commit your changes.</p>"},{"location":"development.html#building-from-source","title":"Building from source","text":"<p>Before you build the project, you need to fork this repository, and clone the forked repository to local.</p> <pre><code>git clone https://github.com/YOUR_USERNAME/wrapper.git\n</code></pre> <p>Warning</p> <p>Never committing any changes to the source repository directly. Please commit changes to your fork and pull request to the source repository.</p> <p>And then, switch into the directory and install dependencies. I recommend you to use Poetry to install and manage dependencies:</p> <pre><code>cd wrapper\npoetry install\n</code></pre> <p>Or if you still want to use <code>pip</code> to manage dependencies:</p> Linux / macOSWindows Command PromptWindows PowerShell <pre><code># Create a virtual environment is strongly recommended.\npython -m venv .venv\nsource .venv/bin/activate\npip install .\n</code></pre> <pre><code># Create a virtual environment is strongly recommended.\npython -m venv .venv\n.venv\\Scripts\\activate\npip install .\n</code></pre> <pre><code># Create a virtual environment is strongly recommended.\npython -m venv .venv\n.venv\\Scripts\\Activate.ps1\npip install .\n</code></pre>"},{"location":"user-guide.html","title":"User Guide","text":""},{"location":"user-guide.html#caching","title":"Caching","text":"<p>By default, all clients will cache responses to the local storage to avoid requesting too often. Depending on the operating system, the cache directories are as follows:</p> <ul> <li><code>C:\\Users\\%USERNAME%\\AppData\\Local\\Temp\\fanbox-assistant\\wrapper</code> (Windows)</li> <li><code>/Users/$USER/Caches/fanbox-assistant/wrapper</code> (macOS)</li> <li><code>/home/$USER/.cache/fanbox-assistant/wrapper</code> (Linux)</li> </ul> <p>Notice</p> <p>Changing the cache directory is not currently supported.</p> <p>All clients provide an argument <code>cache</code> to determine whether to cache responses. If you want to always request responses from the platform side during the client's lifespan rather than load from available caches, you can set the <code>cache</code> argument to <code>False</code> while registering the client.</p> <pre><code># Disable to load cached responses.\nwith FanboxClient(\"session_id\", cache=False) as client:\n...\n</code></pre> <p>The cache files will be stored in 3 days by default, and all expired caches will be refreshed automatically. You can change the duration by setting the <code>cache_duration</code> argument (in seconds).</p> <pre><code># Set the cache duration to 7 days.\nwith FanboxClient(\"session_id\", cache_duration=604800) as client:\n...\n</code></pre>"}]}