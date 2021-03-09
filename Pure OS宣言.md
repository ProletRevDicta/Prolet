**前言：G$bian和G$untu(etc.)/雞班圖是我們對含有間諜軟件/分區表病毒的Debian-Ubuntu-Lubuntu-Xubuntu... GNU/Linux的蔑稱。**
**M$WIN是我們對微軟Windows的蔑稱，全稱爲Malicious Windows is $**
**GNU/Linux與M$WIN之間有生殖隔離，GNU/Linux單方面地無法製作M$WIN的Live。**

**第一章：製作Live**

Live系統就是GNU/Linux的安裝、一次性使用操作系統，在Trisquel/G$untu系可以使用Startup Disk Creator製作安裝；在M$WIN可以使用Rufus。

前往 gnu.org 即自由軟件基金會的官網選擇 Try GNU/Linux 再在接下來的頁面中找到Pure OS下載ISO，或者直接前往 https://pureos.net/ 下載ISO。

這是M$WIN安裝Pure OS鏡像的教程：https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#3-usb-selection
這是Trisquel/G$untu系安裝Pure OS鏡像的教程：https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu#1-overview



**第二章：安裝操作系統**

在成功製作了Live后，在計算機主板動畫時不停點擊F12等按鍵，即可進入引導菜單，此菜單要進入兩次，記住原有的啓動項，和插上CD/USB後的啓動項，比較後發現原有啓動項的名稱，在引導菜單中使用上下鍵進行操作，選擇你的Live設備名，點擊Enter即可進入Live啓動菜單。

進入啓動菜單後，什麼都不需要做，點擊Enter啓動圖形界面Live，等待一段時間。
你剛剛進去的時候可能會很卡，要有耐心地繼續。
接下來要解決卡噸。
完成後不斷點擊彈出窗口的右上角繼續，窗口消失後移動光標到屏幕右上角，點擊，點擊設置圖標，在新彈出的設置窗口上選項Account/帳戶，點擊加號添加帳戶，帳戶名爲a即可，必須設置密碼，沒有密碼在註銷後無法登錄不卡噸的桌面，密碼也爲a即可，添加完畢後光標重回右上角，點擊小人圖標後點擊彈出的Log Out登出。

登出後用鼠標點擊你新建的用戶a，或者在Username後面輸入a，點擊Enter。在之後的Password/密碼中輸入a。
最關鍵的一步來了，點擊確定按鈕左邊的齒輪圖標，彈出列表後鼠標選擇X11，列表消失後點擊Enter即可進入不卡噸的操作系統。

由於Pure OS的桌面環境基於G$bian，我們點擊左上角的九宮格圖標，在彈出的左側欄中點擊最上方的方塊圖標，Install Pure OS/安裝Pure OS，進入安裝流程。

**筆者在高中時唯一的一次考試英語考了全校第一，所以我的語言設置初始均爲英語，各位根據自己的語言力量選擇語言設置。**

在彈出的安裝到哪個硬盤的界面，需要在進入主板引導時觀察新增的啓動項和原有的啓動項，原有啓動項的名稱要記下來，在備份完原先磁盤上操作系統的數據後，或者磁盤是新的磁盤的話，選擇指定名稱的磁盤，接下來點擊擦除全部磁盤，如果磁盤原先的操作系統是G$bian，只需點擊替換原來的扇區，並在下方彩條選擇G$bian GNU/Linux這一扇區條。

接下來選擇用戶名和密碼，最後進入安裝，等待安裝進度條走完，重啓即可。

重啓後移除CD/USB，或者通過引導菜單進入原來名稱的磁盤，此時用戶會發現分區表已經人間蒸發了，病毒解決。

但是系統仍然很卡，怎麼辦？接下來重複在Live裏面登出後的操作，登錄或重新登錄操作系統，便可以消滅卡噸了。



**第三章：配置網絡**

