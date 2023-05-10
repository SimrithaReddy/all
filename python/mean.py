n = int(input())
tmp = input().split(' ') 
su = 0
for i in range(0,n):
	su+=int(tmp[i])
mean = int(su/n)
print(mean)