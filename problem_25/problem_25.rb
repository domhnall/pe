REQUIRED_LENGTH = 1000

ans = 3
fib_n = 2
fib_n_minus_1 = 1
fib_n_minus_2 = 1

while(fib_n.to_s.size<REQUIRED_LENGTH) do
  ans+=1
  fib_n_minus_2 = fib_n_minus_1
  fib_n_minus_1 = fib_n
  fib_n = fib_n_minus_1 + fib_n_minus_2
  puts "Fib n #{fib_n}"
end

puts "Answer is #{ans}"