沒有一個良好的網絡，就沒有與時俱進的一切。
在VPN上我們推薦V2ray/QV2ray和Shadowsock/Open VPN等自由軟件，QV2ray的Appimage需要首先在文件設置的Permissions中勾選允許作爲可執行文件，纔可以雙擊運行，QV2ray在啓動後需要解壓V2ray的文件到home/V2ray下，在QV2ray的設置里設置V2ray核心路徑爲home/V2ray，然後點擊左下角的組/Groups，點擊右側選擇夾的訂閱設置，點擊複選框，輸入訂閱鏈接後點擊下方的更新訂閱，確定設置，接下來左側Groups里就有全部的節點列表了，隨便雙擊一個便可以出國了。



**第四章：Tilix啓動熱鍵設定**

Pure OS的作者所做的是非常反G$untu用戶的設定，即取消了Ctrl+Alt+T打開終端的設定，並且把Terminal魔改成了Tilix。
沒關係，這一熱鍵恢復僅需點擊設置裏面的Keyboard，再點擊Shortcut，滾動條拉到最下面，點擊加號，輸入Name爲Tilix，Command爲tilix，點擊熱鍵按鈕，點擊鍵盤上的Ctrl+Alt+T以輸入熱鍵，然後確定，關閉設置，便可以正常使用這一熱鍵了。


接下來你會發現Files沒有Open in Terminal這一選擇。
接下來打開Tilix，打開Files（以創建下文cd中的命令），輸入命令：

> cd ~/.local/share/nautilus/scripts
> sudo vi Tilix

點擊鍵盤上的a鍵
輸入：

> **# !/bin/sh**
> **tilix**

點擊鍵盤上的:鍵後輸入wq，點擊回車。
接下來輸入命令：

> chmod +x Tilix
> nautilus -q
> sudo vi ~/.config/nautilus/scripts-accels

點擊鍵盤上的a鍵
輸入：

> F4 Tilix

點擊鍵盤上的:鍵後輸入wq，點擊回車。

接下來使用File進入任意一個文件夾，點擊F4鍵，會發現Open in Terminal可以使用了。



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



**第六章：軟件安裝**

我的GNU/Linux運行後通用命令是：

> sudo apt update -y
> sudo apt upgrade -y
> #run chinese input
> sudo apt -y install tree
> sudo apt -y install ibus-pinyin ibus-rime
> sudo apt -y install vim
> sudo apt -y remove leafpad #Text
> sudo apt -y install vlc #Video
> sudo apt -y install audacity #Audio record
> sudo apt -y install brasero #CD-DVD
> sudo apt -y install pidgin #Pidgin
> sudo apt -y install pidgin-otr
> sudo apt -y install ettercap-graphical #attack
> sudo apt -y install tor #Dark web
> sudo apt -y install torbrowser-launcher
> sudo apt -y install wireshark #sniffer
> sudo apt -y install gimp #Photoshop
> sudo apt -y install libreoffice #Office
> sudo apt -y install axel #More process downloading, Seriously, It could be use for PyTube!
> sudo apt -y install lmms #audio make
> sudo apt -y install vim-gtk #"+y
> sudo apt-get install w3m w3m-img #Terminal Browser
> sudo cp -vf vimrc /etc/vim/vimrc
> 
> sudo apt install build-essential libreadline-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libffi-dev zlib1g-dev libncursesw5-dev libc6-dev libsqlite3-dev openssl sqlite3 bzip2 libbz2-dev libgdbm-compat-dev liblzma-dev uuid-dev -y
> sudo apt install zlib* p7zip-full libx11-dev -y

文件vimrc的內容爲：

