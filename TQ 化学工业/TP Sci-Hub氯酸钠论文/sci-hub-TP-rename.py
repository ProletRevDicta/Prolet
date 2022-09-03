import os,sys
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if b!='sci-hub-rename.py':
            t=''
            f=open('%s/%s'%(a[0],b),'r');t=f.read();f.close()
            t=t.split('=')[0]
            t=[c.strip()for c in t.split('\n')[:4]]
            t=' '.join(t)
            os.rename('%s/%s'%(a[0],b),'%s/TQ %s.txt'%(a[0],t[:32].replace('*','').replace('/','-').replace(':','-').replace('|','-')))
