import os,sys
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if b[-2:]=='md':
            os.remove('%s/%s'%(a[0],b))
