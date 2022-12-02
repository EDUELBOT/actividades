def contar(n):
    Si n es 0 hay un digito
    if n == 0: 
        return 1
    else:  En otro caso
        i = 0
          Dividimos por 10 mientras n > 0
        while n > 0:
            n //= 10
            i += 1 # Conteo de digitols
        return i