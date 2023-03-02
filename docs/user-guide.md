# User Guide

## Caching

By default, all clients will cache responses to the local storage to avoid requesting too often. Depending on the operating system, the cache directories are as follows:

- `C:\Users\%USERNAME%\AppData\Local\Temp\fanbox-assistant\wrapper` (Windows)
- `/Users/$USER/Caches/fanbox-assistant/wrapper` (macOS)
- `/home/$USER/.cache/fanbox-assistant/wrapper` (Linux)

!!! info "Notice"

    Changing the cache directory is not currently supported.

All clients provide an argument `cache` to determine whether to cache responses. If you want to always request responses from the platform side during the client's lifespan rather than load from available caches, you can set the `cache` argument to `False` while registering the client.

```python hl_lines="2" linenums="1"
# Disable to load cached responses.
with FanboxClient("session_id", cache=False) as client:
    ...
```

The cache files will be stored in 3 days by default, and all expired caches will be refreshed automatically. You can change the duration by setting the `cache_duration` argument (in seconds).

```python hl_lines="2" linenums="1"
# Set the cache duration to 7 days.
with FanboxClient("session_id", cache_duration=604800) as client:
    ...
```
