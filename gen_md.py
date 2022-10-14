from urllib.parse import quote
import os,sys
t='''| TXT文件 | PDF文件 |
| ------- | ------- |\n'''

t3='''| TXT文件 | PDF文件 |
| ------- | ------- |\n'''
l=[]
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if(b[-3:]in['txt','TXT'])and(a[0].find('档案图')==-1):
            l.append([b,a[0]])
l.sort()
l01=l[:int(len(l)/2)]
l02=l[int(len(l)/2):]
for b in l01:
    t='%s| [%s](%s) | %s |\n'%(t,'.'.join(b[0].split('.')[:-1]),'%s/%s'%('/'.join([quote(c)for c in b[1].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote(b[0])),'[下载](%s)'%('%s/%s'%('/'.join([quote(c)for c in b[1].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote('%s.pdf'%'.'.join(b[0].split('.')[:-1]))))if os.path.exists('%s/%s.pdf'%(b[1],'.'.join(b[0].split('.')[:-1])))else'暂无')
for b in l02:
    t3='%s| [%s](%s) | %s |\n'%(t3,'.'.join(b[0].split('.')[:-1]),'%s/%s'%('/'.join([quote(c)for c in b[1].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote(b[0])),'[下载](%s)'%('%s/%s'%('/'.join([quote(c)for c in b[1].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote('%s.pdf'%'.'.join(b[0].split('.')[:-1]))))if os.path.exists('%s/%s.pdf'%(b[1],'.'.join(b[0].split('.')[:-1])))else'暂无')

print('FIN1...')

t2='''| 华修总参谋部政治部材料 | PDF文件 |
| ------- | ------- |\n'''
l2=[]
for a in l:
    if a[0].find('总参谋部')!=-1:
        l2.append(a)
l=l2
l.sort()
for b in l:
    t2='%s| [%s](%s) | %s |\n'%(t2,'.'.join(b[0].split('.')[:-1]),'%s/%s'%('/'.join([quote(c)for c in b[1].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote(b[0])),'[下载](%s)'%('%s/%s'%('/'.join([quote(c)for c in b[1].replace('/home/a/Prolet/','').replace('/home/a/Prolet','').split('/')]),quote('%s.pdf'%'.'.join(b[0].split('.')[:-1]))))if os.path.exists('%s/%s.pdf'%(b[1],'.'.join(b[0].split('.')[:-1])))else'暂无')

print('FIN2...')

f=open('LIST.md','w+');f.write(t);f.close()
f=open('README.md.bak','r');t0=f.read();f.close()
t0=t0.replace('[TABLE=LIST.md]','%s\n\n%s'%(t,t3)).replace('[TABLE=总参谋部]',t2)
f=open('README.md','w+');f.write(t0);f.close()
