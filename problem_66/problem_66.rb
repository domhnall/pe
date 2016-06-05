LIMIT = 1000
SQUARES = (1...33).map{ |i| i*i }

def is_square?(d)
  SQUARES.include?(d)
end

def min_solution_for_d(d)
  x    = 1
  y    = 1
  test = 0
  while(true)
    test=x*x-d*y*y
    if test<1
      x+=1
      y=(x/Math.sqrt(d)).floor
    elsif test>1
      y+=1
    else
      return [x,y]
    end
  end
end


max_d = 0
max_x = 0
(2..LIMIT).each do |d|
  next if is_square?(d)
  x,y = min_solution_for_d(d)
  puts "Solution for d=#{d} is [#{x},#{y}]"
  if(x>max_x)
    max_x = x
    max_d = d
  end
end

puts "Solution is #{max_d}"
