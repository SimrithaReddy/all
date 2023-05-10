n = input() #int!      
key = int(n)
if(key <0):
    key = key * (-1)
cubes = 0
str1 = str(key)
for i in range (0,len(str1)):
    cubes =int(str1[i])*int(str1[i])*int(str1[i])+cubes
if cubes == key:
    print("Yes")
else:
    print("No")