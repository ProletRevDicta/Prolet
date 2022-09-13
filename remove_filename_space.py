import os,sys
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if b[-3:]=='pdf'or b[-3]=='txt':
            if b.split('.pdf')[0].split('txt')[0].strip()!=b.split('.pdf')[0].split('txt')[0]:
                print('\'%s\''%b)
                os.rename('%s/%s'%(a[0],b),dn:='%s/%s.%s'%(a[0],b.split('.pdf')[0].split('txt')[0].strip(),b.split('.')[-1:][0]))
                print(dn)