> " All system-wide defaults are set in $VIMRUNTIME/debian.vim and sourced by
> " the call to :runtime you can find below.  If you wish to change any of those
> " settings, you should do it in this file (/etc/vim/vimrc), since debian.vim
> " will be overwritten everytime an upgrade of the vim packages is performed.
> " It is recommended to make changes after sourcing debian.vim since it alters
> " the value of the 'compatible' option.
> 
> " This line should not be removed as it ensures that various options are
> " properly set to work with the Vim-related packages available in G$bian.
> runtime! debian.vim
> 
> " Vim will load $VIMRUNTIME/defaults.vim if the user does not have a vimrc.
> " This happens after /etc/vim/vimrc(.local) are loaded, so it will override
> " any settings in these files.
> " If you don't want that to happen, uncomment the below line to prevent
> " defaults.vim from being loaded.
> " let g:skip_defaults_vim = 1
> 
> " Uncomment the next line to make Vim more Vi-compatible
> " NOTE: debian.vim sets 'nocompatible'.  Setting 'compatible' changes numerous
> " options, so any other options should be set AFTER setting 'compatible'.
> "set compatible
> 
> " Vim5 and later versions support syntax highlighting. Uncommenting the next
> " line enables syntax highlighting by default.
> if has("syntax")
>   syntax on
> endif
> 
> " If using a dark background within the editing area and syntax highlighting
> " turn on this option as well
> "set background=dark
> 
> " Uncomment the following to have Vim jump to the last position when
> " reopening a file
> "if has("autocmd")
> "  au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
> "endif
> 
> " Uncomment the following to have Vim load indentation rules and plugins
> " according to the detected filetype.
> "if has("autocmd")
> "  filetype plugin indent on
> "endif
> 
> " The following are commented out as they cause vim to behave a lot
> " differently from regular Vi. They are highly recommended though.
> "set showcmd		" Show (partial) command in status line.
> "set showmatch		" Show matching brackets.
> "set ignorecase		" Do case insensitive matching
> "set smartcase		" Do smart case matching
> "set incsearch		" Incremental search
> "set autowrite		" Automatically save before commands like :next and :make
> "set hidden		" Hide buffers when they are abandoned
> "set mouse=a		" Enable mouse usage (all modes)
> 
> " Source a global configuration file if available
> if filereadable("/etc/vim/vimrc.local")
>   source /etc/vim/vimrc.local
> endif
> set fileencodings=ucs-bom,utf-8,cp936,gb18030,big5,euc-jp,euc-kr,latin1
> set termencoding=utf-8
> set encoding=utf-8

接下來我們來手動編譯Tcl-Tk-Python 3.9.1。
首先前往https://www.tcl.tk/､http://python.org/､https://github.com/pypa/setuptools/releases､https://github.com/pypa/pip/releases下載我們的四大件。

Tcl､Tk的安裝只需要解壓後進入相應的Unix目錄下，F4後輸入命令：

> ./configure
> make
> sudo make install

即可。

Python安裝需要修改Modules下的Setup或Setup.dist，將其中幾行修改如下以啓用Tcl､Tk：

> **#** *** Always uncomment this (leave the leading underscore in!):
>  _tkinter _tkinter.c tkappinit.c -DWITH_APPINIT \
> **#** *** Uncomment and edit to reflect where your Tcl/Tk libraries are:
> 	-L/usr/local/lib \
> **#** *** Uncomment and edit to reflect where your Tcl/Tk headers are:
> **#**	-I/usr/local/include \
> **#** *** Uncomment and edit to reflect where your X11 header files are:
> 	-I/usr/X11R6/include \
> **#** *** Or uncomment this for Solaris:
> **#**	-I/usr/openwin/include \
> **#** *** Uncomment and edit for Tix extension only:
> **#**	-DWITH_TIX -ltix8.1.8.2 \
> **#** *** Uncomment and edit for BLT extension only:
> **#**	-DWITH_BLT -I/usr/local/blt/blt8.0-unoff/include -lBLT8.0 \
> **#** *** Uncomment and edit for PIL (TkImaging) extension only:
> **#**     (See http://www.pythonware.com/products/pil/ for more info)
> **#**	-DWITH_PIL -I../Extensions/Imaging/libImaging  tkImaging.c \
> **#** *** Uncomment and edit for TOGL extension only:
> **#**	-DWITH_TOGL togl.c \
> **#** *** Uncomment and edit to reflect your Tcl/Tk versions:
> 	-ltk8.6 -ltcl8.6 \
> **#** *** Uncomment and edit to reflect where your X11 libraries are:
> **#**	-L/usr/X11R6/lib \
> **#** *** Or uncomment this for Solaris:
> **#**	-L/usr/openwin/lib \
> **#** *** Uncomment these for TOGL extension only:
> **#**	-lGL -lGLU -lXext -lXmu \
> **#** *** Uncomment for AIX:
> **#**	-lld \
> **#** *** Always uncomment this; X11 libraries to link with:
> 	-lX11

