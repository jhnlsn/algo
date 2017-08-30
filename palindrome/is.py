def isPalindrome(S):
    length=len(S)
    if length < 2:
        return True
    elif S[0] != S[-1]:
        return False
    else:
        return isPalindrome(S[1:length - 1])

# Yes
print isPalindrome("abnnba")

# No
print isPalindrome("what")