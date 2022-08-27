import os,sys
for a in os.walk(sys.path[0]):
    if not a[2]:
        try:os.removedirs(a[0])
        except:pass
