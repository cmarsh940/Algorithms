def dencrypt(s, n):
    word = ''
    for c in s:
        if c >= 'A' and c <= 'Z':
            word += chr(ord('A') + (ord(c) - ord('A') + n) % 26)
        elif c >= 'a' and c <= 'z':
            word += chr(ord('a') + (ord(c) - ord('a') + n) % 26)
        else:
            word += c
    return word


def main():
    s0 = 'CODING DOJO'

    s1 = dencrypt(s0, 13)
    print(s1)  # PBQVAT QBWB

    s2 = dencrypt(s1, 13)
    print(s2)  # CODING DOJO


if __name__ == '__main__':
    main()