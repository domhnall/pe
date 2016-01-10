puts (2**1000).to_s.split('').reduce(0){ |m,i| m+=i.to_i; m}
