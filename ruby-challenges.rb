# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# - create a method called isEven
# - input: number
# - check if the num is even by using the modulo operator
    # - use a conditional and string interpolation
    # - if num is even return num is even  
    # - else return num is odd
# - display the string by invoking the method isEven and passing in a num

def isEven num 
    if num % 2 == 0
        "#{num} is even"
    else 
        "#{num} is odd"
    end
end  

p isEven reposts1
p isEven reposts2
p isEven reposts3


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# Create a method named removeVowels
# Input: string
# Output: string without the vowels
    # use the .delete method to remove the vowels if found in the word

def removeVowels word    
    word.delete "aeiouAEIOU"
end

p removeVowels beatles_album1
p removeVowels beatles_album2
p removeVowels beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# Create a method called isPalindrome
# Input: string
# Output: a string that says whether it is or isn't a palindrome
    # first change the word to uppercase to avoid case sensitivity and store in a new variable
    # use a conditional to check that new variable 
        # use the .reverse method to evaluate if the new variable and reversed is the same
        # if so then use string interpolation and the original word to print the outcome

def isPalindrome word 
   newWord = word.upcase
    if newWord == newWord.reverse
        "#{word} is a palindrome"
    else 
        "#{word} is not a palindrome"
    end 
end

p isPalindrome palindrome_test_case1
p isPalindrome palindrome_test_case2
p isPalindrome palindrome_test_case3