terms = []
(2..100).each do |a|
  (2..100).each do |b|
    terms << a**b
  end
end

uniq_terms = terms.uniq
puts "Answer: #{uniq_terms.size}"
