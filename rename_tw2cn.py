import os,sys,opencc
c=opencc.OpenCC('tw2s.json')
for a in os.walk(sys.path[0]):
    for b in a[2]:
        op='%s/%s'%(a[0],b)
        tp=c.convert(op)
        if not os.path.exists(tpa:='/'.join(tp.split('/')[:-1])):os.makedirs(tpa)
        print(op,tp)
        os.rename(op,tp)
