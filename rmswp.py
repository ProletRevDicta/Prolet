import os,sys
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if b[-3:]=='swp':
            print(pa:='%s/%s'%(a[0],b))
            os.remove(pa)
