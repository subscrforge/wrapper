# 开发

无论是你发现了本项目的任何问题，还是想要添加新功能，都欢迎你创建分支并提交变更。

## 从源码构建

在开始构建项目之前，你需要[创建分支](https://github.com/subscrforge/wrapper/fork)并将分支仓库克隆至本地。

```shell
git clone https://github.com/YOUR_USERNAME/wrapper.git
```

!!! warning "警告"

    不要直接提交变更到源仓库。请将变更提交到你的分支仓库中并向源仓库提交拉取请求。

之后，切入到仓库目录中并安装依赖。建议使用 [Poetry](https://python-poetry.org/) 安装和管理依赖：

```shell
cd wrapper
poetry install
```

或者你仍准备使用 `pip` 管理依赖：

=== "Linux / macOS"

    ```shell
    # 强烈建议创建虚拟环境。
    python -m venv .venv
    source .venv/bin/activate
    pip install .
    ```

=== "Windows Command Prompt"

    ```shell
    # 强烈建议创建虚拟环境。
    python -m venv .venv
    .venv\Scripts\activate
    pip install .
    ```

=== "Windows PowerShell"

    ```shell
    # 强烈建议创建虚拟环境。
    python -m venv .venv
    .venv\Scripts\Activate.ps1
    pip install .
    ```
