import os,sys
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if b[-3:]=='pdf':
            if b.split('.pdf')[0].strip()!=b.split('.pdf')[0]:
                print('\'%s\''%b)
                os.rename('%s/%s'%(a[0],b),dn:='%s/%s.pdf'%(a[0],b.split('.pdf')[0].strip()))
                print(dn)
