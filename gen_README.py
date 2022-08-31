from urllib.parse import quote
import os,sys
fo=[]
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if b[-3:]in['txt','TXT']:
            if a[0]not in fo:fo.append(a[0])
fo=[a for a in fo if a!='/home/a/Prolet']
for d in fo:
    t='''| TXT文件 | PDF文件 |
| ------- | ------- |\n'''
    for a in os.walk(d):
        for b in a[2]:
            if b[-3:]in['txt','TXT']:
                t='%s| [%s](%s) | %s |\n'%(t,'.'.join(b.split('.')[:-1]),'%s/%s'%('/'.join([quote(c)for c in a[0].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote(b)),'[下载](%s)'%('%s/%s'%('/'.join([quote(c)for c in a[0].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote('%s.pdf'%'.'.join(b.split('.')[:-1]))))if os.path.exists('%s/%s.pdf'%(a[0],'.'.join(b.split('.')[:-1])))else'暂无')
    f=open('%s/README.md'%d,'w+');f.write(t);f.close()