接下來回到Python文件夾內，輸入命令：

> ./configure --prefix=/usr/local/pyth --enable-optimizations --without-ensurepip
> make
> sudo make install
> sudo ln -s /usr/local/pyth/bin/python3.9 /usr/bin/pyth

最後輸入pyth，就可以初步使用Python 3.9.1了。

接下來解壓Setuptools和Pip。
分別進入其目錄內輸入命令：

> sudo pyth setup.py install

即可安裝。

最後輸入：

> sudo mkdir /home/$USERNAME/.cache/pip/
> sudo mkdir /home/$USERNAME/.cache/pip/http/
> sudo chown -R root /home/$USERNAME/.cache/pip/
> sudo chown -R root /home/$USERNAME/.cache/pip/http/

以去除Pip的報錯，此時一個完整的Python 3.9.1就安裝好了。



**第七章：加速主義好**

爲了加速使用者的體驗，筆者在此推薦輸入命令：

> sudo apt install lxde

然後登出該賬戶，在齒輪裏選擇LXDE這一桌面環境，點擊確定。
接下來是修復LXDE，這一最快的GNU/Linux桌面環境的快捷鍵。
其桌面環境已經幫我們修好了F4這一按鍵，以及部分地修復了vim的右鍵菜單，接下來要修復的是Ctrl+Alt+T。

輸入命令：
vim是vi的升級版，其上下左右使用退格鍵更好。

> sudo vim ~/.config/openbox/lxde-rc.xml

然後在其中有很多“keybind key”的最末尾，的最內層嵌套框架內輸入：
```
    <!-- Launch LXTerminal with Ctrl+Alt+t-->
    <keybind key="C-A-t">
      <action name="Execute">
        <command>lxterminal</command>
      </action>
    </keybind>
```

保存退出即可，如果不行請重啓。



**第八章：配置語言**

在經過重啓之後，登出再登錄，點擊齒輪更換桌面系統，配置X11的語言：
設置、區域和語言、點擊加號，選擇Other、Chinese (Rime)，再點擊加號，選擇Other、Chinese (Pinyin)。

接下來配置第一個桌面系統的語言：
左下角的菜單欄、區域和語言（輸入法配置）、選擇IBus Preferences、點擊Input Method、點擊加號，選擇Other、Chinese (Rime)，再點擊加號，選擇Other、Chinese (Pinyin)

** 好了，到此爲止，我相信大家都學會了Pure OS的使用了吧！**



**第九章：爲什麼不是各色其他在 gnu.org 上的操作系統？**

爲什麼不是G$bian-G$untu(etc.) GNU/Linux？

G$bian-G$untu(etc.)[1] GNU/Linux，其具有間諜軟件/Grand Unified Bootloader即分區表病毒，經本人親身驗證，跑去北京請別的程序員爲我的計算機安裝GNU/Linux時才發現，其是以習近平-特郎普首，通過G$bian和G$untu(etc.)官網散播的反革命網絡軍閥病毒。
馬恩百科資料庫工作組裏面的自由軟件使用者轉爲反革命不是沒有原因的，原因就是因爲其主要選用了惡臭的G$bian-G$untu(etc.) GNU/Linux，它們可能被習近平和特郎普選中所以不被病毒感染，然而鄙人沒有這麼幸運，銘瑄主機板上的Gebian-Gbuntu(etc.) GNU/Linux直接就掛掉了，這也從側面反映了其程序貴族和工人貴族的醜惡猙獰面目。

爲什麼不是Trisquel？

在筆者的計算機上無法安裝其標準版本，最後一步的間諜軟件/Grand Unified Bootloader即分區表病毒無法安裝。

爲什麼不是Trisquel Mini？

其似乎沒有間諜軟件/Grand Unified Bootloader即分區表病毒，但是其網絡代理存在待以解決的問題，並且其基於G$untu，這是有些危險的，儘管其是捐贈自由軟件基金會時附贈的禮物的一部分。

