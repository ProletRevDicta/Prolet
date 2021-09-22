**第五章：Tilix與Apt代理修復**

Apt是G$bian GNU/Linux默認的命令式包管理器，功能非常強大，但是在使用代理的時候會發現它的流量和Tilix的流量都不經過QV2ray，怎麼辦呢？

如果上述功能不經過代理，國外網絡在使用上述功能時會極度緩慢，無法使用。

經過了上述的教程，我想各位都基本會使用vi了。
那麼執行如下命令：

> sudo vi ~/.bashrc

使用Page Down按鍵翻頁到最後，輸入：

> export http_proxy="127.0.0.1:8889"

接着保存退出後再輸入：

> sudo vi /etc/profile

使用Page Down按鍵翻頁到最後，輸入：

> export http_proxy="127.0.0.1:8889"

保存退出後再輸入：

> source /etc/profile

由於QV2ray僅支持終端HTTP代理，並且其HTTP端口默認設置爲8889，所以如上所示。
保存後輸入命令：

> source ~/.bashrc

這時會發現使用wget等下載工具的流量是經過代理的了。

接下來我們來解決Apt代理，只需執行命令：

> sudo vi /etc/apt/apt.conf

後輸入：

> Acquire::http::Proxy "http://127.0.0.1:8889"

保存即可。

其實vi這個工具一開始還是中國腦控部隊用習近平的聲音教我的呢。。。
