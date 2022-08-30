// RECURSIDADE
function fatorial(n) {
    if (n==1) return 1
    return n*fatorial(n-1)
}

console.log(fatorial(1))

/*
5! = 5 x 4 x 3 x 2 x 1

n! = n x (n-1)!
1! = 1

*/