def fac(n)
  n==1 ? 1 : n*fac(n-1)
end

puts fac(100).to_s.split('').reduce(0){ |m,i| m += i.to_i }
