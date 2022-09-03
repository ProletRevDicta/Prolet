Any2Any的變聲器早就有了，不過被中國腦控部隊等壟斷着，在GitHub上有Real Time Voice Cloning

這是我的實驗報告：

https://github.com/CorentinJ/Real-Time-Voice-Cloning
Ubuntu 18.04
Make
Python3.7.9+zlib*+Tkinter+TCL
(Zhi Hu Source_Page)
(Setup.dist)
Setuptool 5.0.3.2
Pip-20.2.4
NVIDIA driver 410.48
CUDA 10.0
CUDNN 7.6.5
TensorRT 5
Torch 1.4.0+cu100
Torchvision 0.5.0+cu100
Torchaudio 0.4.0
Tensorflow==1.15.3(By pip)
Tensorflow-gpu==1.15.3(By pip)

Tensorflow 1.15.3支持nvidia-drivers-455。
Pytorch選擇支持CUDA Toolkit 10.0。
先安裝好，CUDA Toolkit 10.0。
注意：在安裝好CUDA Toolkit 10.0時，執行完sudo apt install cuda后輸入：“sudo ln -sf /usr/local/cuda-10.0/targets/x86_64-linux/lib/libcudnn.so.7.6.5 /usr/local/cuda-10.0/targets/x86_64-linux/lib/libcudnn.so.7”，即可。
拆卸CUDA Toolkit 10.0，安裝CUDA Toolkit 11.1。
安裝CUDNN 8.0.5.39-1+CUDA11.1，安裝TensorRT 7.2.1.6。
此時在apt-key里已經有了CUDA Toolkit 10.0 / CUDA Toolkit 11.1兩套源，儘管cuda-10-0、cuda-11-1對立雙方並不能完全並存，但是Tensorflow 1.15.3卻僅僅在CUDA Toolkit 10.0的libcudart.so.10.0、libcublas.so.10.0、libcufft.so.10.0、libcurand.so.10.0、libcusolver.so.10.0、libcusparse.so.10.0、libcudnn.so.7上報錯。
第一批報錯僅需：sudo apt install cuda-cudart-10-0 cuda-cublas-10-0 cuda-cufft-10-0 cuda-curand-10-0 cuda-cusolver-10-0 cuda-cusparse-10-0 -y
第二批報錯僅需在安裝好CUDA Toolkit 10.0時，執行完sudo apt install cuda后輸入：“sudo ln -sf /usr/local/cuda-10.0/targets/x86_64-linux/lib/libcudnn.so.7.6.5 /usr/local/cuda-10.0/targets/x86_64-linux/lib/libcudnn.so.7”，即可。
