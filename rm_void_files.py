import os,sys
for a in os.walk(sys.path[0]):
    for b in a[2]:
        pa='%s/%s'%(a[0],b)
        if os.stat(pa).st_size==2:
            print('remove:',pa)
            os.remove(pa)
