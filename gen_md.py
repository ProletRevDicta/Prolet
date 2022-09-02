from urllib.parse import quote
import os,sys
t='''| TXT文件 | PDF文件 |
| ------- | ------- |\n'''
l=[]
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if b[-3:]in['txt','TXT']:
            l.append([b,a[0]])
l.sort()
for b in l:
    t='%s| [%s](%s) | %s |\n'%(t,'.'.join(b[0].split('.')[:-1]),'%s/%s'%('/'.join([quote(c)for c in b[1].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote(b[0])),'[下载](%s)'%('%s/%s'%('/'.join([quote(c)for c in b[1].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote('%s.pdf'%'.'.join(b[0].split('.')[:-1]))))if os.path.exists('%s/%s.pdf'%(b[1],'.'.join(b[0].split('.')[:-1])))else'暂无')
f=open('LIST.md','w+');f.write(t);f.close()