爲什麼不是gNewSence？

最後一步的間諜軟件/Grand Unified Bootloader即分區表病毒無法安裝。

爲什麼不是Dragora/Guix？

它們無法使用Trisquel/G$untu系的Startup Disk Creator製作Live。

爲什麼不是Ututo S？

它在筆者的計算機上無法安裝，並且其弄壞了我的一個高速的128G USB，使其FDD化，無法再安裝其他Live了，甚至使用專業的數據恢復軟件都無法恢復。

**第十章：自由軟件基金會對馬列之聲/G$bian/G$untu的批判**

M$Line OS

M$Line OS（以前稱為CyanogenMod）是Android的修改版，其中包含私有庫。 它還說明了如何安裝Google爲Android分發的私有應用程序，爲高度侵犯隱私搭建了橋樑。

筆者在此推薦和Sony Nexus有關的並非基於魔改過的GNU/Linux內核的非M$Android系的Sailfish OS/旗魚操作系統。

G$bian

G$bian的《社會契約》規定了使G$bian成為完全自由的軟件的目標，並且G$bian認真地將私有軟件排除在官方的G$bian系統之外。但是，G$bian還維護著私有軟件的存儲庫。根據該項目，該軟件“不是G$bian系統的一部分”，但是該存儲庫託管在該項目的許多主服務器上，人們可以通過瀏覽G$bian的在線軟件包數據庫及其Wiki輕鬆找到這些私有軟件包。

還有一個“貢獻”資源庫；它的軟件包是自由的，但是其中一些軟件包可以加載單獨分發的私有程序。這也沒有與G$bian的主要發行版完全分開。

G$bian是唯一將私有blob排除在其主要發行版之外的常見非認可發行版。但是，部分問題仍然存在。私有固件文件存在於G$bian的私有存儲庫中，該文件在debian.org上的文檔中進行了引用，並且在某些情況下，安裝程序建議將其用於計算機上的外圍設備。

另外，一些正式的G$bian自由程序邀請用戶安裝一些私有程序。具體來說，Firefox和Chromium的G$bian版本建議將私有插件安裝到其中。

G$bian的Wiki還包括有關安裝私有固件的頁面。

G$untu(etc.)

G$untu(etc.)維護著私有軟件的特定存儲庫，Canonical在其某些發行渠道中明確宣傳並推薦以G$untu(etc.)為名的私有軟件。G$untu(etc.)提供了僅安裝自由軟件包的選項，這意味著它也提供了安裝私有軟件包的選項。此外，G$untu(etc.)中包含的Linux版本（內核）包含固件Blob。

“G$untu(etc.)軟件中心”列出了混雜在一起的私有程序和自由程序。很難分辨哪些是自由的，因為自由下載的私有程序被標記為“自由”。

G$untu(etc.)似乎允許將帶有商標的精確副本商業化分發；僅對於修改版本，才需要刪除商標。這是商標可接受的政策。同一頁的下一頁對“G$untu(etc.)專利”作了含糊和不祥的陳述，但沒有提供足夠的細節來表明這是否構成侵略。

該頁面使用誤導性術語“知識產權”來分散混亂，該術語錯誤地假定商標法和專利法以及其他幾項法律屬於一個概念框架。毫無例外地使用該術語是有害的，因此在引用他人對該術語的使用後，我們應該始終拒絕該術語。但是，這並不是將G$untu(etc.)作為GNU / Linux發行版的實質性問題。

**尾聲：自由軟件基金會創始人理查德‧斯托曼反擊鄧小平實用主義的雞班圖系統**
**G$untu：间谍软件？自由软件基金会创始人Richard Stallman谈雞班图系统**
**G$untu : The Spyware，自从雞班图更新中加入了亚马逊，这使得社区强烈不满。自由软件理应由自由和安全著称，但雞班图唱了反调。就像里面说的“实用性第一”，这是完全错误的。可能某些自由软件确实没有那么实用，但私有软件在道德上就落了自由软件一条街。**
**https://www.youtube.com/watch?v=CP8CNp-vksc**
**https://www.bilibili.com/video/av95382892/**
