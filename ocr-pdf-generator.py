from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.rl_config import defaultPageSize
import os
import numpy as np
dp,wr,ws,lo,le,to,he,wi,wd=defaultPageSize,'webcam recognize','words_result','location','left','top','height','width','words'

pdfmetrics.registerFont(TTFont('fzyh', '/usr/share/fonts/truetype/chinese/方正悠黑_510M.ttf'))

ca=canvas.Canvas('se.pdf')
def ps(pl,so,st):
    n=[so[0]/st[0],so[1]/st[1]]
    return [pl[a]*n[a]for a in range(len(pl))]
def ds(ca,si,pl,tx):
    global dp
    pl=ps(pl,dp,[1510,2379])
    si=18#si*dp[1]/1169
    ca.setFont('fzyh',si)
    ca.drawString(pl[0],dp[1]-si-pl[1],tx)
def intr(a):
    try:int(a);return True
    except:return False
for a,b,c in os.walk(wr):
    c=[[int(ir),a]for a in c if intr(ir:=a.split('.')[0][-4:])]
    c.sort(key=lambda x:x[0])
    c=np.asarray(c)[:,1].tolist()
    for d in c:
        try:
            f=open('/'.join([wr,d]),'rb');i=eval(f.read());f.close()
            #ar=[]
            #for a in i[ws]:ar.append(a[lo][he])
            #ar=int(sum(ar)/len(ar))
            for a in i[ws]:
                ds(ca,a[lo][he],[a[lo][le],a[lo][to]],a[wd])
            ca.showPage()
        except:ca.showPage()
ca.save()
