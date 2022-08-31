from urllib.parse import quote
import os,sys
t='| PDF格式 | TXT格式 |\n'
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if b[-3:]in['pdf','PDF']:
            t='%s| [%s](%s) | %s |\n'%(t,'.'.join(b.split('.')[:-1]),'%s/%s'%('/'.join([quote(c)for c in a[0].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote(b)),'[TXT文件](%s)'%('%s/%s'%('/'.join([quote(c)for c in a[0].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote('%s.txt'%'.'.join(b.split('.')[:-1]))))if os.path.exists('%s/%s.txt'%(a[0],'.'.join(b.split('.')[:-1])))else'暂无')
f=open('LIST.md','w+');f.write(t);f.close()
