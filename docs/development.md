# Development

Whatever you find some issues on this project, or want to add new features, you're welcome to fork this project and commit your changes.

## Building from source

Before you build the project, you need to [fork](https://github.com/subscrforge/wrapper/fork) this repository, and clone the forked repository to local.

```shell
git clone https://github.com/YOUR_USERNAME/wrapper.git
```

!!! warning

    Never committing any changes to the source repository directly. Please commit changes to your fork and pull request to the source repository.

And then, switch into the directory and install dependencies. I recommend you to use [Poetry](https://python-poetry.org/) to install and manage dependencies:

```shell
cd wrapper
poetry install
```

Or if you still want to use `pip` to manage dependencies:

=== "Linux / macOS"

    ```shell
    # Create a virtual environment is strongly recommended.
    python -m venv .venv
    source .venv/bin/activate
    pip install .
    ```

=== "Windows Command Prompt"

    ```shell
    # Create a virtual environment is strongly recommended.
    python -m venv .venv
    .venv\Scripts\activate
    pip install .
    ```

=== "Windows PowerShell"

    ```shell
    # Create a virtual environment is strongly recommended.
    python -m venv .venv
    .venv\Scripts\Activate.ps1
    pip install .
    ```
