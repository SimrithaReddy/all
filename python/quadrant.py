n = int(input())     
i=0               
while i<n:                             
	tmp = input().split(" ")    
	x=int(tmp[0])                  
	y=int(tmp[1])                  
	if x>0 and y>0 :              
		print("Q1")       
	elif x<0 and y>0 :            
		print("Q2")              
	elif x<0 and y<0 :         
		print("Q3")         
	else :
		print("Q4")
	i+=1