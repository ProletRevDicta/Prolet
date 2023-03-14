import os,sys
for a in os.walk(sys.path[0]):
    for b in a[2]:
        if(pa:='%s/%s'%(a[0],b)).find('/.')!=-1:
            if pa.find('.git')==-1:
                print(pa)
