# 用户指南

## 缓存

默认情况下，所有客户端对象都会向本地存储缓存响应数据，以免过于频繁地发起请求。取决于不同操作系统，缓存目录如下：

- `C:\Users\%USERNAME%\AppData\Local\Temp\fanbox-assistant\wrapper` (Windows)
- `/Users/$USER/Caches/fanbox-assistant/wrapper` (macOS)
- `/home/$USER/.cache/fanbox-assistant/wrapper` (Linux)

!!! info "注意"

    目前暂不支持更改缓存目录。

每个客户端对象都提供了 `cache` 参数，用于决定是否缓存响应数据。如果你打算在整个客户端的生命周期内始终向平台端发起请求，而非从可用的缓存加载请求，那么你可以在注册客户端对象时将 `cache` 参数设为 `False`。

```python hl_lines="2" linenums="1"
# Disable to load cached responses.
with FanboxClient("session_id", cache=False) as client:
    ...
```

缓存文件默认保存 3 天，过期缓存会自动刷新。你可以通过设置 `cache_duration` 参数更改缓存的保存时间（单位：秒）。

```python hl_lines="2" linenums="1"
# Set the cache duration to 7 days.
with FanboxClient("session_id", cache_duration=604800) as client:
    ...
```
